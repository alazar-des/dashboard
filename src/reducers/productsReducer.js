import React from 'react';

const initialState = {
  products: [],
  isLoading: true,
  error: null,
  currentProduct: null,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS_SUCCESS':
      return {
        products: action.payload,
        isLoading: false,
        error: null,
      };
    case 'FETCH_PRODUCTS_FAILURE':
      return {
        products: [],
        isLoading: false,
        error: action.payload,
      };
    case 'FETCH_PRODUCT_SUCCESS':
      return {
        products: state.products,
        isLoading: false,
        error: null,
        currentProduct: action.payload,
      };
    case 'FETCH_PRODUCT_FAILURE':
      return {
        products: state.products,
        isLoading: false,
        error: action.payload,
        currentProduct: null,
      };
    case 'INSERT_PRODUCT_SUCCESS':
      return {
        products: [...state.products, action.payload],
        isLoading: false,
        error: null,
        currentProduct: null,
      };
    case 'INSERT_PRODUCT_FAILURE':
      return {
        products: state.products,
        isLoading: false,
        error: action.payload,
        currentProduct: null,
      };
    case 'UPDATE_PRODUCT_SUCCESS':
      const updatedProducts = state.products.map((product) => {
        if (product.id === action.payload.id) {
          return action.payload;
        }
        return product;
      });
      return {
        products: updatedProducts,
        isLoading: false,
        error: null,
        currentProduct: null,
      };
    case 'UPDATE_PRODUCT_FAILURE':
      return {
        products: state.products,
        isLoading: false,
        error: action.payload,
        currentProduct: null,
      };
    case 'DELETE_PRODUCT_SUCCESS':
      const updatedProducts = state.products.filter((product) => product.id !== action.payload.id);
      return {
        products: updatedProducts,
        isLoading: false,
        error: null,
        currentProduct: null,
      };
    case 'DELETE_PRODUCT_FAILURE':
      return {
        products: state.products,
        isLoading: false,
        error: action.payload,
        currentProduct: null,
      };
    default:
      return state;
  }
};

export default productsReducer;