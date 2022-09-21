import React, {FC} from 'react';
import {Button, Variant} from "shared/ui/Button";

interface MainPageProps {

}

const MainPage: FC<MainPageProps> = () => {
    return <div>
        MainPage
        <Button>Default</Button>
        <br/>
        <Button variant={Variant.PRIMARY}>Primary</Button>
        <br/>
        <Button variant={Variant.ERROR}>Default</Button>
        <br/>
        <Button ghost>Ghost Default</Button>
        <br/>
        <Button ghost variant={Variant.PRIMARY}>Ghost Primary</Button>
        <br/>
        <Button  ghost variant={Variant.ERROR}>Ghost Default</Button>
        <Button block variant={Variant.PRIMARY}>Primary</Button>
    </div>;
};

export default MainPage