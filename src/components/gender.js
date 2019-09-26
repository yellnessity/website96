import React from "react";

const Gender = () => (
    <div className="sidegender">
    <span>Бренд</span>
    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path fillRule="evenodd" clip-rule="evenodd" d="M12 5.66802L10.59 7L6 2.67341L1.41 7L0 5.66802L6 0L12 5.66802Z" fill="#333333"/>
   </svg>
   <div className="genderchoose">
   <div className="checkgender"><input type="radio" name="brand1" /><span>Мужчинам</span></div>
   <div className="checkgender"><input type="radio" name="brand2" /><span>Женщинам</span></div>
   </div>

    </div>
  );



export default Gender;
