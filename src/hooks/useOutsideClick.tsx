import { useEffect } from "react";

type Props = {
  ref: React.RefObject<HTMLElement>;
  setVisibility: (value: boolean) => void;
};

const useOutsideClick = ({ ref, setVisibility }: Props) => {
  useEffect(() => {
    function listener(event: any) {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      setVisibility(false);
    }

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, setVisibility]);
  // putting ref means the function only listens for event when ref is changed, while putting setVisibility in the dependency array means the function listens for event whenever showSidebar is changed, which is safer and more suitable
};

export default useOutsideClick;
