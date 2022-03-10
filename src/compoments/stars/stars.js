import PropTypes from 'prop-types';
import fullStar from './img/fullStar.svg';
import emptyStar from './img/emptyStar.svg';

const Stars = (props) => {

    let arr = [];
    for (let i = 1; i <= 5; i++) {
        props.number >= i ? arr.push(true) : arr.push(false);
    }

    const stars = arr.map((item, index)=> {
        return <div key={index}><img src={item ? fullStar : emptyStar} alt='star' /></div>
    })

    return <div className='Women-Card-Stars'>{stars}</div>
}

Stars.propTypes = {
    number: PropTypes.number
}

export default Stars;