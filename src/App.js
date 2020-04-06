import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import { Provider } from "react-redux";

import GlobalStyle from "./styles/global";
import Header from "./components/Header";

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
