import { useEffect  } from 'react';
import { useFireBaseUpload } from "../hooks/useFireBaseUpload";


export const ProgressBar=({file,setFile,...props})=>{

    const{ url,progressBar,setProgressBar }=useFireBaseUpload(file);
 
    useEffect(()=>{
        if(url){
            setFile(null);
     
        }
    },[url,setFile])

    return(
        <div className='progress-bar' style={{
                height:'5px',
                marginTop:'10px',
                marginBottom:'10px',
                width:`${progressBar}%`,
                background:'#7209b7',
                boxShadow:'0 0 3px #7209b7'
                
            }}></div>
    );
}