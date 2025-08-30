"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
     <div className={styles.item}>
        
          <h1 className={styles.title}>
            Better design for your digital products.
            </h1>
          <p className={styles.desc}>
            Turning your idea into reality. We bring together the best teams from
            the global tech industry to build innovative solutions.
          </p>
          <Button url ="/portfolio"text="See Our Works" />   
          </div>
      

        {/* Right side - hero image */}
        <div className={styles.item}>
          <Image
            src="/hero.png"
            alt="Hero Image"
            width={400}
            height={400}
            priority
          />
        </div>
    </div>
  );
}
