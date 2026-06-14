// components/ui/Modal.tsx
import { useEffect, useRef, type ReactNode } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    labelledBy?: string;
};

export function Modal({ isOpen, onClose, children, labelledBy }: ModalProps) {
    const panelRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!isOpen) return;

        panelRef.current?.focus();
        document.body.style.overflow = "hidden";

        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", onKey);

        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = "";
        };
    }, [isOpen, onClose]);

    return createPortal(
        <div
            className={`fixed inset-0 z-70 grid place-items-center p-4 transition-opacity duration-300 ${
                isOpen ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
        >
            <div className="absolute inset-0 bg-ink/50" onClick={onClose} />

            <div
                ref={panelRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby={labelledBy}
                tabIndex={-1}
                className={`relative w-full max-w-md rounded-card border border-line bg-paper p-6 shadow-2xl transition-transform duration-300 focus:outline-none ${
                    isOpen ? "scale-100" : "scale-95"
                }`}
            >
                {children}
            </div>
        </div>,
        document.body,
    );
}