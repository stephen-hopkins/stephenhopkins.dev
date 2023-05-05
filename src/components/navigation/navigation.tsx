// needed because mui uses useRef which is not supported by RSC
"use client";

import DesktopNav from "./desktopNav";
import MobileNav from "./mobileNav";
import styles from "./navigation.module.css";

export default function Navigation() {
  // show both and hide one with css for pre rendering
  return (
    <section className={styles.section}>
      <DesktopNav />
      <MobileNav />
    </section>
  );
}
