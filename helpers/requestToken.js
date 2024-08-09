import axios from "axios";


export async function requestToken() {

    try{
        const apiURL = process.env.NEXT_PUBLIC_BACKEND_API +"?format=json";

        console.log("API URL: ", apiURL);
        const response = await axios.get(apiURL)
    
        if(response.status === 200){
            console.log("Response: ", response.data);
            return response.data;
        }

        
    
    }
    catch(err){
        console.log("Error: ", err);
    }
    
}