import React from "react";

export type textBlock = {
  id: number;
  value: textBlockParagraph[];
};

export type textBlockParagraph = {
  type: string;
  children: [{ text: string }];
};

export type Block = {
    id: number;
    value: textBlockParagraph[];
  };

export type routes = {
  path: string;
  component: React.FC;
};
