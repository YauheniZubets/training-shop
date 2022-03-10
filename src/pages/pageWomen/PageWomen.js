import Womens from "../../compoments/womens/Womens";
import WomenPageBanner from "../../compoments/womenPageBanner/womenPageBanner";
import { useState } from "react";

const PageWomen = () => {

    const [imagesArr, setImagesArr] = useState([]);
    const [sizes, setSizes] = useState([]);
    const [brand, setBrand] = useState([]);
    const [area, setArea] = useState('');
    const [price, setPrice] = useState([]);


    const sortValueFunc = (images, sizes, brand, area, price) => {
        setImagesArr(images);
        setSizes(sizes);
        setBrand(brand);
        setArea(area);
        setPrice(price);
    }


    return ( 
            <>
                <WomenPageBanner sortValueFunc={sortValueFunc} gender='women' />
                <Womens data-test-id='product-page-women' 
                    showBlockMenu={false} gender='women' 
                    images={imagesArr} sizes={sizes} brand={brand}
                    area ={area} price={price}
                />
            </>
    )
}

export default PageWomen;