import firebase from 'firebase';
import {getCurrentUser} from '../auth';

export const updateCurrentUserInfo=async updates=>{

    const currentUser =getCurrentUser();
    if(!currentUser) return null;
    await firebase.firestore()
    .collection('users')
    .doc(currentUser.id)
    .update(updates);
}