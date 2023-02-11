import React from "react";
import Link from "next/link";
import styles from "@/styles/Contact.module.css";

function Call() {
  return (
    <>
      <section className={styles.container__CallUs}>
        <div>
          <h2>Call us</h2>
          <div className={styles.container__LinksCallUs}>
            <Link href="">Call</Link>
            <Link href="">Email</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export { Call };
