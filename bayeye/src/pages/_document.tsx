import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>👁️ BayEye</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <body style={{ backgroundColor: 'rgba(247, 246, 244)' }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
