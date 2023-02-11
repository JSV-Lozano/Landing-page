import React from "react";
import Link from "next/link";
import Image from "next/image";
import Icon from "@/assents/img/contact/Icon-1.svg";
import Icon2 from "@/assents/img/contact/Icon-2.svg";
import styles from "@/styles/Contact.module.css";
const contacts = [
  { Icons: Icon, Title: "Tel", Text: "708-790-0000" },
  { Icons: Icon2, Title: "Email", Text: "sales@buildit.site" },
  {
    Icons: Icon2,
    Title: "Office",
    Text: `60 Manor Station St.
    Fairport, NY 14450`,
  },
];
function Contact() {
  return (
    <>
      <div className={styles.container__Contact}>
        <div className={styles.container__InfoContact}>
          <Link href="">Contact</Link>
          <h2>Get In Touch</h2>
          {contacts.map((contact) => (
            <div key={contact.Title} className={styles.Contact__Info}>
              <Image src={contact.Icons} alt={contact.Title} />
              <div>
                <p>{contact.Title}</p>
                <p>{contact.Text}</p>
              </div>
            </div>
          ))}
        </div>
        <form action="/" className={styles.form}>
          <div className={styles.container__Form}>
            <div className={styles.container__Form1}>
              <div>
                <label>Name</label>
                <input type="text" name="Name" />
              </div>
              <div>
                <label for="email">Email</label>
                <input type="email" name="email" />
              </div>
            </div>
            <div className={styles.container__Form2}>
              <label>Subject</label>
              <input type="text" />
              <label>Message</label>
              <textarea type="text" />
            </div>
          </div>
          <button>Send message</button>
        </form>
      </div>
    </>
  );
}

export { Contact };
