import { useEffect, useState } from 'react';
import { useAuth } from '../Context/AuthContext';
import { firebaseFireStore} from '../config/config';

export const useFireStoreCollections=(collectioname)=>{

    const [Docs,setDocs] = useState([]);

    const  { user,setError } =useAuth();

    useEffect(()=>{
       
      if(user)
      {
        console.log(user.uid)
     const umount=  firebaseFireStore.collection(collectioname).doc(user.uid)
        .onSnapshot((snap)=>{
           // console.log(snap.data().imagecollections)
            const items=[];

            if(snap.data().imagecollections.length>0){
              snap.data().imagecollections.forEach(element => {
                items.push({
                  ...element
                })
            });
          
            setDocs(items);
            }else {
              setError('please add image');
            }
          
        })

        return umount;
      }

    },[collectioname,user]);

    return {Docs};
}

