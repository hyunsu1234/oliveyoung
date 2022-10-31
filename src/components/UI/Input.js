import React from 'react'; //ref로 받기위해서
import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
      {/* props의 input그대로를 가져오기위해서 */}
    </div>
  );
});

export default Input;
