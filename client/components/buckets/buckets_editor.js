import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/theme/monokai.css';

class BucketsEditor extends Component {

  onEditorChange(content) {
    Meteor.call('buckets.update', this.props.bucket, content);
  }

  render() {
    return (
      <div className="col-xs-8">
        <h5>Input</h5>
        <CodeMirror
          value={this.props.bucket.content}
          onChange={this.onEditorChange.bind(this)}
          options={{
            mode: 'javascript',
            lineNumbers: true,
            theme: 'monokai',
          }}
        />
      </div>
    );
  }
}

export default BucketsEditor;
