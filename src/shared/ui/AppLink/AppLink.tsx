import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import styles from './AppLink.module.scss';
import { classNames } from 'shared/lib';

interface AppLink extends LinkProps {}

export const AppLink: FC<AppLink> = ({ children, className, ...otherProps }) => {
  return (
    <Link className={classNames(styles.AppLink, className)} {...otherProps}>
      {children}
    </Link>
  );
};
