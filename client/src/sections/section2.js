import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip';

export default class Section2 extends Component {
    constructor(){
        super();
        this.state ={btc: [],value:''};
      
        this.handleChange = this.handleChange.bind(this)
      }
      handleChange(event) {
        this.setState({ value: event.target.value })
      }
      componentDidMount() {
        fetch('/btc')
          .then(res => {
              console.log(res);
              return res.json()
           })
          .then(data => { 
              console.log(data); 
              this.setState({ btc : data.price })
           });
        
       }
render(){

const lang = this.props.lang;
var card_title,price,marketcap,tradingvolume,buywhen,tokens,totalprice,ethaddress,buy;

if(lang==='spanish'){
  card_title=''
  price=''
  marketcap=''
  tradingvolume=''
  buywhen=''
  tokens=''
  totalprice=''
  ethaddress=''
  buy=''
}
else if(lang==='chinese'){
  card_title=''
  price=''
  marketcap=''
  tradingvolume=''
  buywhen=''
  tokens=''
  totalprice=''
  ethaddress=''
  buy=''
}
else if(lang==='japanese'){
  card_title=''
  price=''
  marketcap=''
  tradingvolume=''
  buywhen=''
  tokens=''
  totalprice=''
  ethaddress=''
  buy=''
}
else if(lang==='korean'){
  card_title=''
  price=''
  marketcap=''
  tradingvolume=''
  buywhen=''
  tokens=''
  totalprice=''
  ethaddress=''
  buy=''
}
else{
  card_title='WHEN Info'
  price='Price'
  marketcap='Market Cap'
  tradingvolume='Trading Volume'
  buywhen='Buy WHEN'
  tokens='Tokens'
  totalprice='Total Price'
  ethaddress='ETH Address'
  buy='BUY'
}

return (
        <div className="section2">
          <div className="contentx">
            <div className="row card-row">
              <div className="col-12 col-md-6">
                <div className="card">
                    <div className="card-title"><h2>{card_title}</h2></div>
                  <div className="card-body">
                    <table>
                      <tbody>
                      <tr><td><h4>{price}</h4></td><td><h4 className="right">$ {this.props.usd.price}</h4></td></tr>
                      <tr><td><h4>{marketcap}</h4></td><td><h4 className="right">$ {this.props.usd.marketcap}</h4></td></tr>
                      <tr><td><h4>{tradingvolume}</h4></td><td><h4 className="right">$ {this.props.usd.volume}</h4></td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="card-title buywhen"><h2>{buywhen}</h2></div>
                    <form method="POST" action="https://pay.whenbtc.com/api/v1/invoices">     
                      <input type="number" placeholder="0" className="amount" value={this.state.value} onChange={this.handleChange}/>
                      <span className="depressed">{tokens}</span>
                      <div className="fillups">
                        <div className="fillup first" data-tip={"1 WHEN ≈ "+this.state.btc+" BTC"}>
                          <div className="fup1" >{totalprice}</div>{this.state.value * this.state.btc} BTC
                          <ReactTooltip place="bottom" type="dark" effect="solid"/>
                        </div>
                        <div className="fillup second">
                          <div className="fup1">{ethaddress}</div>
                          <input type="text" className="address"/>
                        </div>
                      </div>
                      <button type="button" className="buy-btn">{buy}</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="exchanges center">
              <a href="google.com"><img className="exchangesicons" src="./images/1.png" alt="1"/></a>
              <a href="google.com"><img className="exchangesicons" src="./images/2.png" alt="1"/></a>
              <a href="google.com"><img className="exchangesicons" src="./images/3.png" alt="1"/></a>
              <a href="google.com"><img className="exchangesicons" src="./images/4.png" alt="1"/></a>
              <a href="google.com"><img className="exchangesicons" src="./images/5.png" alt="1"/></a>
              <a href="google.com"><img className="exchangesicons" src="./images/6.png" alt="1"/></a>
              <a href="google.com"><img className="exchangesicons" src="./images/7.png" alt="1"/></a>
            </div>
          </div>
          <div className="section2b">
            <div className="container">
              <a href="https://interface.my/Excellion"><img src="https://interface.my/i/5cc28c508dff720600000001" className="expert" /></a>
             <a href="https://interface.my/Excellion"><img src="https://interface.my/i/5cc28c508dff720600000001" className="expert" /></a>
             <a href="https://interface.my/Excellion"><img src="https://interface.my/i/5cc28c508dff720600000001" className="expert" /></a>
             <a href="https://interface.my/Excellion"><img src="https://interface.my/i/5cc28c508dff720600000001" className="expert" /></a>
             <a href="https://interface.my/Excellion"><img src="https://interface.my/i/5cc28c508dff720600000001" className="expert" /></a>
             <a href="https://interface.my/Excellion"><img src="https://interface.my/i/5cc28c508dff720600000001" className="expert" /></a>
         
            </div>
           </div>
       </div>
    )
}
}