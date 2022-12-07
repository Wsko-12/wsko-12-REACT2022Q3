import React, { memo } from 'react';

interface IIconProps {
  name: string;
  classNames?: string;
}

const Icon = memo<IIconProps>(({ name, classNames = '' }) => {
  const classes = `material-symbols-outlined ${classNames}`;
  return <span className={classes}>{name}</span>;
});

export default Icon;
