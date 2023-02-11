import React from "react";
import Head from "next/head";
import Image from "next/image";
import { Partners } from "@/components/Partners";
import { Call } from "@/components/contact/CallUs";
import PhotosAbout from "@/assents/img/about/PhotosAbout.png";
import Abouts from "@/assents/img/about/About.svg";
import Abouts_1 from "@/assents/img/about/About-1.svg";
import Abouts_2 from "@/assents/img/about/About-2.svg";
import Photo from "@/assents/img/about/Photo.png";
import Photo1 from "@/assents/img/about/Photo-1.png";
import Photo2 from "@/assents/img/about/Photo-2.png";
import Photo3 from "@/assents/img/about/Photo-3.png";
import Photo4 from "@/assents/img/about/Photo-4.png";
import Photo5 from "@/assents/img/about/Photo-5.png";
import Photo6 from "@/assents/img/about/Photo-6.png";
import Photo7 from "@/assents/img/about/Photo-7.png";
import Photo8 from "@/assents/img/about/Photo-8.png";
import styles from "@/styles/PageAbout.module.css";

const Team = [
  { img: Photo, name: "Name Surname", job: "Worker" },
  { img: Photo1, name: "Name Surname", job: "Worker" },
  { img: Photo2, name: "Name Surname", job: "Worker" },
  { img: Photo3, name: "Name Surname", job: "Worker" },
  { img: Photo4, name: "Name Surname", job: "Worker" },
  { img: Photo5, name: "Name Surname", job: "Worker" },
  { img: Photo6, name: "Name Surname", job: "Worker" },
  { img: Photo7, name: "Name Surname", job: "Worker" },
  { img: Photo8, name: "Name Surname", job: "Worker" },
];

const Statistics = [
  { Img: Abouts, numbers: ">200", Text: "Number" },
  { Img: Abouts_1, numbers: ">70", Text: "Number" },
  { Img: Abouts_2, numbers: ">20", Text: "Number" },
];

function About() {
  return (
    <>
      <Head>
        <title>Buildit--About</title>
        <meta name="description" content="Buildit About" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
      <div className={styles.container__Statistics}>
        <h2>Statistics</h2>
        <h3>Development in numbers</h3>
        <div className={styles.container__Statistic}>
          {Statistics.map((stactic) => (
            <div className={styles.Statistics} key={stactic.Text}>
              <div>
                <Image src={stactic.Img} alt={stactic.Text} />
                <div className={styles.Statistics__numb}>
                  <p>{stactic.numbers}</p>
                  <p>{stactic.Text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Partners />
      </div>
      <section className={styles.container__Teams}>
        <h2>Our team</h2>
        <h3>Let’s meet</h3>
        <div className={styles.container__Team}>
          {Team.map((team) => (
            <div className={styles.Teams} key={team.name}>
              <Image src={team.img} alt={team.name} />
              <p>{team.name}</p>
              <p>{team.job}</p>
            </div>
          ))}
        </div>
      </section>
      <Call />
    </>
  );
}

export default About;
