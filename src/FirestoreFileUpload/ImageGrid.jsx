import { useFireStoreCollections } from "../hooks/useFireStoreCollections";

export const ImageGrid=({
    setSelectedImage
})=>{

    const { Docs }=useFireStoreCollections('images');


    return(
        <div className='image-grid'>
                {Docs.map((eachdocs)=>{
                     return( <div key={eachdocs.id} className='image-wraper' >
                     <img className='source-image'  onClick={()=>{setSelectedImage(eachdocs.url)}}  src={eachdocs.url} alt="Loading.."/>
                 </div>)
                })}
        </div>

    )

            }