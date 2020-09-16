let initialState = {
    User:null
};

export default function UserState(state=initialState,action){
  
  switch (action.type) {
    case "setInfoUser":
      return {
        ...state,
        User:action.User
      };
    
    default:
      return { ...state };
  }

}