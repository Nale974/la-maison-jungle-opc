import Banner from './Banner/Banner'
import Cart from './Cart/Cart'
import Footer from './Footer/Footer';
// eslint-disable-next-line no-unused-vars
import QuestionForm from './QuestionForm/QuestionForm';
import ShoppingList from './ShoppingList/ShoppingList'


function App() {
  return (
    <div>
      <Banner/>
      <ShoppingList/>
      <Cart/>
      <Footer/>
      {/* <QuestionForm/> */}
    </div>
  );
}

export default App;
