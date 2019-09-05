import React, { Component } from 'react';

export default class Section3 extends Component {
render(){
    const lang = this.props.lang;
    var title,q1,q2,q3,q4,a1,a2,a3,a4;

    if(lang==='spanish'){

    }
    else if(lang==='chinese'){

    }
    else if(lang==='japanese'){
    
    }
    else if(lang==='korean'){

    }
    else{
    title='Why Invest?'
    q1='Question One'
    a1='Answer One'
    q2='Question'
    a2='Answer'
    q3='Question'
    a3='Answer'
    q4='Question'
    a4='Answer'
    }
    return (
        <div className="section3">
          <div className="container">
                <h1 className="supreme">{title}</h1>

                <h5>{q1}</h5><p>{a1}</p>
                <h5>{q2}</h5><p>{a2}</p>
                <h5>{q3}</h5><p>{a3}</p>
                <h5>{q4}</h5><p>{a4}</p>
            </div>
        </div>
    )
}
}