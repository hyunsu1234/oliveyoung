import { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
import classes from './App.module.css';
import react from '../src/assets/react.png';

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
        <div className={classes.maintitle}>
          <h1>ABOUT THIS WORK</h1>
          <p>◈ <span>React</span>를 이용한 상품계산 웹페이지 제작</p>
        </div>
        <div className={classes.typhography_wrap}>
          <h3 className={classes.subtitle}>TYPHOGRAPHY</h3>
          <div className={classes.typhography}>
            <div className={classes.typhotext_left}>
              <p>Noto Sans Korean Light</p>
              <p>Noto Sans Korean Medium</p>
              <p>Noto Sans Korean Bold</p>
            </div>
            <div className={classes.typhotext_right}>
              <p>가독성 좋고 깔끔한 직선으로 이루어진 <span>노토산스</span> 폰트를 이용하였습니다.</p>
            </div>
          </div>
        </div>
        <div className={classes.color_wrap}>
          <h3 className={classes.subtitle}>COLOR</h3>
          <div className={classes.color}>
            <div className={classes.colorcontent_left}>
              <div className={classes.color_shape1}>
                <span></span>
                <p>#a6cd48</p>
              </div>
              <div className={classes.color_shape2}>
                <span></span>
                <p>#f2827f</p>
              </div>
              <div className={classes.color_shape3}>
                <span></span>
                <p>#231916</p>
              </div>
            </div>
            <div className={classes.colorcontent_right}>
              <p>자연친화적인 <span>olive색</span>과 올리브영의 포인트 색인 <span>코럴오렌지</span> 컬러를 사용했습니다.</p>
            </div>
          </div>
        </div>
        <div className={classes.program_wrap}>
          <h3 className={classes.subtitle}>PROGRAM</h3>
          <div className={classes.program}>
            <div className={classes.programtext_left}>
              <div className={classes.reactImage_wrap}>
                <img src={react} alt="reactImage"></img>
                <p>REACT</p>
              </div>
            </div>
            <div className={classes.programtext_right}>
              <p>컴포넌트 기반인 <span>리액트</span>를 사용하므로써 화면 <span>출력 속도</span>와 <span>유지 보수</span>을 높였습니다.</p>
            </div>
          </div>
        </div>
        <div className={classes.description_wrap}>
          <h3 className={classes.subtitle}>DESCRIPTION</h3>
          <div className={classes.description}>
            <p>- 단순한 state 값의 변화는 useState hook을 사용하여 현재 state 값과 업데이트될 state 값을 반환시켰습니다.</p>
            <p>- 여러 하위 값을 포함하는 복잡한 state는 유지 보수가 더 편리한 useReducer를 사용하였습니다.</p>
            <p>- useContext를 사용함으로써 Prop Drilling 없이 하위 컴포넌트에 전역으로 관리 가능하게 했습니다.</p>
            <p>- useEffect를 사용하므로써 마운트 될 때와 cartContext값이 바뀔 때 기능이 실행하도록 해주었습니다.</p>
            <p>- Fragment의 사용으로 불필요한 DOM 노드의 생성을 막아 메모리를 줄여주었습니다.</p>
          </div>
        </div>
      </section>
    </CartProvider>
  );
}

export default App;
