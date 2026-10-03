/**
 * Custom Tolgee extractor for quiz and explanations keys.
 * Extracts keys from:
 * - quiz.questions.* (national: quiz.questions.<id>; regional: quiz.questions.<regionId>.<id>)
 * - quiz.topics.*    (same shape as quiz.questions)
 * - explanations.parties.*.* (national: explanations.parties.<partyId>.<topicId>)
 * - explanations.candidates.*.* (national: explanations.candidates.<candidateId>.<topicId>;
 *   regional: explanations.candidates.<regionId>.<candidateId>.<topicId>)
 *
 * National and regional entries live under the same top-level keys and are told apart purely by
 * depth: walkTextLeaves recurses until it hits a string value, so it extracts both shapes without
 * needing to special-case "is this a region id" anywhere.
 */

// Recursively walk an object, emitting one key per string leaf (dot-joined path from `prefix`)
function walkTextLeaves(obj, prefix, keys) {
  if (typeof obj !== 'object' || obj === null) return;
  for (const [segment, value] of Object.entries(obj)) {
    const path = [...prefix, segment];
    if (typeof value === 'string') {
      keys.push({ keyName: path.join('.'), defaultValue: value, line: 1 });
    } else if (typeof value === 'object' && value !== null) {
      walkTextLeaves(value, path, keys);
    }
  }
}

export default function extractor(code, fileName) {
  const keys = [];
  const warnings = [];

  // Only process es-qa.json or es.json
  if (!fileName.endsWith('es-qa.json') && !fileName.endsWith('es.json')) {
    return { keys, warnings };
  }

  // Skip if content doesn't look like JSON
  const trimmed = code.trim();
  if (!trimmed.startsWith('{') && !trimmed.startsWith('[')) {
    return { keys, warnings };
  }

  let data;
  try {
    data = JSON.parse(code);
  } catch (e) {
    // Silently skip files that aren't valid JSON
    return { keys, warnings };
  }

  if (data.quiz?.questions) walkTextLeaves(data.quiz.questions, ['quiz', 'questions'], keys);
  if (data.quiz?.topics) walkTextLeaves(data.quiz.topics, ['quiz', 'topics'], keys);
  if (data.explanations?.parties) walkTextLeaves(data.explanations.parties, ['explanations', 'parties'], keys);
  if (data.explanations?.candidates) walkTextLeaves(data.explanations.candidates, ['explanations', 'candidates'], keys);

  return { keys, warnings };
}
