import React, { useState } from "react";
import Link from "next/link";
import { Noto_Sans } from "@next/font/google";
import { RxHamburgerMenu } from "react-icons/rx";
import styles from "@/styles/Layaout.module.css";

const NotoSans = Noto_Sans({
  weight: ["700"],
  style: ["normal"],
  subsets: ["latin"],
});
const navigation = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];
function Header() {
  const [isOpen, setIsOpen] = React.useState("close");
  const handleShow = () => {
    isOpen === "close" ? setIsOpen("open") : setIsOpen("close");
  };
  return (
    <>
      <div className="conatiner__Page">
        <header className={styles.container__Header}>
          <nav className={styles.container__Navbar}>
            <RxHamburgerMenu
              onClick={handleShow}
              className={styles.Hamburger}
            />
            <div className={styles.container__Logo}>
              <div className={styles.container__LogoVector}></div>
              <Link href="/">
                <h1 className={NotoSans.className}>Buildit</h1>
              </Link>
            </div>
            <ul
              className={`${styles.container__List} ${
                isOpen === "close" ? "" : styles.open
              }`}
            >
              {navigation.map((item) => (
                <li className={styles.container__Navegation} key={item.name}>
                  <Link className={NotoSans.className} href={item.href}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link className={`${NotoSans.className} ${styles.button}`} href="">
              Need a Project?
            </Link>
          </nav>
        </header>
      </div>
    </>
  );
}

export { Header };
