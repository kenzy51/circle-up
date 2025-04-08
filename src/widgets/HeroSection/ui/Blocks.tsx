import React from "react";
import { motion } from "framer-motion";
import styles from "./Home.module.css";

export const Blocks = () => {
  return (
    <>
      <div className={styles.grid}>
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2>
            Meet <span>-&gt;</span>
          </h2>
          <p>
            Speed dating, networking, and more. Real people, real connections.
          </p>
        </motion.div>

        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <h2>
            Celebrate <span>-&gt;</span>
          </h2>
          <p>
            Gala nights and themed parties to connect and make lasting memories.
          </p>
        </motion.div>

        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <h2>
            Curated Events <span>-&gt;</span>
          </h2>
          <p>
            Exclusive events for every taste — from intimate socials to grand
            gatherings.
          </p>
        </motion.div>

        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <h2>
            Connect <span>-&gt;</span>
          </h2>
          <p>
            Join our circle and expand your social network with like-minded
            people.
          </p>
        </motion.div>
      </div>
    </>
  );
};
