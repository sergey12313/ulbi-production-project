import {FC, useState} from "react";
import "./style.scss"

export const App: FC = () => {
    const [counter, setCounter] = useState(0)

    return <div>
        {counter}
        <button className={'btn'} onClick={()=>setCounter(counter=> counter+1)}>increment</button>
    </div>
}