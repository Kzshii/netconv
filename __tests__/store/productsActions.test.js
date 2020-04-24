import {
  ProductsActions,
} from '../../src/store/actions/products';

describe('Testing productsActions', () => {
    const product = {
      id: 1,
      name: 'Test',
      price: 1.99,
      image: 'https://reactnative.dev/img/tiny_logo.png'
    };

    test('actionCreator add product', () => {
      const set = ProductsActions.setProduct(product);
      expect(set).toEqual({ type: 'SET_PRODUCT', payload: product });
    });

    test('actionCreator wipe products', () => {
      const wipe = ProductsActions.wipeList(product);
      expect(wipe).toEqual({ type: 'WIPE_LIST' });
    });

    test('actionCreator delete product', () => {
      const del = ProductsActions.deleteProduct(product);
      expect(del).toEqual({ type: 'DELETE_PRODUCT', payload: product });
    });
});