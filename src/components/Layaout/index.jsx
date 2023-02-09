import React, { useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

function Layaout({ children }) {
  return (
    <>
      <div className="conatiner__Page">
        <Header />
        <main className="main">{children}</main>
      </div>
      <Footer />
    </>
  );
}

export { Layaout };
