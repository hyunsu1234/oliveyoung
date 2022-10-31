import { Fragment } from 'react';
import classes from './Modal.module.css';
import ReactDOM from 'react-dom'; //public- index.html

const Backdrop = (props) => {
  //뒷배경
  return <div className={classes.backdrop} onClick={props.onClose} />; //App.js의 onclose
  //뒷배경클릭시 hideCartHandler실행
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
      {/* props.children = Cart.js의 Modal의 하위자식들을 다 적어줌 */}
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />, //onClose={props.onClose}?
        portalElement,
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement,
        //첫번째 인수(child)에는 renderable react child,두번째 인수에는 변화시킬(container)DOM요소
        //돔끌고와서 스타일 적어주기위해서 createPortal 불변성유지가능
      )}
    </Fragment>
  );
};
export default Modal;
