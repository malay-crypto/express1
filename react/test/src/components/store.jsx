import {configureStore} from "@reduxjs/toolkit";
import {red} from "./slice.jsx";


let myStore = configureStore({


    reducer: red
});

export default myStore;