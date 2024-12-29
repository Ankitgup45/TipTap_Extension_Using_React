import { Mark } from '@tiptap/core';

export const HighlightExtension = Mark.create({
  name: 'highlight',

  addAttributes() {
    return {
      class: {
        default: 'highlight', // The class used for the highlight effect
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'span.highlight', // Match the <span class="highlight"> tag in the HTML
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ['span', HTMLAttributes]; // Render the highlighted text as a <span>
  },

  // Add a custom command to toggle the highlight
  addCommands() {
    return {
      toggleHighlight:
        () =>
        ({ commands }) => {
          return commands.toggleMark(this.name); // Toggle the highlight mark on selected text
        },
    };
  },
});
