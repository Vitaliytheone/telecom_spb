import React, {Component} from 'react';

class Product extends Component {
  state = {
    amount: 1,
    amountType: 1
  }

  handleChangeAmountType = (amountType) => () => {
    this.setState({amountType});
  }

  handleChangeAmount = (event) => {
    const value = + event.target.value;
    this.setState((prevState) => ({
      amount: isNaN(value) ? prevState.amount : value
    }));
  }

  handleAmountIncrement = () => {
    this.setState((prevState) => ({
      amount: + prevState.amount + 1
    }));
  }

  handleAmountDecrement = () => {
    this.setState((prevState) => ({
      amount: + prevState.amount === 0 ? prevState.amount : prevState.amount - 1
    }));
  }

  render() {
    const {amountType, amount} = this.state;
    const {product} = this.props;
    return (<div className="wrapper">
      <div className="description">
        <img className="description__image" src={product.primaryImageUrl} alt="product"/>
        <div className="description__text">
          <div className="description__text_code">Код: {product.code}</div>
          <div className="description__text_name">
            <a href="#">
              {product.description}
            </a>
          </div>
          <div className="description__text_extra">
            <span className="description__text_extra--need">
              Могут понадобиться:
            </span>
            <span>
              {product.assocProducts.map(assoc => (<a href="#">{assoc},</a>))}
            </span>
          </div>
        </div>
      </div>
      <div className="cost">
        <span className="cost__product-status">Наличие</span>
        <div className="cost__product-card">
          <div className="cost__product-card_club-card">По карте клуба</div>
          <div className="cost__product-card_gold-price">
            <span>{amountType === 1  ? product.priceRetailAlt  : product.priceRetail}</span>
            <span>
              <svg version="1.0" id="Слой_1" x="0px" y="0px" width="27px" height="20px" viewBox="0 0 50 50" enable-background="new 0 0 50 50">
                <path fill="#010101" d="M28.109,29.658c5.173,0.578,10.357-0.979,14.355-4.312c4.172-4.748,5.151-11.509,2.499-17.246
      c-0.847-1.953-2.2-3.644-3.92-4.899c-1.813-1.204-3.872-1.991-6.026-2.303c-2.464-0.37-4.955-0.534-7.447-0.49H9.05v23.272H3.562
      v5.781H9.05v5.977H3.562v5.781H9.05v8.378h6.467v-8.133h20.088v-5.781H15.517v-6.026H28.06H28.109z M15.566,6.386h12.543
      c2.019-0.074,4.04,0.074,6.026,0.441c1.673,0.442,3.132,1.467,4.116,2.891c1.062,1.539,1.611,3.373,1.568,5.242
      c0.138,2.473-0.832,4.879-2.646,6.565c-2.601,1.812-5.76,2.645-8.917,2.352H15.517V6.386H15.566z"/>
              </svg>
            </span>
          </div>
        </div>
        <div className="cost__retail-price">
          <span>{amountType === 1? product.priceGoldAlt: product.priceGold}</span>
          <span>
            <svg version="1.0" id="Слой_1" x="0px" y="0px" width="27px" height="20px" viewBox="0 0 50 50" enable-background="new 0 0 50 50">
              <path fill="rgb(167, 167, 167)" d="M28.109,29.658c5.173,0.578,10.357-0.979,14.355-4.312c4.172-4.748,5.151-11.509,2.499-17.246
      c-0.847-1.953-2.2-3.644-3.92-4.899c-1.813-1.204-3.872-1.991-6.026-2.303c-2.464-0.37-4.955-0.534-7.447-0.49H9.05v23.272H3.562
      v5.781H9.05v5.977H3.562v5.781H9.05v8.378h6.467v-8.133h20.088v-5.781H15.517v-6.026H28.06H28.109z M15.566,6.386h12.543
      c2.019-0.074,4.04,0.074,6.026,0.441c1.673,0.442,3.132,1.467,4.116,2.891c1.062,1.539,1.611,3.373,1.568,5.242
      c0.138,2.473-0.832,4.879-2.646,6.565c-2.601,1.812-5.76,2.645-8.917,2.352H15.517V6.386H15.566z"/>
            </svg>
          </span>
        </div>
        <div className="cost__np-binding">Можно купить за 231,75 балла</div>
        <div className="cost__unit-wrapper">
          <span className={`cost__unit-wrapper_box ${amountType === 1 && 'isActive'}`} onClick={this.handleChangeAmountType(1)}>
            За м. кв.
          </span>
          <span className={`cost__unit-wrapper_box ${amountType === 2 && 'isActive'}`} onClick={this.handleChangeAmountType(2)}>
            За упаковку
          </span>
        </div>
        <div className="cost__list-unit">
          <div className="cost__list-unit_unit-icon"></div>
          <div className="cost__list-unit_unit-cost">Продается упаковками: 1 упак. = 2.47 м. кв.</div>
        </div>
        <div className="cost__product-wrapper">
          <div className="cost__product-wrapper_count">
            <input className="cost__product-wrapper_count--counter" value={amount} onChange={this.handleChangeAmount}/>
            <div className="cost__product-wrapper_count--arrows">
              <div className="arrow arrow-up" onClick={this.handleAmountIncrement}></div>
              <div className="arrow arrow-down" onClick={this.handleAmountDecrement}></div>
            </div>
          </div>
          <button data-product-id={product.id} className="cost__product-wrapper_cart-name">
            <span>
              <svg class="cart-svg" width="18" height="18" viewBox="0 0 16 16">
                <path fill="#fff" d="M14 13.1v-1.1h-9.4l0.6-1.1 9.2-0.9 1.6-6h-12.3l-0.7-3h-3v1h2.2l2.1 8.4-1.3 2.6v1.5c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5-0.7-1.5-1.5-1.5h7.5v1.5c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5c0-0.7-0.4-1.2-1-1.4zM4 5h10.7l-1.1 4-8.4 0.9-1.2-4.9z"></path>
              </svg>
            </span>
            <span>В КОРЗИНУ</span>
          </button>
        </div>
      </div>
    </div>);
  }
}

export default Product
