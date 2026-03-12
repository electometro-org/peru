#!/usr/bin/env python3
"""
Extract i18n keys from compact JSON files in electometro-org.github.io repo
and merge them with es-qa.json.

This script is run by GitHub Actions after cloning the electometro-org.github.io repo.
"""

import json
import os
import sys


def deep_merge(base, updates):
    """
    Deep merge updates into base dict.
    Updates overwrite base values at leaf level.
    """
    result = base.copy()
    for key, value in updates.items():
        if key in result and isinstance(result[key], dict) and isinstance(value, dict):
            result[key] = deep_merge(result[key], value)
        else:
            result[key] = value
    return result


def sort_nested_dict(d):
    """Recursively sort a nested dictionary by keys."""
    if isinstance(d, dict):
        return {k: sort_nested_dict(v) for k, v in sorted(d.items())}
    return d


def generate_i18n_structure(parties_file, candidates_file):
    """Generate nested i18n structure from the compact JSON files."""

    # Load parties file
    with open(parties_file, "r", encoding="utf-8") as f:
        parties_data = json.load(f)

    # Load candidates file
    with open(candidates_file, "r", encoding="utf-8") as f:
        candidates_data = json.load(f)

    # Build nested structure
    i18n = {
        "data": {
            "version": {
                "qa": parties_data.get("version", "")
            }
        },
        "quiz": {
            "questions": {},
            "topics": {}
        },
        "explanations": {
            "parties": {},
            "candidates": {}
        }
    }

    # Get topics from parties file
    topics = parties_data.get("quiz", {})

    # Generate quiz.questions.{topic_id} and quiz.topics.{topic_id}
    for topic_id, topic_data in topics.items():
        i18n["quiz"]["questions"][topic_id] = topic_data.get("question", "")
        i18n["quiz"]["topics"][topic_id] = topic_data.get("topic", "")

    # Generate explanations.parties.{party_id}.{topic_id}
    parties = parties_data.get("parties", {})
    for party_id, party_data in parties.items():
        if party_id not in i18n["explanations"]["parties"]:
            i18n["explanations"]["parties"][party_id] = {}
        votes = party_data.get("votes", {})
        for topic_id, vote_data in votes.items():
            i18n["explanations"]["parties"][party_id][topic_id] = vote_data.get("comment", "") or ""

    # Generate explanations.candidates.{candidate_id}.{topic_id}
    candidates = candidates_data.get("candidates", {})
    for candidate_id, candidate_data in candidates.items():
        if candidate_id not in i18n["explanations"]["candidates"]:
            i18n["explanations"]["candidates"][candidate_id] = {}
        votes = candidate_data.get("votes", {})
        for topic_id, vote_data in votes.items():
            i18n["explanations"]["candidates"][candidate_id][topic_id] = vote_data.get("comment", "") or ""

    return i18n


def count_keys(d, count=0):
    """Count total leaf keys in nested dict."""
    for v in d.values():
        if isinstance(v, dict):
            count = count_keys(v, count)
        else:
            count += 1
    return count


def main():
    # Script directory
    script_dir = os.path.dirname(os.path.abspath(__file__))

    # Paths relative to script location
    # electometro-org.github.io repo is cloned to ../electometro-data (sibling to app/)
    electometro_data_dir = os.path.join(script_dir, "..", "..", "electometro-data", "json", "latest")

    # i18n folder is at ../i18n (sibling to scripts/)
    i18n_dir = os.path.join(script_dir, "..", "i18n")

    parties_file = os.path.join(electometro_data_dir, "combined_votes_peru_partidos_2026_compact.json")
    candidates_file = os.path.join(electometro_data_dir, "combined_votes_peru_pres_2026_compact.json")
    es_qa_file = os.path.join(i18n_dir, "es-qa.json")

    # Verify input files exist
    if not os.path.exists(parties_file):
        print(f"Error: {parties_file} not found")
        sys.exit(1)

    if not os.path.exists(candidates_file):
        print(f"Error: {candidates_file} not found")
        sys.exit(1)

    if not os.path.exists(es_qa_file):
        print(f"Error: {es_qa_file} not found")
        sys.exit(1)

    print("Generating i18n structure from compact JSON...")
    i18n_structure = generate_i18n_structure(parties_file, candidates_file)
    print(f"  -> Generated {count_keys(i18n_structure)} keys")

    # Load existing es-qa.json
    print(f"Loading {es_qa_file}...")
    with open(es_qa_file, "r", encoding="utf-8") as f:
        es_qa = json.load(f)
    print(f"  -> Loaded {count_keys(es_qa)} existing keys")

    # Deep merge: i18n_structure overwrites existing keys in es_qa
    merged = deep_merge(es_qa, i18n_structure)

    # Sort keys for consistent output
    sorted_merged = sort_nested_dict(merged)

    # Write back to es-qa.json
    with open(es_qa_file, "w", encoding="utf-8") as f:
        json.dump(sorted_merged, f, ensure_ascii=False, indent=2)

    print(f"Wrote {es_qa_file}")
    print(f"  -> Total keys: {count_keys(sorted_merged)}")


if __name__ == "__main__":
    main()