import API from 'api/API';
import ProductCardsList from 'components/ProductCardsList/ProductCardsList';
import Loader from 'components/Loader/Loader';
import SearchBar from 'components/SearchBar/SearchBar';
import React, { Component } from 'react';
import { IProduct } from 'ts/interfaces';
import { isProductDataArr } from 'ts/typeguards';
import styles from './main-page.module.css';

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

  async fetchProducts() {
    this.setState({
      isError: false,
      isLoading: true,
    });

    try {
      const products = await API.getProducts();
      if (!products) {
        this.setState({
          isError: true,
        });
        console.error(`[Main fetchProducts] can't receive products data`);
        return;
      }

      if (!isProductDataArr(products)) {
        this.setState({
          isError: true,
        });
        console.error(`[Main fetchProducts] receive incorrect products data`);
        return;
      }
      this.setState({ products });
    } catch {
      this.setState({
        isError: true,
      });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  componentDidMount() {
    this.fetchProducts();
  }

  render() {
    const { isError, isLoading, products } = this.state;
    return (
      <section className={styles.main__wrapper}>
        <SearchBar />
        <div className={styles.main__content}>
          {isError ? (
            <h3>Sorry, something went wrong :(</h3>
          ) : isLoading ? (
            <Loader />
          ) : (
            <ProductCardsList products={products} />
          )}
        </div>
      </section>
    );
  }
}
