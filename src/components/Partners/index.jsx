import React from "react";
import Image from "next/image";
import Vector_1 from "@/assents/img/partners/Vector_1.png";
import Vector_2 from "@/assents/img/partners/Vector_2.png";
import Vector_3 from "@/assents/img/partners/Vector_3.png";
import Vector_4 from "@/assents/img/partners/Vector_4.png";
import Vector_5 from "@/assents/img/partners/Vector_5.png";
import styles from "@/styles/Partners.module.css";

const VectorPartners = [
  {
    img: Vector_1,
    alt: "Logo Partners",
    id: "1",
  },
  {
    img: Vector_2,
    alt: "Logo Partners",
    id: "2",
  },
  {
    img: Vector_3,
    alt: "Logo Partners",
    id: "3",
  },
  {
    img: Vector_4,
    alt: "Logo Partners",
    id: "4",
  },
  {
    img: Vector_5,
    alt: "Logo Partners",
    id: "5",
  },
];

function Partners() {
  return (
    <>
      <section className={styles.Section}>
        <div className={styles.container__Partners}>
          {VectorPartners.map((vector) => (
            <Image key={vector.id} src={vector.img} alt={vector.alt} />
          ))}
        </div>
      </section>
    </>
  );
}

export { Partners };
