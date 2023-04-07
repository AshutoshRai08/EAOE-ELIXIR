import React from 'react';
import { Footer,Blog,WhatElixer,Header,FAQ, Features, Possibility } from './containers';
import { Brand } from './components';
import './App.scss';

const App = () => {
  return (
    <div className='App'>
      <Header/>
      <Brand/>
      <WhatElixer/>
      <Features/>
      <Possibility/>
      <Blog/>
      <FAQ/>
      <Footer/>
    </div>
  )
}

export default App