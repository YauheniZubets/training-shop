import blog1 from './img/blog1.png';
import blog2 from './img/blog2.png';
import blog3 from './img/blog3.png';
import './Blog.css';

const Blog = () => {
    return (
        <section className='Blog'>
            <div className='Main-Info'>
                <div className='Blog-header'>
                    <div><span>LATEST FROM BLOG</span></div>
                    <div><span>SEE ALL</span></div>
                </div>
                <div className='Blog-content'>
                    <div className='Blog-content-image' style={{background:`url(${blog1}) no-repeat center center`}}>
                        <div className='Blog-text'>
                            <div><span>The Easiest Way to Break</span></div>
                            <div>
                                But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor
                            </div>
                        </div>
                    </div>
                    <div className='Blog-content-image' style={{background:`url(${blog2}) no-repeat center center`}}>
                        <div className='Blog-text'>
                            <div><span>Wedding Season</span></div>
                            <div>
                                But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor
                            </div>
                        </div>
                    </div>
                    <div className='Blog-content-image' style={{background:`url(${blog3}) no-repeat center center`}}>
                        <div className='Blog-text'>
                            <div><span>Recent Favorites On Repeat</span></div>
                            <div>
                                But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog;