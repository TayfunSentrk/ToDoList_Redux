import { SKILL_AD, SKILL_REMOVE_ALL, SKILL_REMOVE_BY_ID, SKILL_UPDATE } from "../actions/skillActionTypes";



const initialSkillState={
    skill=[];
}


export const skillReducer=(state=initialSkillState,action)=>{
        switch(action.type){
            

            case SKILL_AD:
                const newItem={id:Date.now(),name:action.payload.name,score:action.payload.score}
                return {...state,skill:[...state.skill,newItem]}

            case SKILL_REMOVE_ALL:

                return {...state,skill:[]}


            case SKILL_REMOVE_BY_ID:

                const newListSkill=state.skill.filter((item)=>item.id!==action.payload)
                return {...state,skill:newListSkill}

            case SKILL_UPDATE:
                const newListSkill=state.skill.map((item)=>item.id===action.payload.id?action.payload:item)
        }
}