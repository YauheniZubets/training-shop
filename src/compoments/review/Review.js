import './review.css';
import fullStar from './img/fullStar.svg';
import emptyStar from './img/emptyStar.svg';
import preloaderSV from './img/spinner.gif';
import { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';
import * as yup from 'yup';
import classNames from 'classnames';

const Review = (props) => {

    const [fullStars, changeStars] = useState(1);
    const {id} = props;

    const cbChangeStars = (ev) => {
        const target = ev.target;
        const id = target.id;
        changeStars(+id);
    }

    const stars = [1,2,3,4,5].map((item, index) => {
        if (item === 1) return <img src={fullStar} alt='star' id={item} key={index}/>;
        return item <= fullStars 
                ? <img src={fullStar} alt='star' id={item}  key={index}/>
                : <img src={emptyStar} alt='star' id={item}  key={index}/>
    })

    const validationSchema = yup.object().shape({
        name: yup.string().typeError('Should be a string').required('Required field'),
        text: yup.string().typeError('Should be a string').required('Required field')
    })

    const axiosedReview = (name, text, fullStars, id, url) => {
        try {
            return axios.post(url, 
            {   
                "id": `${id}`,
                "name": `${name}`,
                "text": `${text}`,
                "rating": fullStars
            })
            .then(response => response)
            .catch(err => {
                console.log('err: ', err);
                throw new Error();
            })
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    return (
        <Formik
            initialValues = {{
            name: '',
            text: ''
        }}
        onSubmit = {(values, {resetForm, setErrors} ) => {
                axiosedReview(values.name, values.text, fullStars, id, `https://training.cleverland.by/shop/product/review`)
                .then(() => {
                    resetForm(); //метод формика
                    props.close();
                    props.update();
                }) 
                .catch((err) => {
                    console.log('err: ', err);
                    setErrors({'submit': "Review request error"})
                })
            }
        }
        //validateOnBlur валидация после отрисовки
        validateOnMount
        validationSchema={validationSchema}
        >
            {({handleSubmit, values, handleChange, errors, touched, handleBlur, isValid, isSubmitting}) => {
                return (
                <Form onSubmit={handleSubmit}>
                    <div className="Review">
                        <div className='Review-header'>Write a review</div>
                        <div className='Review-stars' onClick={cbChangeStars}>
                            {stars}
                        </div>
                        <Field id="name" 
                            name="name" 
                            placeholder="Your name, please..." 
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className='Review-name'    
                        />
                        {touched.name && errors.name && <p className='Review-error'>{errors.name}</p>}
                        <Field as='textarea' 
                            id="text" 
                            name="text" 
                            placeholder="Write a review..." 
                            value={values.text}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className='Review-text'
                        />
                        {touched.text && errors.text && <p className='Review-error'>{errors.text}</p>}
                        <button 
                            type="submit"
                            name='submit'
                            disabled={!isValid || isSubmitting}  
                            className={classNames('Review-submit', {['Review-submit-opacity']: !isValid || isSubmitting})}
                        >
                        {isSubmitting && <img src={preloaderSV} alt='preloader' className='Review-submit-preloader'/>}
                        Send
                        </button>
                        {errors.submit && <p className='Review-error'>{errors.submit}</p>}
                    </div>  
                </Form>
            )}}
        </Formik>
        
    )
}

export default Review;