import { Html, Head, Main, NextScript, DocumentProps } from "next/document";
import { GoogleTagNoScript } from "@/gta";

interface MyDocumentProps extends DocumentProps {
  emotionStyleTags: JSX.Element[];
}

export default function MyDocument({ emotionStyleTags }: MyDocumentProps) {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="emotion-insertion-point" content="" />
        {emotionStyleTags}
      </Head>
      <body>
        <GoogleTagNoScript />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
