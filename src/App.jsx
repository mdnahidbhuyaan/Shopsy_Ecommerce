/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Product from './components/product/Product'
import AOS from 'aos'
import TopProduct from './components/TopProduct/TopProduct'
import Banner from './components/Banner/Banner'
import Subscribe from './components/subscribe/Subscribe'
import Testimonials from './components/Testimonials/Testimonials'
import Footer from './components/Footer/Footer'
import Popup from './components/Popup/Popup'

const App = () => {
  const [orderPopup,setOrderPopup] = React.useState(false)
  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup)
  }
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
      <Navbar handleOrderPopup={handleOrderPopup}/>
      <Hero handleOrderPopup={handleOrderPopup}/>
      <Product/>
      <TopProduct handleOrderPopup={handleOrderPopup}/>
      <Banner/>
      <Subscribe/>
      <Product/>
      <Testimonials/>
      <Footer/>
      <Popup  orderPopup={orderPopup} setOrderPopup={setOrderPopup}/>
    </div>
  )
}

export default App  
