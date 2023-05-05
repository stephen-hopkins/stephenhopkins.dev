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
      <Typography className={styles.headline} variant="h4">
        Stephen Hopkins
      </Typography>
      <Typography className={styles.headline} variant="h6">
        Full Stack Software Engineer
      </Typography>
      <Link href="/" component={NextLink} variant="h4" className={styles.first_link}>
        Home
      </Link>
      <Link href="/cv" component={NextLink} variant="h4" className={styles.link}>
        CV
      </Link>
      <Link href="/contact" component={NextLink} variant="h4" className={styles.link}>
        Contact
      </Link>
    </aside>
  );
}
