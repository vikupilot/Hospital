import {useState,useEffect  } from 'react';
import {getCurrentUser} from './getCurrentUser';
import {addAuthListner} from './addAuthListner';

export const useAuth=()=>{
const [authInfo,setAuthInfo]=useState(()=>{
    const user =getCurrentUser();
    const isLoading=!user;
    return {isLoading,user};
});

useEffect(()=>{
    const unsubscribe= addAuthListner(user=>{
        setAuthInfo({isLoading:false,user});
    });
    return unsubscribe;
},[]);

return authInfo;

}