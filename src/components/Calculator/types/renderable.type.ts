/* A generic for a "renderable" object, with props + component in one object */
import React from "react";
import { CommonProps } from "./props.type";

export type Renderable<Props> = CommonProps & {
  Component: typeof React.Component<Props>;
};
