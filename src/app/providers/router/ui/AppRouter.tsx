import {Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "app/providers/router/config";




export const AppRouter  = () => {
    return(<Suspense fallback={<div>Loading...</div>}>
    <Routes>
        {Object.values(routeConfig).map(el=> (
            <Route key={el.path} {...el}/>
        ))}
    </Routes>
    </Suspense>)
}
