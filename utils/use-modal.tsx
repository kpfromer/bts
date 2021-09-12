import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import { BtsEvent } from "./types";

export default function useModal() {
  const [data, setData] = useState<null | BtsEvent>(null);
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
      event={data}
    />
  );

  return {
    modal,
    open: (data: BtsEvent) => setData(data),
    close: () => setData(null),
  };
}
