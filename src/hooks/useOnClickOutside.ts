import { useEffect, RefObject } from "react";

function useOnClickOutside<T extends HTMLElement>(
  ref: RefObject<T>,
  handler: (event: MouseEvent | TouchEvent) => void
) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      // Do nothing if the event was triggered by an element inside the ref
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }

      handler(event);
    };

    // Bind the event listener
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    // Unbind the event listener on cleanup
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}
