import React, { useCallback, useEffect } from 'react';
import useCodeMirror from './use-codemirror';

import './editor.css';

interface Props {
  initialDoc: string,
  onChange: (doc: string) => void
}

const Editor: React.FC<Props> = (props) => {
  const { onChange, initialDoc } = props;
  const handleChange = useCallback(
    state => onChange(state.doc.toString()),
    [onChange]
  )
  const [refContainer, editorView] = useCodeMirror<HTMLDivElement>({
    initalDoc: initialDoc,
    onChange: handleChange
  });

  useEffect(() => {
    if (editorView) {
      // todo
    }
  }, [editorView]);

  return <div className='editor-wrapper' ref={refContainer}></div>;
};

export default Editor;
