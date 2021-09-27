import React from 'react'
import AvatarEditor from 'react-avatar-editor'

class MyEditor extends React.Component {
  render() {
    return (
      <AvatarEditor
        image="https://pixabay.com/get/g41375ea6528f896a321a7770f6acea79cfc92cfb058bf8a0668357acc7a02acad3b75a8b8f0f817e3cc1fae2afa8279c248bb9abe405833d8a4128e013161635_1280.jpg"
        width={500}
        height={500}
        border={50}
        color={[255, 255, 255, 0.6]} // RGBA
        scale={1.2}
        rotate={0}
      />
    )
  }
}

export default MyEditor