import { SKILL_AD, SKILL_REMOVE_ALL, SKILL_REMOVE_BY_ID, SKILL_SELECT, SKILL_UPDATE } from "./skillActionTypes";

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
        type:SKILL_REMOVE_BY_ID,payload:id
    }
}

export const skillUpdate=(skill)=>{
    return {
        type:SKILL_UPDATE,payload:skill
    }
}

export const skillSelect=(id)=>{
    return{
        type:SKILL_SELECT,payload:id
    }
}

