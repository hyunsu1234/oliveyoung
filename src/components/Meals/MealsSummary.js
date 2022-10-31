import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>OLIVE YOUNG DELIVERY SERVICE</h2>
      <p>
        상품을 고르고 ADD버튼을 눌러주세요
      </p>
      <p>
        결제가 완료되고 일주일 이내에 배송이 완료될 예정입니다
      </p>
    </section>
  );
};

export default MealsSummary;
