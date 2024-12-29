import React from 'react';
import { Editor, EditorContent } from '@tiptap/react';
import { HighlightExtension } from './extensions/HighlightExtension'; // Import the custom Highlight extension
import { StarterKit } from '@tiptap/starter-kit';
import './styles.css';

const App = () => {
  // Initialize the editor with Highlight extension and StarterKit
  const editor = new Editor({
    extensions: [
      StarterKit,         // Basic set of Tiptap extensions
      HighlightExtension, // Add the custom Highlight extension
    ],
    content: '<p>Welcome to the Tiptap editor! Try highlighting some text.Tiptap is a modern, flexible, and customizable rich text editor built on top of ProseMirror, designed to be extensible and easy to integrate into web applications. It enables developers to create powerful text editing experiences with features like bold, italic, links, lists, and much more. One of the most interesting and useful features of Tiptap is the "Highlight" extension, which allows users to highlight text within the editor. This feature can be extremely beneficial for use cases like note-taking, document editing, or web content management, where users need to emphasize or highlight certain parts of the text.</p>', // Initial content
  });

  return (
    <div className="App">
      <h1 align='center'>Tiptap Editor with Highlight Extension</h1>
      
      {/* Button to toggle the highlight on selected text */}
      <button  align='center' onClick={() => editor.commands.toggleHighlight()}>Highlight</button>

      {/* Tiptap Editor content */}
      <EditorContent editor={editor} />

      <style>
        {`
          .highlight {
            background-color: yellow;  /* Highlight color */
            color: black;               /* Text color */
          }
        `}
      </style>
    </div>
  );
};

export default App;
