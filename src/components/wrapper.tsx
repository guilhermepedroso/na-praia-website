import * as React from "react";

type Props = {
  children?: React.ReactNode;
};

export const Wrapper = (props: Props) => (
  <div className="container mx-auto px-4 md:px-16">{props.children}</div>
);
