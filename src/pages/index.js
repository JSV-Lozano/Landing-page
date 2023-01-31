import Head from "next/head";
import { Hhome } from "@/components/Home";

import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Building</title>
        <meta
          name="description"
          content="We build your website with the best quality"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hhome />
    </>
  );
}
