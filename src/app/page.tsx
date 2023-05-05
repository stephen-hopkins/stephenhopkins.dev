"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { Link, Typography } from "@mui/material";
import NextLink from "next/link";

export default function Home() {
  return (
    <main className={styles.page_main}>
      <div className={styles.text}>
        <Typography variant="h2">Hello, I&apos;m Stephen Hopkins</Typography>
      </div>
      <div className={styles.text}>
        <Typography variant="h4">
          A full stack software engineer with extensive experience in Typescript, React, C# and .NET Core
        </Typography>
      </div>
    </main>
  );
}
