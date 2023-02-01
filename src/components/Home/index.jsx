import React from "react";
import Image from "next/image";
import Link from "next/link";
import figures from "../../../public/img/Figure.svg";
import Rectangle_608 from "../../../public/img/Rectangle_608.png";
import Rectangle_609 from "../../../public/img/Rectangle_609.png";
import Rectangle_610 from "../../../public/img/Rectangle_610.png";
import Rectangle_612 from "../../../public/img/Rectangle_612.png";
import Rectangle_613 from "../../../public/img/Rectangle_613.png";
import { Noto_Sans } from "@next/font/google";
import styles from "@/styles/Home.module.css";
const NotoSans = Noto_Sans({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

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
            <Link href="">Services</Link>
            <Link href="">About the company</Link>
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
    </>
  );
}

export { Hhome };
