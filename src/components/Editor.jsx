import React, { useState } from 'react';
import { Editor, EditorContent } from '@tiptap/react';
import { HighlightExtension } from '../extensions/HighlightExtension'; // Correct named import
import { StarterKit } from '@tiptap/starter-kit';

const EditorComponent = () => {
  const [editor] = useState(
    new Editor({
      extensions: [
        StarterKit,
        HighlightExtension, // Add the custom Highlight extension here
      ],
      content: '<p>Hello, this is some text!</p>',
    })
  );

  return (
    <div>
      <button onClick={() => editor.commands.toggleHighlight()}>Highlight</button>
      <EditorContent editor={editor} />
    </div>
  );
};

export default EditorComponent;
