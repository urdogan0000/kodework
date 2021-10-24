import React  from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";
import initialstate from './store'

const Providers=({children})=>{
    const store=createStore(reducers,initialstate)
    return <Provider store={store}>{children}</Provider>
}

export default Providers