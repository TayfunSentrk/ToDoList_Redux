import { SKILL_AD, SKILL_REMOVE_ALL, SKILL_REMOVE_BY_ID, SKILL_UPDATE } from "../actions/skillActionTypes";



const initialSkillState={
    skill=[];
}


const skillReducer=(state=initialSkillState,action)=>{
        switch(action.type){
            

            case SKILL_AD:
                const newItem={id:Date.now(),name:action.payload.name,score:action.payload.score}
                return {...state,skill:[...state.skill,newItem]}
        }
}