import React from "react";

var hover = false;
var style = "color:red";

function changeStyle(props) {
  hover=!hover;
  if (hover) style="color:yellow";
  else style="color:red";
}

const Card = () => (
    <div className="card">
     <img src="img/picture.png" width="253" height="196" />
     <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M14 25.2896L12.3952 23.6698L12.3844 23.659L12.373 23.6488C8.72468 20.3913 5.74758 17.6989 3.67771 15.1571C1.61367 12.6225 0.5 10.2944 0.5 7.77174C0.5 3.66306 3.6405 0.5 7.7 0.5C9.92881 0.5 12.1697 1.56242 13.6168 3.28861L14 3.74566L14.3832 3.28861C15.8303 1.56242 18.0712 0.5 20.3 0.5C24.3595 0.5 27.5 3.66306 27.5 7.77174C27.5 10.2944 26.3863 12.6225 24.3223 15.1571C22.2524 17.6989 19.2753 20.3913 15.627 23.6488L15.6156 23.659L15.6048 23.6698L14 25.2896Z" fill="white" stroke="black"/>
     </svg>
     <a href="#" onClick={changeStyle()} color="red">13.3’’ Ноутбук Apple MacBook Air (MQD32RU/A) серебристый</a>
     <p> 12 990 ₽ </p>
    </div>
  );



export default Card;
