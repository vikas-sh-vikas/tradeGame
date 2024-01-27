import { createSlice,PayloadAction } from "@reduxjs/toolkit";
type InitialState = {
    value: DataState;
}
type DataState = {
    username: string,   
}
const initialState = {
    value:{
        username:"",
    } as DataState
} as InitialState;

export const data = createSlice({
    name:"data",
    initialState,
    reducers:{
        // dataRemove: () => {
        //     return initialState;
        // },
        dataSet: (state,actions: PayloadAction<string>) => 
        {
            // console.log("slice")
            console.log("Reach Redux Slice Function",actions)
            return {
                value:{
                    username: actions.payload,
                },
            }
        }

    }
});

export const {dataSet} = data.actions;
export default data.reducer;