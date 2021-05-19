import { useState } from "react";

import { ImageUploadForm } from "./FirestoreFileUpload/ImageUpload";
import { ImageGrid } from "./FirestoreFileUpload/ImageGrid";
import { ModalImage } from "./FirestoreFileUpload/ModalImage";

 const Home=()=>{
    const [selectedImage,setSelectedImage]=useState(null);

  return(
      <>
        <div className="home-showcase">
                <ImageUploadForm />
            <ImageGrid setSelectedImage={setSelectedImage} />
            {!!selectedImage&& <ModalImage selectedImage={selectedImage}  setSelectedImage={ setSelectedImage}/>}
        </div>
      </>
  )
}

export default Home;