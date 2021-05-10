import { useEffect, useState  } from 'react';
import firebase from 'firebase';
import { useAuth } from '../Context/AuthContext';
import { firebaseFireStore, firebaseStorage} from '../config/config';
import { v4 as uuid } from 'uuid';

export const useFireBaseUpload=(file)=>{

        const [progressBar,setProgressBar]=useState();
        const[error,setError]=useState();
        const[url,setUrl]=useState();

        const { user } = useAuth();

        const database = firebaseFireStore.collection('images');

    useEffect(()=>{
       const fileref= firebaseStorage.ref(file.name);
            fileref.put(file).on('state_changed',(snap)=>{
                //Current Event
                const precentage=(snap.bytesTransferred/snap.totalBytes)*100;
                setProgressBar(precentage);
            },(err)=>{
                //On Error
                console.log(err);
                setError(err);
            },async()=>{
                //On Complete
               
              const fileUrl= await fileref.getDownloadURL();
              setUrl(fileUrl);
            //  const  createdAt=timeStamp();
              const imageObject={
                  id:uuid(),
                  url:fileUrl,
                 // createdAt:firebase.firestore.FieldValue.serverTimestamp()
              }
            const udpateUrlCollections= database.doc(user.uid);
               udpateUrlCollections.update({
                //     id:uuid(),
                //    url:firebase.firestore.FieldValue.arrayUnion(fileUrl),
                //    createdAt
                    imagecollections:firebase.firestore.FieldValue.arrayUnion(imageObject)
               }).catch((err)=>{
                   //No document to update
                   const nodoctoupdate=err.message.split(':');
                   if(nodoctoupdate[0]==='No document to update'){
                    // const imageDetails={
                    //     id:"",
                    //     url:"",
                    //     createdAt:""
                    // }
                       udpateUrlCollections.set({
                         imagecollections:[]
                       })
                   }
               })

            })
    },[file]);

   // useFireStore(url);

    return { progressBar,setProgressBar,url,error }
}