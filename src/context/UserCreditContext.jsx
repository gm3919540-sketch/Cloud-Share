import { useAuth } from "@clerk/clerk-react";
import axios from "axios";
import { createContext, useCallback, useEffect, useState } from "react";
import { apiEndpoints } from "../util/apiendpoints";
import toast from "react-hot-toast";

export const UseCreditContext = createContext();

export const UserCreditsProvider =({children})=>{
    const[credits,setCredits] = useState(5);
    const [loadindin,setLoading] = useState(false);
    const{getToken,isSignedIn} = useAuth();
    //function to fetch the user credits that can be called from anywhere
    const fetchUserCredits = useCallback(async()=>{
        if(!isSignedIn) return;
        setLoading(true);
        try{
            const token = await getToken();
         const response=   await axios.get(apiEndpoints.GET_CREDITS,{headers:{Authorization: `Bearer ${token}`}});
         if(response.status ===200){
            setCredits(response.data.credits);
         }else {
            toast.error('Unable tp get the credits',error);
         }
        }catch(error){
                  console.error('Error fetching the user credits',error);
        }finally{
            setLoading(false);
        }
    },[getToken,isSignedIn]
    );

    useEffect(() => {
        if(isSignedIn)
               fetchUserCredits();
}, [fetchUserCredits,isSignedIn]);

const updateCredit = useCallback(newCredits =>{
    console.log('Updating the credits',newCredits);
    setCredits(newCredits);
},[])
  

const contextValue = {
    credits,
    setCredits,
    fetchUserCredits,
    updateCredit
}
    return(
        <UseCreditContext.Provider value={contextValue} >
            {children}
        </UseCreditContext.Provider>
    )
} 