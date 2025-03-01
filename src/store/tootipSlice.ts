import { createSlice } from '@reduxjs/toolkit';
import { ITootipState } from '../interfaces/Tooltip.interface';

const initialState: ITootipState = {
    id: '',
}; 

export const tooltipSlice = createSlice({
    name: 'Minecraft-Tooltip',
    initialState,
    reducers: {
        onShowTooltip: (state, { payload }: { payload: ITootipState }) => {
            state.id = payload.id;
        },
       
    },
});

export const { onShowTooltip } = tooltipSlice.actions;
export default tooltipSlice.reducer;