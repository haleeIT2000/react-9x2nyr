import React, { Component } from 'react';
import './hero.css';
class Hero extends Component {
  render() {
    let a = 0;
    let b = 2;
    let infor = true;
    let obj = {
      name: 'hello',
      age: 30,
    };
    let math;
    if(infor){
      math = <h1> myinfor: {obj.name} and {obj.age} </h1>
    }
    else math = null
    return (
      <div className="abc">
        <h2 className="title">This is hero {b}</h2>
        <h2>infor: {infor}</h2>
        <h2>2+ 2 = {2+2}</h2>
        {math}
        {infor ? (
          <h2>
            infor: {obj.name} and {obj.age}
          </h2>
        ) : null}
      </div>

      // React.createElement{
      //   'div'
      //   {
      //     className: 'abc',
      //   },
      //   React.createElement{
      //     h2, {
      //       className: 'title',
      //     },
      //    " this is hero"
      //   }
      // }
    );
  }
}
export default Hero;
