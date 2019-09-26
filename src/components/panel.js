import React from "react";

const Panel = () => (
    <div className="panel">
    <div className="frame">
      <input type="text" placeholder="Поиск по 1200 товарам" className="search" />

    </div>
    <a href="#1" className="searchbutton">&#10095;</a>
    <div className="telephone">
    <a href="#"><i className="fas fa-phone-alt"></i> <span>+7 (343) 372-57-75</span></a>
    </div>
    <a href="#1" className="call"><span>Заказать звонок</span></a>
    </div>
  );



export default Panel;
