import React, { Component } from "react";
import api from "../../services/api";

export default class Product extends Component {
  state = {
    product: {}
  };

  async componentDidMount() {
    let { id } = this.props.match.params;

    let response = await api.get(`/products/${id}`);

    this.setState({ product: response.data });
  }

  render() {
    const { product } = this.state;
    return (
      <div>
        <h1>Detalhes do Produto</h1>
        <h2>{product.title}</h2>
        <h2>{product.description}</h2>
        <p>
          URL: <a href={product.url}>{product.url}</a>
        </p>
      </div>
    );
  }
}
