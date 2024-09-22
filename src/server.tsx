import { renderToReadableStream } from "react-dom/server";
import { Layout } from "./layout.tsx";
import { Component } from "./my-component.tsx";

Bun.serve({
  async fetch(req) {
    const url = new URL(req.url);

    if (url.pathname.startsWith('/public') && !url.pathname.includes('..')) {
      return new Response(
        Bun.file(url.pathname.slice(1)),
      )
    }
    if (url.pathname === '/') {
      const stream = await renderToReadableStream(
        <Layout>
          <Component path={url.pathname} />
        </Layout>
      );
      return new Response(stream, {
        headers: { "Content-Type": "text/html" },
      });
    }
    return new Response("Not found", { status: 404 });
  },
});