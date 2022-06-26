import Womens from "../../compoments/womens/Womens";
import WomenPageBanner from "../../compoments/womenPageBanner/womenPageBanner";
import { useState } from "react";

const PageWomen = () => {
    const [toProps, setNewProps] = useState(null);
    const [lastArea, setLastArea] = useState('');

    const sortValueFunc = (toProps, lastArea) => {
        setNewProps(toProps);
        setLastArea(lastArea);
    }

    return ( 
            <>
                <WomenPageBanner sortValueFunc={sortValueFunc} gender='women' />
                <Womens showBlockMenu={false} gender='women' 
                    arrayToSort = {toProps} lastArea={lastArea}
                />
            </>
    )
}

export default PageWomen;