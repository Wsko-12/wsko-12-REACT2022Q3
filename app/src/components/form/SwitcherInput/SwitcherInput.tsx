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
    // it's ok, but better use smt like https://www.npmjs.com/package/clsx or make own small util like it
    const checkboxClasses = [styles.checkbox];
    if (alwaysColored) {
      checkboxClasses.push(styles.checkbox_colored);
    }

    return (
      <label className={styles.switcher}>
        <input
          data-testid="switcher-input"
          type="checkbox"
          className={styles.checkbox}
          defaultChecked={checked}
        />
        <span>{firstLabel}</span>
        <div className={checkboxClasses.join(' ')} data-testid="switcher-pseudo-checkbox">
          <div className={styles.decor} />
        </div>
        {secondLabel && <span>{secondLabel}</span>}
      </label>
    );
  }
);
export default SwitcherInput;
