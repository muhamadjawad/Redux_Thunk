import {API_STATE} from '../../State';
import {CALL_API} from '../../Types';

const todoApi = (state = API_STATE, action) => {
  switch (action.type) {
    case CALL_API:
      return [...action.payload];

    default:
      return state;
  }
};

export default todoApi;
