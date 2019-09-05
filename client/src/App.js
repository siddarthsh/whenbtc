import React, { Component } from 'react';
import Section1 from './sections/section1';
import Section2 from './sections/section2';
import Section3 from './sections/section3';
import Section4 from './sections/section4';
import Section5 from './sections/section5';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class App extends Component { 
  constructor(){
    super();
    this.state ={lang:'',bitcoin:[],usd: [],};
    this.spanish = this.spanish.bind(this);
    this.japanese = this.japanese.bind(this);
    this.chinese = this.chinese.bind(this);
    this.korean = this.korean.bind(this);
    this.english = this.english.bind(this);
  }
  componentDidMount() {
    fetch('/bitcoin')
      .then(res => {
          console.log(res);
          return res.json()
       })
      .then(data => { 
          console.log(data); 
          this.setState({ bitcoin : data.priceofbitcoin })
       });
       fetch('/usd')
           .then(res => {
               console.log(res);
               return res.json()
            })
           .then(data => { 
               console.log(data); 
               this.setState({ usd : data.newresponse })
            });
   }
  spanish() {
    this.setState({lang:'spanish'});
  }  
  japanese() {
    this.setState({lang:'japanese'});
  }
  chinese() {
    this.setState({lang:'chinese'});
  }
  korean() {
    this.setState({lang:'korean'});
  }
  english() {
    this.setState({lang:'english'});
  }

  render(){
    return (


        <div className="App">
        <div className="bitcoinwhenprice">BTC: ${this.state.bitcoin} | WHEN: ${this.state.usd.price}</div>


        <div className="logo">WHEN<b>BTC</b></div>


        <UncontrolledDropdown>
            <DropdownToggle caret>
              Language
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={this.spanish}>spanish</DropdownItem>
              <DropdownItem onClick={this.chinese}>chinese</DropdownItem>
              <DropdownItem onClick={this.japanese}>japanese</DropdownItem>
              <DropdownItem onClick={this.korean}>korean</DropdownItem>
              <DropdownItem onClick={this.english}>english</DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>


        <Section1 lang={this.state.lang}/> {/* Green Section */}
        <Section2 lang={this.state.lang} usd={this.state.usd}/> {/* Info, Buy, and exchanges Section */}
        <Section3 lang={this.state.lang}/> {/* Why Invest Section */}
        <Section4 lang={this.state.lang}/> {/* About Section */}
        <Section5 lang={this.state.lang}/> {/* Footer Section */}
      </div>
    );
  }
  
}

export default App;
