"use client";
import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
	contentClassName?: string;
}

const Modal: React.FC<ModalProps> = ({
	isOpen,
	onClose,
	children,
	contentClassName = "bg-white p-4",
}) => {
	const [showModal, setShowModal] = useState(false);
	const [isSmallScreen, setIsSmallScreen] = useState(false);
	const [isMounted, setIsMounted] = useState(false);
	const modalRef = useRef<HTMLDivElement | null>(null);
	const overlayRef = useRef<HTMLDivElement | null>(null);

	// Handle mounting and screen size detection
	useEffect(() => {
		setIsMounted(true);

		const checkScreenSize = () => {
			setIsSmallScreen(window.innerWidth < 768);
		};

		// Initial check
		checkScreenSize();

		// Add resize listener
		window.addEventListener("resize", checkScreenSize);

		return () => {
			window.removeEventListener("resize", checkScreenSize);
		};
	}, []);

	useEffect(() => {
		if (isOpen) {
			setShowModal(true);
			if (modalRef.current) {
				modalRef.current.focus();
			}
		} else {
			setTimeout(() => setShowModal(false), 300);
		}
	}, [isOpen]);

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === "Escape") {
			onClose();
		}
	};

	const handleOverlayClick = (e: React.MouseEvent) => {
		if (
			overlayRef.current &&
			overlayRef.current === e.target &&
			isSmallScreen // Now safe to use
		) {
			onClose();
		}
	};

	// Don't render anything until mounted (prevents SSR issues)
	if (!isMounted) {
		return null;
	}

	const modalContent = (
		<>
			{showModal && (
				<div
					ref={overlayRef}
					className={`fixed inset-0 z-50 flex ${
						isSmallScreen ? "items-end" : "items-center"
					} justify-center bg-black/80 transition-opacity duration-300 ${
						isOpen ? "opacity-100" : "opacity-0"
					}`}
					onKeyDown={handleKeyDown}
					tabIndex={-1}
					onClick={handleOverlayClick}
				>
					<div
						ref={modalRef}
						className={`relative ${contentClassName} transition-transform duration-300 ${
							isOpen
								? isSmallScreen
									? "translate-y-0 w-full rounded-b-none"
									: "scale-100"
								: isSmallScreen
								? "translate-y-full"
								: "scale-95"
						}`}
					>
						{children}
					</div>
				</div>
			)}
		</>
	);

	return ReactDOM.createPortal(modalContent, document.body);
};

export default Modal;
