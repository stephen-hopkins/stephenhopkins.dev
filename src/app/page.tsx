"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { Link, Typography } from "@mui/material";
import NextLink from "next/link";

export default function Home() {
  return (
    <main className={styles.page_main}>
      <Typography variant="h2" className={styles.text}>
        Hello, I'm Stephen Hopkins
      </Typography>
      <Typography variant="h4" className={styles.text}>
        A full stack software engineer with extensive experience in Typescript, React, C# and .NET Core
      </Typography>
    </main>
  );
}
