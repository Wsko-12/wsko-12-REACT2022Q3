import React, { memo } from 'react';
import styles from './switcher.module.css';

interface ISwitcherInputProps {
  firstLabel: string;
  secondLabel?: string;
  alwaysColored?: boolean;
  checked?: boolean;
}

const SwitcherInput = memo<ISwitcherInputProps>(
  ({ alwaysColored, checked, firstLabel, secondLabel }) => {
    const checkboxClasses = [styles.switcher__checkbox];
    if (alwaysColored) {
      checkboxClasses.push(styles.switcher__checkbox_colored);
    }

    return (
      <label className={styles.switcher}>
        <input
          data-testid="switcher-input"
          type="checkbox"
          className={styles.checkbox}
          defaultChecked={checked}
        ></input>
        <span>{firstLabel}</span>
        <div className={checkboxClasses.join(' ')} data-testid="switcher-pseudo-checkbox">
          <div className={styles.switcher__decor}></div>
        </div>
        {secondLabel && <span>{secondLabel}</span>}
      </label>
    );
  }
);
export default SwitcherInput;
