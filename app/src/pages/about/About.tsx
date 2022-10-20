import React, { memo } from 'react';
import styles from './about.module.css';

const About = memo(() => {
  return (
    <section className={styles.about__wrapper}>
      <div className={styles.about__content}>
        <h2>About us</h2>
      </div>
    </section>
  );
});

export default About;
