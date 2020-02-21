import { React, M2Component } from '@lib/react-lib'
import { Card, Button, Modal, Editor, draftjs } from '@lib/vendor-lib'
import { vendor_style_editor } from '@lib/static-lib' // eslint-disable-line

export default class RichText extends M2Component {
  componentInitialState() {
    this.state = {
      showModal: false,
      contentState: '',
      editorState: ''
    }
  }

  render() {
    const { showModal, contentState, editorState } = this.state

    return (
      <div className="ui-container">
        <div className="table-operations">
          <Button type="primary" onClick={()=>this.setState({showModal:true})}>获取内容</Button>
          <Button type="danger" onClick={()=>this.setState({editorState:''})}>清空内容</Button>
        </div>
        <Card title="富文本编辑器">
          <Editor editorState={editorState} 
                  onContentStateChange={(contentState)=>this.setState({contentState})}
                  onEditorStateChange={(editorState)=>this.setState({editorState})}/>
        </Card>
        <Modal visible={showModal}  
               title="富文本内容"
               onCancel={()=>this.setState({showModal:false})} 
               maskClosable={false}
               footer={false}>
          {draftjs(contentState)}
        </Modal>
      </div>
    )
  }
}