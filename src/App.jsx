import React from 'react';
import './Assets';

import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Trainers from './pages/Team';
import About from './pages/About';
import Classes from './pages/Classes';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';
import BlogsDetail from './pages/BlogDetail';

const App = () => {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/trainers' element={ <Trainers /> } />
      <Route path='/about' element={ <About /> } />
      <Route path='/classes' element={ <Classes /> } />
      <Route path='/contact' element={ <Contact /> } />
      <Route path='/blogs' element={ <Blogs /> } />
      <Route path='/blog/:id' element={ <BlogsDetail /> } />
      <Route path='*' element={ <Home /> } />
    </Routes>
    <Footer />
    </>
  )
}

export default App