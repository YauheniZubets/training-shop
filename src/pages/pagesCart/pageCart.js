import { useParams } from 'react-router-dom';
import './pageCart.css';
// import preloader from '../../compoments/preloader.svg';
import CartPageBanner from '../../compoments/cartPageBanner/CartPageBanner';
import CartPageBody from '../../compoments/cartPageBody/CartPageBody';
import { useEffect } from 'react';
import { axiosProductStart } from '../../redux/sagas';
import { useDispatch, useSelector } from 'react-redux';


const PageCart = () => {

    const params = useParams();
    const dispatch = useDispatch();
    const {isError, product} = useSelector(state=>state.currentProduct);
    
    useEffect(()=> {
        const id = getId(params);
        dispatch(axiosProductStart(id));    
    },[]);

    const getId = (params) => {
        if (params) {
            const id = String(params.id);
            return id;
        }
    }

    // const getGender = (loc) => {
    //     if(loc) {
    //         const url = loc.pathname;
    //         const gender = url.match(/([a-z]+)/);
    //         const genderStr = gender[0];
    //         return genderStr;
    //     }
    // }
    return (<div>
                {/* {isLoading && <div className='preloader'><img src={preloader}></img></div>} */}
                {product.name && <CartPageBanner product={product.name && product}  />}
                {isError && <div className='url-error'>Ошибка получения данных</div>}
                {product.name && <CartPageBody product={product} update={()=>dispatch(axiosProductStart(getId(params)))} />}
            </div>
    )
}

export default PageCart;