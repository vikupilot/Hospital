import firebase from 'firebase';

//loading data of a fiven userid
export const getUserInfo= async (userId)=>{
    const userInfoDoc = await firebase.firestore()
    .collection('users')
    .doc(userId)
    .get();

    const userInfo=userInfoDoc.data();
    if(!userInfo) return null;
    return{
        ...userInfo,
        id:userInfoDoc.id

    };
}