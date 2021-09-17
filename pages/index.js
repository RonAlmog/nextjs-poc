import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Home Page</h1>
      <p className={styles.text}>
        But it has been a little bit difficult for me to understand how to adapt
        to other sign up providers such as Facebook. And I couldn’t find
        explicit
      </p>
      <Link href="/ninjas">
        <a className={styles.btn}>See ninja listings</a>
      </Link>
    </div>
  );
}
