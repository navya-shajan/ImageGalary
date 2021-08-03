import React, {useState} from 'react'
import ProgressBar from './ProgressBar';

const Uploads = () =>{
    const [file, setFile] = useState(null);
    const [error, setError] =  useState('');
    const type = ['image/png', 'image/jpg', 'image/jpeg'];
    const onChangeHandler = (e) =>{
        let selected = e.target.files[0];
        console.log(selected);
        if(selected && type.includes(selected.type)){
            setFile(selected);
            setError('');
        }
        else{
            setFile(null);
            setError('Please select an image(jpg/png/jpeg) formate');
        }
    }
return (
    <form>
        <label>
         <input type='file' onChange={onChangeHandler}/>
         <span>+</span>
        </label>
        
        <div className='output'>
            {error && <div className='error'>{error}</div>}
            {file && <div>{file.name}</div>}
            {file && <ProgressBar file={file} setFile={setFile} />}
        </div>
    </form>
)
}
export default Uploads;