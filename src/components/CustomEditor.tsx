import { useState } from "react";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import { textBlockParagraph } from "../utils/types";

interface ICustomEditorProps {
  initialValue: textBlockParagraph[];
  onChange?: (e: any) => void;
}

const CostomEditor = ({ initialValue, onChange }: ICustomEditorProps) => {
  const [editor] = useState(() => withReact(createEditor()));

  return (
    <Slate onChange={onChange} editor={editor} value={initialValue}>
      <Editable placeholder="Write text" />
    </Slate>
  );
};

export default CostomEditor;
