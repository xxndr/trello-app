import React, { useState } from "react";

import {
  NewItemButton,
  NewItemFormContainer,
  NewItemInput,
} from "../styles/styles";
import { useFocus } from "../hooks/useFocus";

interface NewItemFormProps {
  onAdd(text: string): void;
}

export const NewItemForm = ({ onAdd }: NewItemFormProps) => {
  const [text, setText] = useState("");
  const ref = useFocus();

  return (
    <NewItemFormContainer>
      <NewItemInput
        ref={ref}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <NewItemButton onClick={() => onAdd(text)}>Create</NewItemButton>
    </NewItemFormContainer>
  );
};
