import { HashRouter, Route, Routes } from 'react-router-dom';

import PagesLinks from './pages/pagesLinks/PagesLinks';
import PageWomen from './pages/pageWomen/PageWomen';
import PageMen from './pages/pagesMen/pageMen';
import PageCart from './pages/pagesCart/pageCart';
import Footer from './compoments/footer/Footer';
import Main from './compoments/main/Main';
import './App.css';
import preloader from './compoments/preloader.svg';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { axiosStart } from './redux/sagas';

function App() {
  const {isError, isLoading} = useSelector(state=>state.mainProducts);
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(axiosStart());
  }, [])
  
  return (
    <div className='App' data-test-id='app'>
    {isLoading && <div className='preloader'><img src={preloader}></img></div>}
      <HashRouter>
        <PagesLinks />
        {isError && <div className='url-error'>Ошибка получения данных</div>}
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/women' element={<PageWomen/>} />
          <Route path='/men' element={<PageMen/>} />
          <Route path='/women/:id' element={<PageCart/>} />
          <Route path='/men/:id' element={<PageCart/>} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  )
}

export default App;
