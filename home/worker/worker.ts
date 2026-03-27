interface SEOResponse {
  shouldServe: boolean;
  html: string | null;
  headers: HeadersInit;
}

interface SEOWorker {
  getSEOResponse(url: string, ua: string, acceptHeader: string): Promise<SEOResponse>;
}

interface Env {
  ASSETS?: Fetcher;
  ENVIRONMENT?: string;
  SEO_WORKER?: SEOWorker;
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
