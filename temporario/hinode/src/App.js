import React, { Component } from 'react';
import './css/main.css';

import Item from './components/Item'
import Catalogo from './components/Catalogo'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      display: 0,
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    this.setState({display: e.target.value})
  }

  render() {
    return (
      <div className="hnd">
        <header className="hnd__header">
          <h2 className="hnd__title">Neste <span>Natal</span></h2>
          <p className="hnd__slogan">Presenteie amor próprio</p>
        </header>
        {if (this.state.display == '0') {
          return (
            <div className="main-container limit">
              <Item
                title="Perfumes Femininos"
                discount="15%"
                id="perfume-fem"
                value="1"
                onClick={this.handleClick}></Item>
                <Item
                title="Perfumes Masculinos"
                discount="20%"
                id="perfume-masc"
                value="2"
                onClick={this.handleClick}></Item>
              <Item
                title="Kits"
                discount="30%"
                id="kit"
                value="3"
                onClick={this.handleClick}></Item>
              <Item
                title="Monte seu Kit"
                description="A partir de 3 itens"
                discount="25%"
                id="monte-kit"
                value="4"
                onClick={this.handleClick}></Item>
            </div>
          )} else if (this.state.display == '1') {
            return()
          } else if (this.state.display == '2') {
            return()
          } else if (this.state.display == '3') {
            return()
          } else if (this.state.display == '4') {
            return(
              <Catalogo></Catalogo>
            )
          } 
        }}
        <button className="ctlg" value="4" onClick={this.handleClick}>
          <h4 className="ctlg__title">Veja o catálogo</h4>
          <p className="ctlg__description">Qualquer item com 15% de desconto</p>
          <div className="ctlg__discount">15%</div>
        </button>
        <div className="container limit">
          <button className="info">Mais informações</button>
          <a className="contato" href="https://wa.me/5521991350126" target="_blank">Faça seu pedido</a>
        </div>
      </div>
    );
  }
}
export default App;
