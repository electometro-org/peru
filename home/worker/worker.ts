interface Env {
  ASSETS: Fetcher;
  ENVIRONMENT?: string;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (env.ENVIRONMENT === 'production') {
      const ua = request.headers.get('user-agent') || '';
      const acceptHeader = request.headers.get('accept') || '';

      const seoData = await env.SEO_WORKER.getSEOResponse(request.url, ua, acceptHeader);

      if (seoData.shouldServe && seoData.html !== null) {
        return new Response(seoData.html, { headers: seoData.headers });
      }
    }

    // QA, normal users, or non-crawler: serve from assets
    return env.ASSETS.fetch(request);
  },
};
