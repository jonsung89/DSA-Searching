import React, { Component } from "react";
import linearSearch from './linearSearch-function';
import binarySearch from './binarySearch-function';

class InputBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchNum: null,
      linearMessage: '',
      binaryMessage: ''
    }
  }

  setNumber(e) {
    // console.log(e.target.value);
    this.setState({
      searchNum: e.target.value
    });
  }

  linearSearch(e) {
    e.preventDefault();
    
    const linearResult = linearSearch(this.props.arr, this.state.searchNum);
    let message;

    if(linearResult.index === -1) {
      message = `Value not found. The search ran '${linearResult.count}' times.`;
    } else {
      message = `Value found at index '${linearResult.index}'. The search ran '${linearResult.count}' times.`
    }

    this.setState({
      linearMessage: message
    });
  }

  binarySearch(e) {
    e.preventDefault();
    const sortedArr = [...this.props.arr].sort((a,b) => a-b);

    const binaryResult = binarySearch(sortedArr, this.state.searchNum);

    let message;

    if (binaryResult.index === -1) {
      message = `Value not found. The search ran '${binaryResult.count}'`
    } else {
      message = `Value found at index '${binaryResult.index}'. The search ran '${binaryResult.count}'.`
    }

    this.setState({
      binaryMessage: message
    });
  }

  render() {
    let dataSet = this.props.arr;
    let dataSetDisplay = dataSet.map(num => {
      return `${num}, `
    })

    return <section>
        Given array: [ {dataSetDisplay}]<h2>Search Test</h2>
        <form>
          <input type="number" onChange={e => this.setNumber(e)} />
          <br />
          <button name="linear-search" onClick={e => this.linearSearch(e)}>
            Linear Search
          </button>

          <button name="binary-search" onClick={e => this.binarySearch(e)}>
            Binary Search
          </button>
        </form>
        <section>
          <div>
            <h4>Message for Linear Search: </h4>
            <p>{this.state.linearMessage}</p>
          </div>
          <div>
            <h4>
              Message for Binary Search:
            </h4> 
            <p>{this.state.binaryMessage}</p>
          </div>
        </section>
      </section>;
  }
}

export default InputBox;