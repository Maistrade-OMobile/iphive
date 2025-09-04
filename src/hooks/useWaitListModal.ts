'use client';
import { useState } from 'react';
type ModalState = 'closed' | 'waitlist' | 'success' | 'error';

export const useWaitlistModal = () => {
  const [modalState, setModalState] = useState<ModalState>('closed');

  const openWaitlist = () => setModalState('waitlist');
  const showSuccess = () => setModalState('success');
  const showError = () => setModalState('error');
  const retryWaitlist = () => setModalState('waitlist');
  const closeAllModals = () => setModalState('closed');

  const isWaitlistOpen = modalState === 'waitlist';
  const isSuccessOpen = modalState === 'success';
  const isErrorOpen = modalState === 'error';

  return {
    // State indicators
    modalState,
    isWaitlistOpen,
    isSuccessOpen,
    isErrorOpen,

    // Actions
    openWaitlist,
    showSuccess,
    showError,
    retryWaitlist,
    closeAllModals,
  };
};
