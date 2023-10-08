import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { uploadProductImage } from '../../api/apiProducts';

interface IDropzone {
  setimage: (image: string) => void;
  name: string;
  image: string;
}

export function Dropzone({ setimage, name, image }: IDropzone) {
  // const { fieldState, field } = useController({ ...props, defaultValue: null });

  const dzStyles = {
    display: 'flex',
    border: 'dashed 3px #eee',
    borderColor: '#eee',
    borderRadius: '5px',
    paddingTop: '30px',
    alignItems: 'center',
    height: 200,
    width: 500
  };

  const dzActive = {
    borderColor: 'green'
  };

  const onDrop = useCallback((acceptedFiles: any) => {
    acceptedFiles[0] = Object.assign(acceptedFiles[0], { preview: URL.createObjectURL(acceptedFiles[0]) });
    console.log(acceptedFiles[0]);
    var formData = new FormData();
    formData.append(name, acceptedFiles[0]);
    uploadProductImage(formData).then(res => {
      console.log(res);
      setimage(res.data.url);
      console.log(res.data.url);
    });
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <>
      {!image ? <div {...getRootProps()} style={isDragActive ? { ...dzStyles, ...dzActive } : dzStyles}>
        <input {...getInputProps()} />

        {
          isDragActive ?
            <p>Drop the files here ...</p> :
            <p>Drag 'n' drop some files here, or click to select files</p>
        }

      </div>
        : <div className='flex justify-center' >
          {image && <img src={image} className='w-48 h-48' />}
        </div>
      }
    </>

  );
}