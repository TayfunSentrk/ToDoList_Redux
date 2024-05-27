import { SKILL_AD, SKILL_REMOVE_ALL, SKILL_REMOVE_BY_ID, SKILL_SELECT, SKILL_UPDATE } from "../actions/skillActionTypes";


const initialSkillState={
    skill:[],
    updateSkill:{
        name:"",    
        score:""
    }
}


export const skillReducer=(state=initialSkillState,action)=>{
        switch(action.type){
            

            case SKILL_AD:
                const newItem={id:Date.now(),name:action.payload.name,score:action.payload.score}
              
                return {...state,skill:[...state.skill,newItem]}

            case SKILL_REMOVE_ALL:

                return {...state,skill:[]}


            case SKILL_REMOVE_BY_ID:
                console.log(action.payload);
                const newListSkill=state.skill.filter((item)=>item.id!==action.payload)
                
                return {...state,skill:newListSkill,updateSkill:{name:"",score:""}}

            case SKILL_UPDATE:
               
                const newListUpdateSkill=state.skill.map((item)=>item.id===action.payload.id?action.payload:item)
                
                return {...state,skill:newListUpdateSkill,updateSkill:{name:"",score:""}}

            case SKILL_SELECT:
                const selectSkill=state.skill.find((item)=>item.id===action.payload)
                console.log(selectSkill);
                return {...state,updateSkill:selectSkill};
            
            default:
                return state;
        }
}