import React, { Component } from 'react';

export default class Section1 extends Component {
render(){
const lang = this.props.lang;
var title,description;


if(lang==='spanish'){

}
else if(lang==='chinese'){

}
else if(lang==='japanese'){

}
else if(lang==='korean'){

}
else{
  title='About'
  description='Dolores perferendis maxime doloremque molestiae. Necessitatibus voluptates nulla molestiae non ut vero. Dolor molestiae deleniti quo neque harum expedita sit. Harum ullam ut quibusdam non accusantium quia quia. Rerum laborum blanditiis ad quasi incidunt animi.'
}
    return (
        <div className="section4">
          <div className="container">
             <h1 className="supreme white">{title}</h1>
             <p>{description}</p>
          </div>
        </div>
    )
}
}