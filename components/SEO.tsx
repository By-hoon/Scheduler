import Head from "next/head";
import { SEOProps } from "shared/const";

export default function Seo({ title }: SEOProps) {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
}
