// import { createContext, useContext, useReducer } from "react";
// import { reducer } from './reducers'

// const StoreContext = createContext();
// const { Provider } = StoreContext;

// const StoreProvider = ({ value = [], ...props }) => {
//   const [state, dispatch] = useReducer(reducer, {
//     products: [],
//     cart: [],
//     cartOpen: false,
//     categories: [],
//     currentCategory: '',
//   });

//   return <Provider value={[state, dispatch]} {...props} />;
// };

// const useStoreContext = () => {
//   return useContext(StoreContext);
// };

// export { StoreProvider, useStoreContext };

// importing provider and store allows us to use the store in the entire application
// we wrap the entire application in the provider so that we can access the store in any component
// we can also use the store in any component by importing the store and using the useSelector and useDispatch hooks
// a redux store is a single source of truth for the state of the application

import { Provider } from 'react-redux'
import store from './store'

export default function StoreProvider(props) {
  return <Provider store={store} {...props} />
}