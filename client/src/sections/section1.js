import React, { Component } from 'react';

export default class Section1 extends Component {
render(){

const lang = this.props.lang;
var bigger_headline,smaller_headline;


if(lang==='spanish'){

    bigger_headline = "test text spanish"
}
else if(lang==='chinese'){

    bigger_headline = "test text in chinese"
}
else if(lang==='japanese'){

    bigger_headline = "test text in japanese"
}
else if(lang==='korean'){

    bigger_headline = "test text in korean"
}
else{
    bigger_headline = "test text"
    smaller_headline = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
}

    return (
        <div className="section1">
        <div className="center-content">
            <h1 className="bigger-headline">{bigger_headline}</h1>
            <p className="smaller-headline pb-7">{smaller_headline}</p>          
        </div>
          <div className="pill"></div>
          <div className="pill-2"></div>
          <div className="pill-3"></div>
          <div className="pill-4"></div>
      </div>
    )
}
}