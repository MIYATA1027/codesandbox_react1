import { ReactNode } from "react";

export interface props {
  children: ReactNode;
}

export const Children = ({ children }: props) => {
  return (
    <>
      <div>ここはchildrenコンポーネントです</div>
      <div>{children}</div>
    </>
  );
};
