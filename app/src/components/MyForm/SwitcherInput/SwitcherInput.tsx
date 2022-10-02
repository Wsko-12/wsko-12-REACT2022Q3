import React from 'react';
import styles from './switcher.module.css';

interface ISwitcherInputProps {
  firstLabel: string;
  secondLabel?: string;
  alwaysColored?: boolean;
  checked?: boolean;
}

export default function SwitcherInput({
  alwaysColored,
  checked,
  firstLabel,
  secondLabel,
}: ISwitcherInputProps) {
  const checkboxClasses = `${styles.switcher__checkbox} ${
    alwaysColored ? styles.switcher__checkbox_colored : ''
  }`;
  return (
    <>
      <label className={styles.switcher}>
        <input
          data-testid="switcher-input"
          type="checkbox"
          className={styles.checkbox}
          defaultChecked={checked}
        ></input>
        <span>{firstLabel}</span>
        <div className={checkboxClasses} data-testid="switcher-pseudo-checkbox">
          <div className={styles.switcher__decor}></div>
        </div>
        {secondLabel && <span>{secondLabel}</span>}
      </label>
    </>
  );
}
