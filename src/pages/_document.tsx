import {
    Html, Head, Main, NextScript,
} from 'next/document';

import { Analytics } from '@vercel/analytics/next';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                { /* eslint-disable-next-line @next/next/no-title-in-document-head */ }
                <title>Perspective Funnel Preview</title>
            </Head>
            <body className="antialiased font-sans">
                <Main />
                <NextScript />
                <Analytics />
            </body>
        </Html>
    );
}
