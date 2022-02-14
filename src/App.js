import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';

import PagesLinks from './pages/pagesLinks/PagesLinks';
import PageWomen from './pages/pageWomen/PageWomen';
import PageMen from './pages/pagesMen/pageMen';
import Footer from './compoments/footer/Footer';
import Main from './compoments/main/Main';
import './App.css';

function App() {
  return (
    <div className='App'>
      <HashRouter>
        <PagesLinks />
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/women' element={<PageWomen/>} />
          <Route path='/men' element={<PageMen/>} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  )
}

export default App;
