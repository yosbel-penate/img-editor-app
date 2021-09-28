import React from 'react'
import AvatarEditor from 'react-avatar-editor'

class MyEditor extends React.Component {
  render() {
    return (
      <AvatarEditor
        image="https://pixabay.com/get/gad467af78146085466e8ace78e2783628f15ef106aa5c7caf671a4fea5370be033acca8bad7cc18777f757c4ca16935100c9719434d56a193bd6e749b0646570_1280.jpg"
        width={250}
        height={250}
        border={25}
        color={[255, 255, 255, 0.6]} // RGBA
        scale={1}
        rotate={0}
      />
    )
  }
}

export default MyEditor