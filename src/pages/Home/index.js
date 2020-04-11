import React, { useEffect, useState } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { useSelector, useDispatch } from 'react-redux';
import api from "../../services/api";
import { formatPrice } from "../../util/format";
import { ProductList } from "./styles";
import * as CartActions from '../../store/modules/cart/actions';

export default function Home() {
  const amount = useSelector(state => state.cart.reduce((amount, p) => {
    amount[p.id] = p.amount;
    return amount;
  }, {}));

  const dispatch = useDispatch();
  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get("products");
      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price)
      }));
      setProducts(data);
    }

    loadProducts();
  }, [])

  function handleAddProduct(product){
    dispatch(CartActions.addToCartRequest(product.id));
  }


  return (
    <ProductList>
      {products.map((product) => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong className="strong">{product.title}</strong>
          <span className="span">{product.priceFormatted}</span>

          <button
            type="button"
            onClick={() => handleAddProduct(product)}
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
