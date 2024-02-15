import {useLayoutEffect, useRef, useMemo} from 'react';

const globalScripts = window?.EDITOR_VARS?.scripts ?? [];

// Add front-end scripts to the editor
export function useScriptsIntoBlocksIFrame() {
  const iframe = useRef(null);
  const scripts = useRef([]);

  useLayoutEffect(() => {
    iframe.current = document.querySelector('iframe');

    if (iframe.current) {
      scripts.current = globalScripts.map((src) => {
        const script = iframe.current.contentWindow.document.createElement('script');
        script.src = src;
        script.async = true;
        iframe.current.contentWindow.document.body.appendChild(script);

        return script;
      });
    }

    return () => {
      if (iframe.current) {
        scripts.current.forEach((script) => {
          iframe.current.contentWindow.document.body.removeChild(script);
        });
      }
    }
  }, []);
}