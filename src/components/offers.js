import React from "react";

const Offers = () => (
    <div className="sideoffers">
    <span>Предложения</span>
      <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clip-rule="evenodd" d="M12 5.66802L10.59 7L6 2.67341L1.41 7L0 5.66802L6 0L12 5.66802Z" fill="#333333"/>
      </svg>
    <select className="offers">
      <option>Предложения</option>
    </select>
    <select className="sales">
      <option>Акции</option>
      <option>Скидки</option>
      <option>Распродажа</option>
      <option>Уценённый товар</option>
    </select>

    </div>
  );



export default Offers;
