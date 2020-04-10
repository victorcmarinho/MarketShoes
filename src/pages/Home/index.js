import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CartActions from "../../store/modules/cart/actions";
import { MdAddShoppingCart } from "react-icons/md";
import { ProductList } from "./styles";
import api from "../../services/api";
import { formatPrice } from "../../util/format";

class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get("products");
    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price)
    }))

    this.setState({ products: data });
  }

  handleAddProduct = product => {
    const { addToCart } = this.props;
    addToCart(product);
  }

  render() {
    const { products } = this.state;
    const { amount } = this.props;
    return (
      <ProductList>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <strong className="strong">{product.title}</strong>
            <span className="span">{product.priceFormatted}</span>

            <button
              type="button"
              onClick={() => this.handleAddProduct(product)}
            >
              <div>
                <MdAddShoppingCart size={16} color="#fff" /> {amount[product.id] || 0}
              </div>
              <span>ADICIONAR AO CARRINHO</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, p) => {
    amount[p.id] = p.amount;
    return amount;
  },{})
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);