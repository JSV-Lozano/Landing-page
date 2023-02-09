import React from "react";
import styles from "@/styles/Layaout.module.css";
import Card from "../../../public/img/Card.png";
import Button from "../../../public/img/Button.png";
import Image from "next/image";
import Link from "next/link";

const Services = [
  { text: "Service 1" },
  { text: "Service 2" },
  { text: "Service 3" },
  { text: "Service 4" },
];
const navigation = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];
function Footer() {
  return (
    <footer className={styles.Footer}>
      <div className={styles.container__Footer}>
        <div className={styles.column1}>
          <h2>Buildit</h2>
          <h3>Development company, 2022</h3>
          <h3>Site design – ⏰ Alarm</h3>
        </div>
        <div className={styles.Services}>
          {Services.map((service) => (
            <p key={service.text}>{service.text}</p>
          ))}
          <div>
            <Link href="">
              <Image alt="Instagram" src={Card} />
            </Link>
            <Link href="">
              <Image alt="Facebook" src={Button} />
            </Link>
          </div>
        </div>
        <div className={styles.navigation}>
          {navigation.map((nav) => (
            <Link key={nav.name} href={nav.href}>
              {nav.name}
            </Link>
          ))}
        </div>
        <div className={styles.Ubication}>
          <p>Get in touch</p>
          <p>60 Manor Station St. Fairport, <br/> NY 14450</p>
          <p>708-790-0000 <br/>sales@buildit.site</p>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
