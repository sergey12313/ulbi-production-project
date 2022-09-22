import React, {FC, useState} from 'react';
import styles from './Sidebar.module.scss'
import {Button} from "shared/ui/Button";
import {classNames} from "shared/lib";
interface SidebarProps {

}

export const Sidebar: FC<SidebarProps> = (props) => {
    const [collapsed, setCollapsed] = useState(false)
    const toggleCollapsed = () => setCollapsed(collapsed=> !collapsed)
     const arrow = collapsed ?  '>' : "<";

    return <aside className={classNames(styles.Aside, {[styles.collapsed]:collapsed} )}>
        <Button ghost className={styles.btn} onClick={toggleCollapsed}>
            <span>{arrow}</span>

        </Button>
        <ul>
            <li>12312</li>
            <li>12312</li>
            <li>12312</li>
            <li>12312</li>
            <li>12312</li>
            <li>12312</li>
        </ul>
    </aside>;
};
