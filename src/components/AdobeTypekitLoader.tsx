import { onMount } from 'solid-js';

interface AdobeTypekitLoaderProps {
  kitId: string;
  scriptTimeout?: number;
  async?: boolean;
}

export default function AdobeTypekitLoader(props: AdobeTypekitLoaderProps) {
  onMount(() => {
    (function (d) {
      const config = {
        kitId: props.kitId,
        scriptTimeout: props.scriptTimeout ?? 3000,
        async: props.async ?? true,
      };
      const h = d.documentElement;
      const t = setTimeout(function () {
        h.className =
          h.className.replace(/\bwf-loading\b/g, '') + ' wf-inactive';
      }, config.scriptTimeout);
      const tk = d.createElement('script');
      const s = d.getElementsByTagName('script')[0];

      h.className += ' wf-loading';
      tk.src = 'https://use.typekit.net/' + config.kitId + '.js';
      tk.async = true;
      tk.onload = function () {
        clearTimeout(t);
        try {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (window as any).Typekit.load(config);
        } catch (e) {
          console.error(e);
        }
      };

      if (s && s.parentNode) {
        s.parentNode.insertBefore(tk, s);
      } else {
        d.head.appendChild(tk);
      }
    })(document);
  });

  return null;
}
