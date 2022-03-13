import Banner from './Banner/Banner'
import Cart from './Cart/Cart'
import Footer from './Footer/Footer';
// eslint-disable-next-line no-unused-vars
import QuestionForm from './QuestionForm/QuestionForm';
import ShoppingList from './ShoppingList/ShoppingList'
import './App.css'
import { useState, useEffect } from 'react';

function App() {
  const savedCart = localStorage.getItem('cart')
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
  const [activeCategory, updateActiveCategory] = useState("")
  
	useEffect(() => {
		localStorage.setItem("cart",JSON.stringify(cart))
	}, [cart])

  return (
    <div>
      <Banner/>
      <div className='lmj-layout-inner'>
				<Cart cart={cart} updateCart={updateCart} activeCategory={activeCategory} updateActiveCategory={updateActiveCategory}/>
				<ShoppingList cart={cart} updateCart={updateCart} activeCategory={activeCategory} updateActiveCategory={updateActiveCategory} />
			</div>
      <Footer/>
      {/* <QuestionForm/> */}
    </div>
  );
}

export default App;
