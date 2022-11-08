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
      <section className={classes.section}>
        <h1>About this work</h1>
        <p>◈ <span>React</span>를 이용한 상품계산 웹페이지 제작</p>
        <div className={classes.description}>
          <p>DESCRIPTION</p>
          <div className={classes.p_wrap}>
            <p>▶ 반복 되는 부분 components으로 만들어 출력 속도 높임</p>
            <p>▶ useContext사용으로 여러 components에 전역으로 관리</p>
            <p>▶ useEffect사용으로 변수 변경 시 특정 기능이 동작하도록함</p>
          </div>
        </div>
      </section>
    </CartProvider>
  );
}

export default App;
