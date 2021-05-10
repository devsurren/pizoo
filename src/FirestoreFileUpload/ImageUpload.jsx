import { useState } from "react";

import { ProgressBar } from './ProgressBar';

import { useAuth } from "../Context/AuthContext";



export const ImageUploadForm=()=>{
    
    const [ file,setFile  ]=useState();

    const {   } = useAuth();

    const imageFileType=['image/png','image/jpeg'];

    const onFileChangeHandler=(event)=>{
        const selectedFile = event.target.files[0];
        if(selectedFile && imageFileType.includes(selectedFile.type)) {
            setFile(selectedFile);
        }else{
            alert('please select supported file type')
        }
    }
  
    return(
        <>
           <div className='upload-container'>
                    <form>
                            <input className='justtest' type='file' onChange={ onFileChangeHandler  } /> 
                        </form>
           </div>
            { file&& <ProgressBar  file={file} setFile={setFile} /> }

        </>
    )
}