import {
  useSelector as originalUserSelector,
  useDispatch as originalUseDispatch
} from 'react-redux';

export const useSelector = (state: any) => originalUserSelector(state);
export const useDispatch = () => originalUseDispatch();