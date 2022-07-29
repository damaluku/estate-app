import React from "react";
import { Navbar } from "../components/basket";
import styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default Layout;
