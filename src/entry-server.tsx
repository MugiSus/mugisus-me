// @refresh reload
import { createHandler, StartServer } from '@solidjs/start/server';

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang='en'>
        <head>
          <meta charset='utf-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='icon' href='/favicon.ico' />
          <link rel='apple-touch-icon' href='/apple-icon.png' />
          <title>mugisus</title>
          <meta name='description' content='A portfolio of mugisus' />
          <meta
            name='keywords'
            content='mugisus, 湊真之, 湊, 真之, Minato Masayuki, Masayuki Minato, Minato, Masayuki'
          />
          <meta property='og:title' content='mugisus' />
          {/* <meta property='og:description' content='A portfolio of mugisus' /> */}
          <meta property='og:description' content='' />
          <meta property='og:type' content='article' />
          <meta property='og:url' content='https://mugisus.me/' />
          <meta property='og:image' content='https://mugisus.me/image.png' />
          <meta
            property='article:published_time'
            content='2026-04-07T09:00:00Z'
          />
          <meta
            property='article:modified_time'
            content='2026-04-07T09:00:00Z'
          />
          <meta name='twitter:card' content='summary' />
          <meta name='twitter:site' content='@mugisus' />
          <meta name='twitter:creator' content='@mugisus' />
          <meta name='twitter:title' content='mugisus' />
          <link rel='stylesheet' href='https://use.typekit.net/gvk7ucm.css' />

          <meta
            name='viewport'
            content='width=device-width, initial-scale=1, viewport-fit=cover'
          />
          {assets}
        </head>
        <body>
          <div id='app'>{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
));
