import { SKILL_AD, SKILL_REMOVE_ALL, SKILL_REMOVE_BY_ID, SKILL_UPDATE } from "./skillActionTypes";

export const skillAd=(skill)=>{
    return {
        type:SKILL_AD,payload:skill
    }
}


export const skillRemoveAll=()=>{
    return {
        type:skillRemoveAll
    }
}

export const skillRemoveById=(id)=>{
    return {
        type:skillRemoveById,payload:id
    }
}

const skillUpdate=(skill)=>{
    return {
        type:skillUpdate,payload:skill
    }
}