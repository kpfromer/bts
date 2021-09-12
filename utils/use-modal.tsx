import { useEffect, useState } from "react";
import Modal from "../components/Modal";

export default function useModal<TData>() {
  const [data, setData] = useState<null | TData>(null);
  const isOpen = !!data;

  // Leave on escape
  useEffect(() => {
    const eventFn = (event: KeyboardEvent) => {
      if (event.key === "Escape" || event.key === "Esc") {
        setData(null);
      }
    };
    document.addEventListener("keydown", eventFn);

    return () => document.removeEventListener("keydown", eventFn);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  const modal = (
    <Modal
      isOpen={isOpen}
      onClose={() => setData(null)}
      event={data ?? undefined}
    />
  );

  return {
    modal,
    open: (data: TData) => setData(data),
    close: () => setData(null),
  };
}
