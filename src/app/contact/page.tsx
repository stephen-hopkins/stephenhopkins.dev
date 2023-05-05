"use client";

import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import { Link, Typography } from "@mui/material";
import styles from "./page.module.css";

export default function Contact() {
  return (
    <main className={styles.wrapper}>
      <Typography variant="h4">Contact</Typography>
      <div className={styles.link_row}>
        <Email fontSize="large" />
        <div className={styles.link}>
          <Link variant="h6" href="mailto:me@stephenhopkins.dev">
            me@stephenhopkins.dev
          </Link>
        </div>
      </div>
      <div className={styles.link_row}>
        <GitHub fontSize="large" />
        <div className={styles.link}>
          <Link variant="h6" href="https://github.com/stephen-hopkins">
            github.com/stephen-hopkins
          </Link>
        </div>
      </div>
      <div className={styles.link_row}>
        <LinkedIn fontSize="large" />
        <div className={styles.link}>
          <Link variant="h6" href="https://www.linkedin.com/in/stephen-hopkins-dev/">
            www.linkedin.com/in/stephen-hopkins-dev/
          </Link>
        </div>
      </div>
    </main>
  );
}
