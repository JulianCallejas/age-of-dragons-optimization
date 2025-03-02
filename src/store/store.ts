import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { skillTreeSlice } from './skillTreeSlice';
import { tooltipSlice } from './tootipSlice';
import { logSlice } from './logSlice';


export const store = configureStore({
    reducer:{
        'AOD-Skill-Tree': skillTreeSlice.reducer,
        'AOD-Tooltip': tooltipSlice.reducer,
        'Logs': logSlice.reducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
