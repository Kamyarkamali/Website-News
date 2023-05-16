import axios from "axios"
const fetchUser=()=>{
    return{
        type:"FETCT_REQUEST"
    }
}

const fetchUserSucsses=(data)=>{
    return{
        type:"FETCH_DATA_SUCSSES",
        payload:data
    }
}


const fetchRequsetFailde=(err)=>{
    return{
        type:"FETCH_FAILED",
        payload:err
    }
}



const fetchData=()=>{
    return(dispatch)=>{
        dispatch(fetchUser())
        axios.get("https://newsapi.org/v2/everything?q=tesla&from=2023-04-16&sortBy=publishedAt&apiKey=3b49fd82ee104ee4a0de3e8b6b13fcff")
        .then(response=>{
            const datas=response.data
            dispatch(fetchUserSucsses(datas))
        })
        .catch(error=>{
            const errMsg=error.message
            dispatch(fetchRequsetFailde(errMsg))
        })
    }
}


export default fetchData;