import React, { memo } from 'react';
import styles from './about.module.css';

const About = memo(() => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <h2>About us</h2>
      </div>
    </section>
  );
});

export default About;
