import { connect } from "react-redux";

import del from './img/del.svg';

const ProductInCart = (props) => {

    const cbChangeQuan = (ev) => {
        let target = ev.target;
        let val = target.textContent;
        switch (val) {
            case '+':
                props.dispatch({
                    type: 'INC_QUAN',
                    color: props.color,
                    size: props.size,
                    quan: props.quan,
                    name: props.name
                })
                break;
            case '-':
            props.dispatch({
                type: 'DEC_QUAN',
                color: props.color,
                size: props.size,
                quan: props.quan,
                name: props.name
            })
                break;
 
            default:
                break;
        }
    }

    const cbDelete = () => {
        props.dispatch({
            type:"DEL_PROD",
            name: props.name,
            color: props.color,
            size: props.size
        });
    }
    
    return (
        <div className='ShoppingCart-Cart-Header-ContentMain-Prod'>
            <div className='ShoppingCart-Cart-Header-ContentMain-Image'>
                <img src={`https://training.cleverland.by/shop${props.curColorUrl}`} />
            </div>
            <div className='ShoppingCart-Cart-Header-ContentMain-Descr'>
                <div>{props.name}</div>
                <div>{props.color}, {props.size}</div>
                <div>
                    <div className='ShoppingCart-Cart-Header-ContentMain-Quan' onClick={cbChangeQuan}>
                        <div>-</div>
                        <div className='ShoppingCart-Cart-Header-ContentMain-numb'>{props.quan}</div>
                        <div>+</div>
                    </div>
                    <div className='ShoppingCart-Cart-Header-ContentMain-Price'>$ {(props.price * props.quan).toFixed(2)}</div>
                </div>
            </div>
            <div className='ShoppingCart-Cart-Header-ContentMain-Del' onClick={cbDelete}>
                <img src={del} />
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {

    }
};

export default connect(mapStateToProps)(ProductInCart);
