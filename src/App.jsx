import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Product from './components/product/Product'
import AOS from 'aos'
import TopProduct from './components/TopProduct/TopProduct'
import Banner from './components/Banner/Banner'
import Subscribe from './components/subscribe/Subscribe'

const App = () => {
    React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  
  return (
    <div className=''>
      <Navbar/>
      <Hero/>
      <Product/>
      <TopProduct/>
      <Banner/>
      <Subscribe/>
      <Product/>
    </div>
  )
}

export default App  
