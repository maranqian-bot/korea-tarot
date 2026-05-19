import { useEffect, useMemo, useRef } from "react";
import "./StitchPageRenderer.css";

function extractMatches(source, regex) {
  return [...source.matchAll(regex)].map((match) => match[1]);
}

function parseHtmlDocument(source) {
  const bodyClass = source.match(/<body[^>]*class="([^"]*)"/i)?.[1] ?? "";
  const bodyHtml = source.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? source;
  const styles = extractMatches(source, /<style[^>]*>([\s\S]*?)<\/style>/gi).join("\n");
  const scripts = extractMatches(source, /<script(?![^>]*src)[^>]*>([\s\S]*?)<\/script>/gi).filter(
    (content) => !content.includes("tailwind.config"),
  );

  return { bodyClass, bodyHtml, styles, scripts };
}

export default function StitchPageRenderer({ html }) {
  const containerRef = useRef(null);
  const { bodyClass, bodyHtml, styles, scripts } = useMemo(() => parseHtmlDocument(html), [html]);

  useEffect(() => {
    const previousBodyClass = document.body.className;
    document.body.className = bodyClass;

    const container = containerRef.current;
    if (!container) {
      return () => {
        document.body.className = previousBodyClass;
      };
    }

    container.querySelectorAll("a[href='#']").forEach((anchor) => {
      anchor.setAttribute("href", "javascript:void(0)");
    });

    const cleanups = scripts.map((scriptContent) => {
      try {
        const teardown = new Function(scriptContent)();
        return typeof teardown === "function" ? teardown : null;
      } catch (error) {
        console.warn("Stitch inline script failed", error);
        return null;
      }
    });

    return () => {
      document.body.className = previousBodyClass;
      cleanups.forEach((cleanup) => {
        if (typeof cleanup === "function") {
          cleanup();
        }
      });
    };
  }, [bodyClass, scripts]);

  return (
    <div className="stitch-page">
      <style>{styles}</style>
      <div ref={containerRef} dangerouslySetInnerHTML={{ __html: bodyHtml }} />
    </div>
  );
}
