"use client";

import { useEffect, useLayoutEffect, useRef } from "react";

import { createContainer, Portal } from "@/components/portal/portal";

import { MODAL_CONTAINER_ID } from "./constants";
import styles from "./modal.module.scss";
import { ModalProps } from "./types";

export const Modal = ({ onClose, children }: ModalProps) => {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    createContainer({ id: MODAL_CONTAINER_ID });
  }, []);

  useEffect(() => {
    const handleWrapperClick = (event: MouseEvent) => {
      const { target } = event;

      if (target instanceof Node && rootRef.current === target) {
        onClose?.();
      }
    };

    const handleEscapePress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose?.();
      }
    };

    window.addEventListener("click", handleWrapperClick);
    window.addEventListener("keydown", handleEscapePress);

    return () => {
      window.removeEventListener("click", handleWrapperClick);
      window.removeEventListener("keydown", handleEscapePress);
    };
  }, [onClose]);

  return (
    <Portal id={MODAL_CONTAINER_ID}>
      <div ref={rootRef} className={styles.background}>
        <div className={styles.modal}>{children}</div>
      </div>
    </Portal>
  );
};
