import { Formik, Field, Form } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import classNames from 'classnames';
import bigbanner from './img/bigBanner.png';
import girl from './img/girl.png';
import boy from './img/boy.png';
import preloader from './img/spin.gif';
import './BigBanner.css';

const BigBanner = () => {

    const validationSchema = yup.object().shape({
        email: yup.string().email().typeError('Should be a email').required('Required field')
    })

    const axiosedSubscr = (email, url) => {
        try {
            return axios.post(url, 
            {   
                "mail": `${email}`
            })
            .then(response => response)
            .catch(err => {
                console.log('err: ', err);
                throw new Error();
            })
        } catch (error) {
            console.log('error on the server: ', error);
            return error;
        }
    }

    return (
        <section className='Big-Banner-section'>
            <div className='Big-Banner-image' style={{background:`url(${bigbanner}) no-repeat center center`}}>
                <div className='Big-Banner-image-girl' style={{background:`url(${girl}) no-repeat center center`}}></div>
                <div className='Big-Banner-image-boy' style={{background:`url(${boy}) no-repeat center center`}}></div>
                <div className="Big-Banner-size Banner-Center Big-Banner-size-top">
                    <span>Special Offer</span>
                    <span className='Big-Banner-text'>Subscribe<br/> And <span className='Red-Text'>Get 10% Off</span></span>
                    <Formik 
                        initialValues={{
                            email: ''
                        }}
                        onSubmit = {(values, {resetForm, setErrors, setStatus} ) => {
                            axiosedSubscr(values.email, `https://training.cleverland.by/shop/email`)
                            .then(() => {
                                resetForm(); //метод формика
                                setStatus('Done successfully');
                            }) 
                            .catch((err) => {
                                console.log('err: ', err);
                                setErrors({'submit': "Review request error"});
                            })
                        }}   
                        validateOnMount
                        validationSchema={validationSchema}
                    >
                        {({handleSubmit, values, handleChange, errors, touched, handleBlur, isValid, isSubmitting, status})=> {
                            return (
                                <Form onSubmit={handleSubmit}>
                                    <Field 
                                        type='text'
                                        name='email'
                                        values={values.email}
                                        placeholder='Enter your email'
                                        className='Big-Banner-input'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {touched.email && errors.email && <p className='Review-error'>{errors.email}</p>}
                                    {status && <p className='Review-submitted'>Sent successfully</p>}
                                    <button 
                                        type="submit"
                                        name='submit'
                                        disabled={!isValid || isSubmitting}  
                                        className={classNames('Big-Banner-button', {['Review-submit-opacity']: !isValid || isSubmitting})}
                                    
                                    >
                                        {isSubmitting && <img src={preloader} alt='preloader' className='Review-submit-preloader'/>}
                                        <span>Subscribe</span>
                                    </button>
                                    {errors.submit && <p className='Review-error'>{errors.submit}</p>}
                                </Form>
                            )
                        }}

                    </Formik>
                </div>
            </div>
        </section>
    )
}

export default BigBanner;