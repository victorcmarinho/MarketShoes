import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md'
import logo from '../../assets/logo.png';
import { Container, Cart } from './styles';
import { connect } from 'react-redux';


function Header({cartSize}) {
  return (
    <Container>
        <Link to="/">
            <img src={logo} alt="MarketShoes"/>
        </Link>
        <Cart to="/cart">
            <div>
                <strong>Meu Carrinho</strong>
                <span>{cartSize} itens</span>
            </div>
            <MdShoppingBasket size={36} color="#FFF"/>
        </Cart>
    </Container>
  );
}

export default connect(state => ({
  cartSize: state.cart.length
}))(Header);