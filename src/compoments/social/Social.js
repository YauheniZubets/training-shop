import FacebookLogo from './img/facebook.svg';
import TwitterLogo from './img/twitter.svg';
import InstagramLogo from './img/instagram.svg';
import PicasaLogo from './img/picasa.svg';

const Social = () => {
    return (
        <div className='Social'>
            <img src={FacebookLogo} alt='facebook-logo'></img>
            <img src={TwitterLogo} alt='twitter-logo'></img>
            <img src={InstagramLogo} alt='instagram-logo'></img>
            <img src={PicasaLogo} alt='picasa-logo'></img>
        </div>
    )
}

export default Social;