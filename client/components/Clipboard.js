import copy from 'copy-to-clipboard';
import { useState } from 'react';

const Clipboard = ({}) => {
  const [copyText, setCopyText] = useState('http://google.com');

  const copyToClipboard = () => {
    copy(copyText);
    alert('Link Copied');
  };
  return (
    <div>
      <center>
        <input
          type="text"
          value={copyText}
          style={{
            border: '1px solid #FE4167',
            borderRadius: '5px',
            width: '150px',
            height: '37px',
            textAlign: 'center',
          }}
          readOnly
        />
        &nbsp; &nbsp;
        <button id="btn-clipboard" className="btn" onClick={copyToClipboard}>
          Copy Link
        </button>
      </center>
    </div>
  );
};

export default Clipboard;
