import React, { Component } from 'react';
import './css/main.css';

import Item from './components/Item'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      display: 0,
    }
  }
  render() {
    return (
      <div className="hnd">
        <header className="hnd__header">
          <h2 className="hnd__title">Neste <span>Natal</span></h2>
          <p className="hnd__slogan">Presenteie amor próprio</p>
        </header>
        <div className="main-container limit">
          <Item
            title="Perfumes Femininos"
            discount="25%"
            id="perfume-fem"></Item>
            <Item
            title="Perfumes Masculinos"
            discount="25%"
            id="perfume-masc"></Item>
          <Item
            title="Kits"
            discount="30%"
            id="kit"></Item>
          <Item
            title="Monte seu Kit"
            description="A partir de 3 itens"
            discount="35%"
            id="monte-kit"
            ></Item>
        </div>
        <button className="ctlg">
          <h4 className="ctlg__title">Veja o catálogo</h4>
          <p className="ctlg__description">Qualquer item com 20% de desconto</p>
          <div className="ctlg__discount">20%</div>
        </button>
        <div className="container limit">
          <button className="info">Mais informações</button>
          <a className="contato" href="https://wa.me/5521991350126" target="_blank">Faça seu pedido</a>
        </div>
      </div>
    );
  }
}
//Botão direto para chat no whatsapp: https://faq.whatsapp.com/en/android/26000030/
export default App;
