import React from 'react';

import { Container, ProductTable, Total } from './styles';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th/>
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th/>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img 
                src="https://i.dell.com/sites/csimages/App-Merchandizing_Images/all/mantis-v-image-v2.png" 
                alt="Notebook Vostro 14 5000"
              />
            </td>
            <td>
              <strong>Notebook Vostro 14 5000</strong>
              <span>R$129,90</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#7159c1"/>
                </button>
                <input type="number" readOnly value={1} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#7159c1"/>
                </button>
              </div>
            </td>
            <td>
              <strong>R$258,80</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#7159c1"/>
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>
      <footer>
        <button type="button">Finalizar pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>R$ 1920,28</strong>
        </Total>
      </footer>
    </Container>
  );
}
