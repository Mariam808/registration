import {useState} from "react";
import ImageUploading from 'react-images-uploading';
import Button from '@material-ui/core/Button';

const UploadingImage= ( ) =>{
    const [images, setImages] = useState([]);
    const maxNumber = 2;
    const onChange = (imageList) => {
        setImages(imageList);
    };
    return(
<div>
    <ImageUploading
        multiple
        value={images}
        maxNumber={maxNumber}
        onChange={onChange}
        dataURLKey="data_url"
    >
        {({imageList,
              onImageUpload,
              onImageRemove,
              dragProps
          }) => (
            <div className="upload-image">
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={onImageUpload}
                    {...dragProps}
                > add image
                </Button>
                {imageList.map((image, index) => (
                    <div key={index} className="image-item">
                        <img src={image.data_url} alt="" width="100" />
                        <div className="image-item__btn-wrapper">
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => onImageRemove(index)}
                            >Remove</Button>

                        </div>
                    </div>
                ))}
            </div>
        )}
    </ImageUploading>
</div>
)
}
export default UploadingImage;



