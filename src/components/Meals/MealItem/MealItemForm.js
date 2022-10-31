import React from 'react';
import { useRef, useState } from 'react'; //useRef 바로 연결(언급)해주는 훅
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault(); //onSubmit시 꼭 써주기

    const enteredAmount = amountInputRef.current.value; //숫자올라가는 거
    const enteredAmountNumber = +enteredAmount; //+를 앞에써주면 숫자로 바꿀때 쓰임
    //trim()공백을 없애줌 제단
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1~5).</p>}
    </form>
  );
};

export default MealItemForm;
