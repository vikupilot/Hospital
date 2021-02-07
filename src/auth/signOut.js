import firebase from "firebase";

export const signOut=async()=>{
    try {
        await firebase.auth().signOut();
    } catch (error) {
        throw new Error('Error while Signing Out');
        
    }
}