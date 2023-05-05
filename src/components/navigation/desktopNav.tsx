import photo from "/public/headshot.jpg";
import { Link, Typography } from "@mui/material";
import Image from "next/image";
import styles from "./navigation.module.css";
import NextLink from "next/link";

export default function DesktopNav() {
  return (
    <aside className={styles.desktop}>
      <Link href="/">
        <Image src={photo} className={styles.headshot} alt="Picture of the author" width="100" />
      </Link>
      <div className={styles.headline}>
        <Typography variant="h4">Stephen Hopkins</Typography>
      </div>
      <div className={styles.headline}>
        <Typography variant="h6">Full Stack Software Engineer</Typography>
      </div>
      <div className={styles.first_link}>
        <Link href="/" component={NextLink} variant="h4">
          Home
        </Link>
      </div>
      <div className={styles.link}>
        <Link href="/cv" component={NextLink} variant="h4">
          CV
        </Link>
      </div>
      <div className={styles.link}>
        <Link href="/contact" component={NextLink} variant="h4">
          Contact
        </Link>
      </div>
    </aside>
  );
}
