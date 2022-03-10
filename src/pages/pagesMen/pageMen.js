import Womens from "../../compoments/womens/Womens";
import WomenPageBanner from "../../compoments/womenPageBanner/womenPageBanner";
import { useState } from "react";

const PageMen = () => {

    const [sortValues, setSortValues] = useState(null);

    const sortValueFunc = (arr) => {
        if (arr) {
            
            setSortValues(arr);
        }
    }

    return ( <>
                <WomenPageBanner sortValueFunc={sortValueFunc} gender='men'/>
                <Womens data-test-id='product-page-women' showBlockMenu={false} toSort={sortValues} gender='men' />
            </>
        
    )
}

export default PageMen;