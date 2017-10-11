import _ from "lodash";

export default function(state = {}, action) {
  switch(action.type) {
    case 'GET_USER':
      return  [ ...state, ...action.payload ];  
      //return action.payload;
      case 'DELETE_POST':
      ///return {...state};
     
       return state.filter(({ _id }) => _id !== action.payload);
      
    default :
    return state;
  }

  return state;
}