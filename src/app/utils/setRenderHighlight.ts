import { RefObject } from "react";

export const setRenderHighlight = (ref: RefObject<HTMLDivElement | null>) => {
  if (!ref || !ref.current) {
    return null;
  }
  ref.current.style.setProperty("outline", "1px solid red");
  setTimeout(() => {
    ref.current?.style.setProperty("outline", "");
  }, 500);
};
