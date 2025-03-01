import { createSlice } from '@reduxjs/toolkit';



export type ILog = Record<string, number>;;
export interface ILogState {
    logs: ILog;
}


const initialState: ILogState = {
    logs: {}
}; 

export const logSlice = createSlice({
    name: 'Logs',
    initialState,
    reducers: {
        onAddLog: (state, { payload }: { payload: string }) => {
            state.logs[payload] = state.logs[payload] ? state.logs[payload] + 1 : 1;
        },
       
    },
});

export const { onAddLog } = logSlice.actions;
export default logSlice.reducer;