import React, { Component } from 'react';
import AceEditor from 'react-ace';
// import CodeMirror from 'react-codemirror';
// import 'codemirror/mode/javascript/javascript';
// import 'codemirror/theme/midnight.css';
import 'brace/mode/javascript';
import 'brace/theme/terminal';
import TaskMain from '../../todo/todos/tasks_main';

        {/*<CodeMirror
          value={this.props.bucket.content}
          onChange={this.onEditorChange.bind(this)}
          options={{
            mode: 'javascript',
            lineNumbers: true,
            theme: 'midnight',
          }}
        />*/}


class BucketsEditor extends Component {
  constructor(props) {
    super(props);
    this.onEditorChange = this.onEditorChange.bind(this);

  }
  onEditorChange(content) {
    Meteor.call('buckets.update', this.props.bucket, content);
  }

  render() {
    return (
      <section className="height-100 cover-8">
        <div className="col-md-9 col-sm-7">
          <h5>Editor</h5>
          <AceEditor
            mode="javascript"
            theme="terminal"
            name="main_editor"
            value={this.props.bucket.content}
            onChange={this.onEditorChange}
            editorProps={{ $blockScrolling: true }}
            highlightActiveLine
            width="100%"
            wrapEnabled
          />
        </div>
        <div className="col-md-3 col-sm-5 bg--white">
          <div>
            <TaskMain />
          </div>
        </div>
      </section>
    );
  }
}

export default BucketsEditor;
