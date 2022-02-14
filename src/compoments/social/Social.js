import FacebookLogo from './img/facebook.svg';
import TwitterLogo from './img/twitter.svg';
import InstagramLogo from './img/instagram.svg';
import PicasaLogo from './img/picasa.svg';

const Social = () => {
    return (
        <div className='Social'>
            <img src={FacebookLogo}></img>
            <img src={TwitterLogo}></img>
            <img src={InstagramLogo}></img>
            <img src={PicasaLogo}></img>
        </div>
    )
}

export default Social;