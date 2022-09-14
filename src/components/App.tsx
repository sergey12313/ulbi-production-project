import {FC, useState} from "react";

import styles from "./App.module.scss"

export const App: FC = () => {
    const [counter, setCounter] = useState(0)

    return <div className="app">
        {counter}
        <button className={styles.red} onClick={()=>setCounter(counter=> counter+1)}>increment</button>
    </div>
}