import React, { useState } from 'react';

function EmailTemplateEditor() {
  const [content, setContent] = useState(`
    <h1>Edit Me!</h1>
    <p>This is some editable content. You can modify it as needed.</p>
    <img src="placeholder.jpg" alt="Placeholder Image" />
  `);

  const handleSaveContent = () => {
    // Perform any additional processing or validation if needed
    console.log('Edited Content:', content);
    // You can send this content to a server for storage or further processing
  };

  return (
    <div>
      <div
        contentEditable={true}
        dangerouslySetInnerHTML={{ __html: content }}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleSaveContent}>Save Content</button>
    </div>
  );
}

export default EmailTemplateEditor;
