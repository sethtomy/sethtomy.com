import Head from "next/head";
import React from "react";

export const siteTitle = 'Seth Tomy'

export default function LayoutHeader(): React.JSX.Element {
  return (
    <Head>
      <title>{siteTitle}</title>
      <meta
        name="description"
        content="Learn how to build a personal website using Next.js"
      />
      <meta
        property="og:image"
        content={`https://og-image.vercel.app/${encodeURI(
          siteTitle,
        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
      />
      <meta name="og:title" content={siteTitle}/>
      <meta name="twitter:card" content="summary_large_image"/>
    </Head>
  );
}