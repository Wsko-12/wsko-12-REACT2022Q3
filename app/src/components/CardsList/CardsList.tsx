import API from 'api/API';
import Loader from 'components/Loader/Loader';
import React, { Component } from 'react';
import { IProduct } from 'ts/interfaces';
import './cards-list.css';

interface ClassListStates {
  isLoading: boolean;
  isError: boolean;
  products: IProduct[];
}

export default class ClassList extends Component {
  state: ClassListStates = {
    isLoading: false,
    isError: false,
    products: [],
  };

  componentDidMount() {
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
          return;
        }
        this.setState({ products: data });
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  render() {
    const { isLoading, isError, products } = this.state;

    const content = isError ? (
      <div>Something went wrong :( </div>
    ) : isLoading ? (
      <Loader />
    ) : (
      <div>Loaded</div>
    );
    const classNames = isLoading ? 'cards-list cards-list_loading' : 'cards-list';
    return <div className={classNames}>{content}</div>;
  }
}
