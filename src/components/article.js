import React from "react";
import Itemrow from "./itemrow.js";


class Article extends React.Component {
  constructor(props) {
        super(props);

        this.state = {
            grid : "col-3 justify-content-between itemcard",
            value: "12"
        };

        this.updateGrid = this.updateGrid.bind(this);
    }

    updateGrid(event) {
        var a = event.target.value / 4;
        this.setState({
            grid : "col-sm-"+a+" justify-content-between itemcard",
            value: event.target.value
        });
    }

    render () {
      return (
    <div className="items">
    <div className="collapses">
    <div>
    <span>Сортировать по </span>
    <select className="sorting">
      <option>Цене от низкой к высокой</option>
      <option>Цене от высокой к низкой</option>
      <option>Популярности</option>
      <option>Дате</option>
    </select>
    </div>

    <div className="itemshow">
    <span>Показывать товаров на странице</span>
    <select value={this.state.value} onChange={this.updateGrid} className="gridnumber">
      <option value="12">12</option>
      <option value="24">24</option>
      <option value="36">36</option>
      <option value="48">48</option>
    </select>
    </div>
    </div>

    <div className="container">
    <Itemrow className={this.state.grid} value={this.state.value} />
    <Itemrow className={this.state.grid} value={this.state.value}/>
    <Itemrow className={this.state.grid} value={this.state.value}/>
    <Itemrow className={this.state.grid} value={this.state.value}/>
    </div>

    <div className="numeration">
    <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.1642 6H1.91418L7.16418 0.74994L6.49988 0L-1.52588e-05 6.5L6.49998 13L7.16418 12.25L1.91418 7H14.1642V6Z" fill="#FF223D"/>
    </svg>
    <a href="#1">1</a>
    <a href="#1">2</a>
    <a href="#1">3</a>
    <a href="#1">...</a>
    <a href="#1">6</a>
    <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.835938 6H13.0859L7.83594 0.74994L8.50024 0L15.0001 6.5L8.50014 13L7.83594 12.25L13.0859 7H0.835938V6Z" fill="#FF223D"/>
    </svg>

    </div>

    <div className="text">
    <h1>Покупка товаров на нашем сайте</h1>
    <div className="paragraphs">
    <p>Бальнеоклиматический курорт, в первом приближении, неравномерен. Обезьяна-ревун применяет страх. Стресс слабопроницаем. Южное полушарие, куда входят Пик-Дистрикт, Сноудония и другие многочисленные национальные резерваты природы и парки, превышает депрессивный памятник Средневековья.</p>
    <p>Глауберова соль выбирает генезис. Отгонное животноводство перевозит понимающий праздник франко-говорящего культурного сообщества. Действие противоречиво интегрирует индивидуальный субъект.</p>
    <p>Пак-шот приводит креатив. Селекция бренда косвенно. Медиаплан притягивает былинный стиль. Генеративная поэтика, суммируя приведенные примеры, транслирует контрапункт. Синтагма возможна. Социальная ответственность порождает социометрический рейтинг, где автор является полновластным хозяином своих персонажей, а они - его марионетками.</p>
    </div>
    </div>

    </div>
  )
  }
  }


export default Article;
