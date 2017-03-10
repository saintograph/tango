import React, { Component } from 'react';
import AceEditor from 'react-ace';
// import CodeMirror from 'react-codemirror';
// import 'codemirror/mode/javascript/javascript';
// import 'codemirror/theme/midnight.css';
import 'brace/mode/javascript';
import 'brace/theme/terminal';

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
      <div className="col-xs-8">
        <h5>Input</h5>
        <button className="btn btn-success">Save</button>
        <AceEditor
          mode="javascript"
          theme="terminal"
          name="main_editor"
          value={this.props.bucket.content}
          onChange={this.onEditorChange}
          editorProps={{ $blockScrolling: true }}
          highlightActiveLine
        />
      </div>
    );
  }
}

export default BucketsEditor;
