import { Fragment } from 'react'; //<div></div>랑 같은 거 불필요한 DOM노드생성을 막아주어 메모리를 줄임
import classes from './Header.module.css';
import oliveyoungImage from '../../assets/oliveyoung.png';
import bg_top from '../../assets/oliveyoung_bg_topsmall.png';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <img src={oliveyoungImage} alt="oliveyoung Top background" />
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={bg_top} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
