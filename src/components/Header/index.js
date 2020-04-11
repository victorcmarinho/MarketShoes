import React from 'react';
import { MdShoppingBasket } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { Cart, Container } from './styles';


export default function Header() {
  const cartSize = useSelector(state => state.cart.length);
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