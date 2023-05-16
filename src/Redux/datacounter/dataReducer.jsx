const initialState={
    loading:false,
    data:[],
    error:"",
    articles: [],
}

const datasReducers=(state=initialState,action)=>{
    switch(action.type){
        case "FETCT_REQUEST":
            return{
                ...state,
                loading:true
            }
        case "FETCH_DATA_SUCSSES":
            return{
                loading:false,
                data:action.payload
            }
        case "FETCH_FAILED":
            return{
                loading:false,
                data:[],
                error:action.payload
            }
        default:
            return state
     
    }
}

export default datasReducers;