import Womens from "../../compoments/womens/Womens";
import WomenPageBanner from "../../compoments/womenPageBanner/womenPageBanner";

const PageWomen = () => {
    return ( <>
                <WomenPageBanner />
                <Womens data-test-id='product-page-women' />
            </>
        
    )
}

export default PageWomen;