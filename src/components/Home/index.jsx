import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Partners } from "../Partners";
import { AboutAndProjects } from "../AboutAndProjects";
import { Noto_Sans } from "@next/font/google";
import figures from "../../../public/img/Figure.svg";
import Rectangle_608 from "../../../public/img/Rectangle_608.png";
import Rectangle_609 from "../../../public/img/Rectangle_609.png";
import Rectangle_610 from "../../../public/img/Rectangle_610.png";
import Rectangle_612 from "../../../public/img/Rectangle_612.png";
import Rectangle_613 from "../../../public/img/Rectangle_613.png";
import Icon from "../../../public/img/Icon_1.svg";
import Icon2 from "../../../public/img/Icon_2.svg";
import Icon3 from "../../../public/img/Icon_3.svg";
import styles from "@/styles/Home.module.css";
const NotoSans = Noto_Sans({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

const Inovation = [
  {
    title: "Featured Listing",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: Icon,
  },
  {
    title: "Available Properties",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: Icon2,
  },
  {
    title: "In the News",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: Icon3,
  },
];

function Hhome() {
  return (
    <>
      <div className={styles.container__Home}>
        <div className={styles.container__HomeInfo}>
          <h2 className={NotoSans.className}>Development company</h2>
          <p>
            Forward-thinking real estate developer, owner and investor with a
            reputation
          </p>
          <div className={styles.container__InfoButtons}>
            <Link href="/home">Service</Link>
            <Link href="/about">About the company</Link>
          </div>
        </div>
        <div className={styles.photos}>
          <Image alt="Image" src={Rectangle_613} />
          <Image alt="Image" src={Rectangle_610} />
          <Image alt="Image" src={Rectangle_612} />
          <Image alt="Image" src={Rectangle_608} />
          <Image alt="Image" src={Rectangle_609} />
        </div>
        <Image className={styles.image} alt="vector" src={figures} />
      </div>
      <section className={styles.Services}>
        <h2>Innovative Execution</h2>
        <div className={styles.container__Services}>
          {Inovation.map((item) => (
            <div key={item.title}>
              <Image
                width={91}
                height={91}
                alt={`Icon_Services ${item.title}`}
                src={item.icon}
              />
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>
      <section>
        <Partners />
        <AboutAndProjects />
      </section>
    </>
  );
}

export { Hhome };
