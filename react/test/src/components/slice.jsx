import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

let fetchProducts=createAsyncThunk('prod',
    async (req,res)=>{


           let r=await axios.get("http://localhost:3000/")
        return  r.data

    })



let myslice=createSlice({

    name:'product',
    initialState:{

        allRecords:[],
        cart:[],
        selectedRecord:'',
        searchedRecords:[],
        token:'',
        pathNameToGo:''

    },
    reducers:{

        addToCart:(state,action)=>{


        },
        setSelectedRecord:(state,action)=>{
            state.selectedRecord=action.payload
        },
        setSearchedRecords:(state,action)=>{
            state.searchedRecords=action.payload
        },
        setToken:(state,action)=>{
            state.token=action.payload
        },
        setPathNameToGo:(state,action)=>{
            state.pathNameToGo=action.payload
        }

    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {

                state.allRecords = action.payload;
                state.searchedRecords = action.payload;

        } )




    }



})


let {addToCart,setSelectedRecord,setSearchedRecords,setToken,setPathNameToGo}=   myslice.actions
export default myslice

let red=myslice.reducer

export {fetchProducts,red,addToCart,setSelectedRecord,setSearchedRecords,setToken,setPathNameToGo};
