import { useContext, useState } from 'react'
import { AuthContext } from './context'
import { createImage } from './api'


const UploadImage = () => {
  const { auth } = useContext(AuthContext)
  const [image, setImage] = useState(undefined)
  const [title, setTitle] = useState('')

  const submit = () => {
    createImage({ auth, title, image }).then(response => {
      console.log('UPLOAD IMAGE: RESPONSE: ', response)
    })
  }

  return (
    <div>
      <h1>Upload Image</h1>
      <div>Image Title</div>
      <input 
        onChange={e => setTitle(e.target.value)}
        value={title}
      />

      <div>
        <input 
          accept="image/*" 
          onChange={e => setImage(e.target.files[0])}
          type="file" 
        />
      </div>

      <div>
        <button onClick={() => submit()}>Submit</button>
      </div>
    </div>
  )
}

export default UploadImage
