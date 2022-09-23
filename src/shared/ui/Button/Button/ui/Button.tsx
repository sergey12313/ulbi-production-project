import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib';
import styles from './Button.module.scss';

export enum Variant {
  DEFAULT = 'default',
  PRIMARY = 'primary',
  ERROR = 'error',
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  ghost?: boolean;
  block?: boolean;
}

export const Button: FC<ButtonProps> = ({
  className,
  variant = Variant.DEFAULT,
  block = false,
  ghost = false,
  children,
  ...otherProps
}) => {
  return (
    <button
      className={classNames(className, styles.Button, styles[variant], {
        [styles['block']]: block,
        [styles['ghost']]: ghost,
      })}
      {...otherProps}
    >
      {children}
    </button>
  );
};
