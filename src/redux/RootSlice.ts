import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: 'root',
    initialState: {
        name: 'Name',
        top: 'Top',
        bottom: 'Bottom',
    },
    reducers: {
        chooseName: (state, action) => { state.name = action.payload},
        chooseTop: (state, action) => { state.top = action.payload},
        chooseBottom: (state, action) => { state.bottom = action.payload},
    }
})

// Export Reducer
export const reducer = rootSlice.reducer;
export const { chooseName, chooseTop, chooseBottom } = rootSlice.actions;