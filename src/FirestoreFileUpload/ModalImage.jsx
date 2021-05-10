

export const ModalImage=({
    selectedImage,
    setSelectedImage
})=>{
    

    const removeModal=(event)=>{
        if(event.target.classList.contains('back-drop')) setSelectedImage(null);
    }

    return(
        <>
            <div className='back-drop'onClick={removeModal}>
                    <img src={selectedImage} alt="image"  ></img>
            </div>
        </>
    );
}