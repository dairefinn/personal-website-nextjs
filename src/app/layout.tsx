import "./styles.scss";

import Sidebar from "./components/Sidebar/Sidebar";
import Script from "next/script";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <title>Daire Finn</title>
                <base href="/" />

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="My personal website. I use it to keep track of any interesting projects I've been working on and to also showcase my professional experience." />
                <meta name="keywords" content="Daire Finn, Daire, Finn, Senior Software Developer, Software Developer, Web Developer, Full-Stack Developer, Ireland, Portfolio, Projects, Experience, Career, Resume, CV, Personal Website, Personal, Website" />
                <meta name="author" content="Daire Finn" />
                <meta name="language" content="English" />
                <meta name="distribution" content="global" />
                <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />

                <link rel="icon" type="image/x-icon" href="/images/favicons/favicon.ico" />
                <link rel="icon" type="image/png" sizes="32x32" href="/images/favicons/favicon-32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/images/favicons/favicon-16.png" />

                <link rel="canonical" href="https://dairefinn.com/" />

                <Script src="https://kit.fontawesome.com/08957269d5.js" strategy="afterInteractive" crossOrigin="anonymous"></Script>
            </head>
            <body>
                <div className="app-wrapper">
                    <div className="container-sidebar print-hidden">
                        <Sidebar />
                    </div>
                    <div className="container-page">
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}
