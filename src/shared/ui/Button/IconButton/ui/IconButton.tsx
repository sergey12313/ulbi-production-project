import React, {ButtonHTMLAttributes, FC} from 'react';
import {classNames} from "shared/lib";
import styles from './IconButton.module.scss'
import {Button, ButtonProps} from "shared/ui/Button";


export  interface ButtonIconsProps extends ButtonProps{

}



export const IconButton: FC<ButtonProps> = ({className,children,...otherProps}) => {
    return <Button className={classNames(className, styles.IconButton)} {...otherProps}><span className="material-symbols-outlined">{children}</span></Button>;
};