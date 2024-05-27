import { SKILL_AD, SKILL_REMOVE_ALL, SKILL_REMOVE_BY_ID, SKILL_UPDATE } from "./skillActionTypes";

const skillAd=(skill)=>{
    return {
        type:skillAd,payload:skill
    }
}


const skillRemoveAll=()=>{
    return {
        type:skillRemoveAll
    }
}

const skillRemoveById=(id)=>{
    return {
        type:skillRemoveById,payload:id
    }
}

const skillUpdate=(id)=>{
    return {
        type:skillUpdate,payload:id
    }
}