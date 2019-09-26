import React from "react";
import Price from "./price";
import Brand from "./brand";
import Gender from "./gender";
import Offers from "./offers";
import Sales from "./sales";
import News from "./news";

const Sidebar = () => (
    <div className="col-sm-3 side">
    <div className="sidebar">
      <Price />
      <Brand />
      <Gender />
      <Offers />
      <div className="sidebuttons">
      <a href="#" className="apply">Применить</a>
      <a href="#" className="clear">Сбросить</a>
      </div>
    </div>
    <div className="sidelow">
     <Sales />
     <News />
     </div>
    </div>
  );



export default Sidebar;
