import {getCurrentUser} from '../auth';
import {subscribeToReservations} from './subscribeToReservations';
export const subscribeToCurrentReservations=cb=>{

    const currentUser=getCurrentUser();
    if(!currentUser)return cb([]);
    return subscribeToReservations(currentUser.id,cb);
}