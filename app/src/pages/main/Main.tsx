import API from 'api/API';
import CardsList from 'components/CardsList/CardsList';
import Loader from 'components/Loader/Loader';
import SearchBar from 'components/SearchBar/SearchBar';
import React, { Component } from 'react';
import { IProduct } from 'ts/interfaces';
import { isProductDataArr } from 'ts/typeguards';
import './main-page.css';

interface IMainPageStates {
  isLoading: boolean;
  isError: boolean;
  products: IProduct[];
}

export default class Main extends Component {
  state: IMainPageStates = {
    isLoading: false,
    isError: false,
    products: [],
  };

  fetchProducts() {
    this.setState({
      isError: false,
      isLoading: true,
    });

    API.getProducts()
      .then((data) => {
        if (!data) {
          this.setState({
            isError: true,
          });
          console.error(`[Main componentDidMount] can't receive products data`);
          return;
        }

        if (!isProductDataArr(data)) {
          this.setState({
            isError: true,
          });
          console.error(`[Main componentDidMount] receive incorrect products data`);
          return;
        }
        this.setState({ products: data });
      })
      .catch(() => {
        this.setState({
          isError: true,
        });
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  componentDidMount() {
    this.fetchProducts();
  }

  render() {
    const { isError, isLoading, products } = this.state;
    return (
      <section className="wrapper main__wrapper">
        <SearchBar />
        <div className="main__content">
          {isError ? (
            <h3>Sorry, something went wrong :(</h3>
          ) : isLoading ? (
            <Loader />
          ) : (
            <CardsList products={products} />
          )}
        </div>
      </section>
    );
  }
}
