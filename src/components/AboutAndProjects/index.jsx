import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Contact } from "../contact";
import oto from "@/assents/img/projects/ото.png";
import Photo from "@/assents/img/projects/Photo.png";
import Photo1 from "@/assents/img/projects/Photo-1.png";
import Photo2 from "@/assents/img/projects/Photo-2.png";
import Photo3 from "@/assents/img/projects/Photo-3.png";
import Photo4 from "@/assents/img/projects/Photo-4.png";
import Photo5 from "@/assents/img/projects/Photo-5.png";
import Card from "@/assents/img/projects/Card-1.png";
import Card2 from "@/assents/img/projects/Card-2.png";
import Card3 from "@/assents/img/projects/Card-3.png";
import styles from "@/styles/AboutAndProjects.module.css";

const Photos = [
  { Img: Photo5, alt: "Photo Project6" },
  { Img: Photo, alt: "Photo Project1" },
  { Img: Photo4, alt: "Photo Project5" },
  { Img: Photo3, alt: "Photo Project4" },
];
const Photos2 = [
  { Img: Card, alt: "Photo Card1" },
  { Img: Card2, alt: "Photo Card2" },
  { Img: Card3, alt: "Photo Card3" },
];

function AboutAndProjects() {
  return (
    <>
      <div className={styles.container__About}>
        <Image className={styles.Images} src={oto} alt="oto about" />
        <div className={styles.container__About_Info}>
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
          <Link href="">Explore</Link>
        </div>
      </div>
      <div className={styles.container__Projects}>
        <div className={styles.container__Project}>
          <h2>Available Properties</h2>
          <h3>Featured Listing</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit
            sem, vestibulum sed leo eu, malesuada pharetra mauris. Integer
            rhoncus, eros vel euismod tempor, ipsum magna tristique nisi, quis
            ullamcorper enim magna eu orci. Sed semper ex quis semper aliquet.
            Cras hendrerit molestie sapien sed fermentum. Mauris dui tortor,
            viverra vel ultrices in, congue sed ex.
          </p>
          <Link href="">Explore</Link>
        </div>
        <div className={styles.Container__Image_Project}>
          {Photos.map((photo) => (
            <Image
              className={styles.Image__Project}
              key={photo.alt}
              src={photo.Img}
              alt={photo.alt}
            />
          ))}
        </div>
      </div>
      <div className={styles.container__Instagram}>
        <Link href="">Socials</Link>
        <h2>On Instagram</h2>
        <div className={styles.container__Instagram_Images}>
          {Photos2.map((photos) => (
            <Image key={photos.alt} src={photos.Img} alt={photos.alt} />
          ))}
        </div>
      </div>
      <Contact />
    </>
  );
}

export { AboutAndProjects };
