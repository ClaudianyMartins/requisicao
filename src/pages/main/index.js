import React, { Component } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

export default class Main extends Component {
  state = {
    products: [],
    productInfo: {},
    page: 1
  };

  componentDidMount() {
    // executa o uma açao do component assim que ele é executado em tela
    this.loadProducts();
  }

  loadProducts = async (page = 1) => {
    let response = await api.get(`/products?page=${page}`);

    let { docs, ...productInfo } = response.data;

    this.setState({ products: docs, productInfo, page });
  };

  prevPage = () => {
    let { page } = this.state;

    if (page === 1) return;

    let pageNumber = page - 1;

    this.loadProducts(pageNumber);
  };

  nextPage = () => {
    let { page, productInfo } = this.state;

    if (page === productInfo.pages) return;

    let pageNumber = page + 1;

    this.loadProducts(pageNumber);
  };

  render() {
    const { products, page, productInfo } = this.state;
    return (
      <div>
        <h2>Contagem de produtos: {products.length}</h2>
        <div id="listagem-produts">
          {products.map((item) => (
            <article key={item._id}>
              <strong>{item.title}</strong>
              <p>{item.description}</p>

              <Link to={`/products/${item._id}`}>Acessar</Link>
            </article>
          ))}
          <div>
            <button disabled={page === 1} onClick={this.prevPage}>
              Anterior
            </button>
            <button
              disabled={page === productInfo.pages}
              onClick={this.nextPage}
            >
              Próxima
            </button>
          </div>
        </div>
      </div>
    );
  }
}
