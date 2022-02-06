import React from 'react';

import { useQuill } from 'react-quilljs';
// // or const { useQuill } = require('react-quilljs');

import 'quill/dist/quill.snow.css'; // Add css for snow theme
// or import 'quill/dist/quill.bubble.css'; // Add css for bubble theme

// export default () => {
//   const { quill, quillRef } = useQuill();

//   console.log('quill', quill);    // undefined > Quill Object
//   console.log('quillRef', quillRef); // { current: undefined } > { current: Quill Editor Reference }

//   return (
//     <div >
//       <div ref={quillRef} />
//     </div>
//   );
// };

export default () => {
  const { quill, quillRef } = useQuill();

  React.useEffect(() => {
    if (quill) {
      quill.on('text-change', (delta, oldDelta, source) => {
        return quillRef.current.firstChild.innerHTML
        // console.log('Text change!');
        // console.log(quill.getText()); // Get text only
        // console.log(quill.getContents()); // Get delta contents
        // console.log(quill.root.innerHTML); // Get innerHTML using quill
        // console.log(quillRef.current.firstChild.innerHTML); // Get innerHTML using quillRef
      });
    }
  }, [quill]);

  return (
    <div >
      <div ref={quillRef}  />
    </div>
  );
};
