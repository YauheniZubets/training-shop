import Men from "../../compoments/men/Men";
import WomenPageBanner from "../../compoments/womenPageBanner/womenPageBanner";

const PageMen = () => {
    return ( <>
                <WomenPageBanner />
                <Men data-test-id='product-page-women' />
            </>
        
    )
}

export default PageMen;