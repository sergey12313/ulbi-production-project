import { FC } from 'react';
import { classNames } from 'shared/lib';
import styles from './IconButton.module.scss';
import { Button, ButtonProps } from 'shared/ui/Button';

export interface ButtonIconsProps extends Omit<ButtonProps, 'children'> {
  icon: string;
}

export const IconButton: FC<ButtonIconsProps> = ({ className, icon, ...otherProps }) => {
  return (
    <Button className={classNames(className, styles.IconButton)} {...otherProps}>
      <span className='material-symbols-outlined'>{icon}</span>
    </Button>
  );
};
