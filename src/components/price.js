import React from "react";
import Slider, { Range } from 'rc-slider';

function log(value) {
  console.log(value); //eslint-disable-line
}
const style = { width: 200, margin: 20};

class Price extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        lowerBound: 500,
        upperBound: 999999,
        value: [500, 999999],
      };
    }
    onLowerBoundChange = (e) => {
      this.setState({ lowerBound: +e.target.value });
      const { lowerBound, upperBound } = this.state;
      this.setState({ value: [lowerBound, upperBound] });
    }
    onUpperBoundChange = (e) => {
      this.setState({ upperBound: +e.target.value });
      const { lowerBound, upperBound } = this.state;
      this.setState({ value: [lowerBound, upperBound] });
    }
    onSliderChange = (value) => {
      log(value);
      this.setState({
        value,
      });
    }
    handleApply = () => {
      const { lowerBound, upperBound } = this.state;
      this.setState({ value: [lowerBound, upperBound] });
    }

render () {
  return (
    <div className="sideprice">
     <span>Цена</span>
     <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 5.66802L10.59 7L6 2.67341L1.41 7L0 5.66802L6 0L12 5.66802Z" fill="#333333"/>
    </svg>
    <div className="range">
    <input className="priceinput" type="number" value={this.state.lowerBound} onChange={this.onLowerBoundChange} /> <span> - </span> <input className="priceinput" value={this.state.upperBound} onChange={this.onUpperBoundChange} />
    <div style={style}>
      <Range min={0} max={99} trackStyle={[{ backgroundColor: '#FF223D' }, { backgroundColor: '#FF223D' }]} handleStyle={[{ backgroundColor: 'white' }, { backgroundColor: 'white' }]} allowCross={false}  defaultValue={[5.2, 99]} onChange={log} />
    </div>
    </div>
    </div>
  );
}
}


export default Price;
