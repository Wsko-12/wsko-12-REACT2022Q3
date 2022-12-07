import React, { memo } from 'react';
import styles from './page-404.module.css';

const Page404 = memo(() => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <h2>404. Page not found</h2>
      </div>
    </section>
  );
});

export default Page404;
