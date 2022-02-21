import {CALL_API} from '../Types';
export const fetchProducts = () => {
  return async function (dispatch) {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await res.json();
    // console.log('Data', data);

    dispatch(setProducts(data));
  };
};

export const setProducts = (products = null) => {
  if (products) {
    return {
      type: CALL_API,
      payload: products,
    };
  }

  return {
    type: CALL_API,
    payload: [],
  };
};
