import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { textBlock, textBlockParagraph } from "../../utils/types";

const initialState: IinitialState = {
  blocks: [],
};

interface IinitialState {
  blocks: textBlock[]
}

export const TextBlocksSlice = createSlice({
  name: "TextBlocks",
  initialState,
  reducers: {
    createTextBlock(state, action: PayloadAction<textBlockParagraph[]>) {
      state.blocks = [
        ...state.blocks,
        {
          id: state.blocks.length
            ? Math.max(...state.blocks.map((e) => +e.id)) + 1
            : 1,
          value: action.payload,
        },
      ];
    },
    deleteTextBlock(state, action: PayloadAction<number>) {
      state.blocks = state.blocks.filter(
        (block) => block.id !== action.payload
      );
    },
  },
  extraReducers: {},
});

export default TextBlocksSlice.reducer;
export const { deleteTextBlock, createTextBlock } = TextBlocksSlice.actions;

