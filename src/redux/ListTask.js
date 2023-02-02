


const initialState = {
  tasks : [
    {
     name : "household",
     description : "clean the house"
    }
 ]
}

function ListTask(state= initialState, action) {
switch (action.type) {
    case'ADD-TASK' :{
    return{tasks : [...state.tasks, action.payload]};
    }
    
    default: 
    return state 
  }
}

export default ListTask