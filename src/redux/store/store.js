
import { createStore } from "redux"
import { skillReducer } from "../reducer/skillReducer"
import { composeWithDevTools } from "@redux-devtools/extension"


 const store=createStore(skillReducer,composeWithDevTools)