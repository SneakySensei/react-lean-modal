import { useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";
import { customAlphabet } from "nanoid/non-secure";

type ReactPortalProps = {
  children: React.ReactNode;
};

const ReactPortal = ({ children }: ReactPortalProps) => {
  const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(
    null
  );

  useLayoutEffect(() => {
    if (wrapperElement) return;

    const elementId = generateElementId();
    let element = document.getElementById(elementId);
    let systemCreated = false;

    if (!element) {
      element = createPortalAndAppend(elementId);
      systemCreated = true;
    }

    setWrapperElement(element);

    return () => {
      if (systemCreated && element?.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, []);

  if (!wrapperElement) return null;
  return createPortal(children, wrapperElement);
};

export default ReactPortal;

// PRIVATE UTILS
const generateElementId = customAlphabet(
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
  6
);

const createPortalAndAppend = (id: string) => {
  const portalEl = document.createElement("div");
  portalEl.id = id;
  portalEl.tabIndex = -1;
  document.body.appendChild(portalEl);
  return portalEl;
};
