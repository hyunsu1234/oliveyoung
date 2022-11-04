import { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
import classes from './App.module.css';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
      <div className={classes.explanation}>
        <h2>EXPLANATION</h2>
        <p>React를 이용한 상품계산 웹페이지 제작</p>
        <div className={classes.p_wrap}>
          <p>1. 반복 되는 부분 components으로 만들어 출력 속도 높임</p>
          <p>2. useState로 components 상태 관리</p>
          <p>3. useContext사용으로 여러 components에 전역으로 관리</p>
          <p>4. useEffect사용으로 변수 변경 시 특정 기능이 동작하도록함</p>
        </div>
      </div>
    </CartProvider>
  );
}

export default App;
