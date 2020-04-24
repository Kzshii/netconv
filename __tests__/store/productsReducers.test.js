import userReducer from '../../src/store/reducers/products';

describe('Testing productsReducers', () => {
  const product = {
    id: 1,
    name: 'Test',
    price: 1.99,
    image: 'https://reactnative.dev/img/tiny_logo.png',
    quantity: 1,
  };
  test('initial productReducer state', () => {
    expect(userReducer(undefined, {})).toEqual({ products: [] });
  });
  test('reducer for setProduct', () => {
      let state = { products: [] };
      state = userReducer(state, { type: 'SET_PRODUCT', payload: product });
      expect(state).toEqual({ products: [product] })
  });
  test('reducer for wipeList', () => {
    let state = { products: [product] };
      state = userReducer(state, { type: 'WIPE_LIST' })
      expect(state).toEqual({ products: [] });
  });

  const product2 = {
    id: 2,
    name: 'Test2',
    price: 1.99,
    image: 'https://reactnative.dev/img/tiny_logo.png',
    quantity: 1,
  };

  test('reducer for deleteList', () => {
    let state = { products: [product, product2] };
      state = userReducer(state, { type: 'DELETE_PRODUCT', payload: product });
      expect(state).toEqual({ products: [product2] });
  });

  const product3 = {
    id: 2,
    name: 'Test2',
    price: 1.99,
    image: 'https://reactnative.dev/img/tiny_logo.png',
    quantity: 2,
  };

  test('reducer for updateProduct', () => {
    let state = { products: [product, product2] };
      state = userReducer(state, { type: 'SET_PRODUCT', payload: product3 });
      expect(state).toEqual({ products: [product, product3] });
  });
});