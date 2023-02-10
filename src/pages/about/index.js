import React from "react";
import Head from "next/head";
import Image from "next/image";
import PhotosAbout from "../../../public/img/PhotosAbout.png";
import styles from "@/styles/PageAbout.module.css";

function About() {
  return (
    <>
      <Head>
        <title>Buildit--About</title>
      </Head>
      <div className={styles.container__PageAbout}>
        <Image src={PhotosAbout} alt="Photo About" />
        <div className={styles.container__AboutInfo}>
          <h2>About us</h2>
          <h3>Owner and investor with a reputation</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit
            sem, vestibulum sed leo eu, malesuada pharetra mauris. Integer
            rhoncus, eros vel euismod tempor, ipsum magna tristique nisi, quis
            ullamcorper enim magna eu orci. Sed semper ex quis semper aliquet.
            Cras hendrerit molestie sapien sed fermentum. Mauris dui tortor,
            viverra vel ultrices in, congue sed ex.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
