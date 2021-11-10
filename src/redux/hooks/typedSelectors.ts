import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {TRootState} from '../reducers/index';

export const useTypedSelector: TypedUseSelectorHook<TRootState> = useSelector;
