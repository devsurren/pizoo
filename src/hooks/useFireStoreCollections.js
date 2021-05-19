import { useEffect, useState } from 'react';
import { useAuth } from '../Context/AuthContext';
import { firebaseFireStore} from '../config/config';

export const useFireStoreCollections=(collectioname)=>{

    const [Docs,setDocs] = useState([]);

    const  { user } =useAuth();

    useEffect(()=>{
       
      if(user.uid)
      {
      firebaseFireStore.collection(collectioname).doc(user.uid)
        .onSnapshot((snap)=>{
           // console.log(snap.data().imagecollections)
            const items=[];

            snap.data().imagecollections.forEach(element => {
                items.push({
                  ...element
                })
            });
          
            setDocs(items);
        })

        return;
      }

    },[collectioname]);

    return {Docs};
}

