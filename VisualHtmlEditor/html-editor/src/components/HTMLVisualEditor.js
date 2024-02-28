import React, { useState } from 'react';

function HTMLVisualEditor() {
  const [originalHtml, setOriginalHtml] = useState('<div>Hello, world!</div>');

  const handleHtmlChange = (event) => {
    setOriginalHtml(event.target.innerHTML);
  };

  const handleTextareaChange = (event) => {
    setOriginalHtml(event.target.value);
  };

  return (
    <div>
      <div>
        <h2>Visual HTML Editor</h2>
        <div
          contentEditable
          dangerouslySetInnerHTML={{ __html: originalHtml }}
          onBlur={handleHtmlChange}
          style={{ border: '1px solid #ccc', minHeight: '50px', padding: '5px' }}
        />
      </div>
      <div>
        <h2>HTML Content</h2>
        <textarea
          value={originalHtml}
          onChange={handleTextareaChange}
          style={{ width: '100%', height: '200px', marginTop: '10px' }}
        />
      </div>
    </div>
  );
}

export default HTMLVisualEditor;
