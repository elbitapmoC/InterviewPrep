"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { ModalDataType } from "../components/types";

type ModalContextType = {
  isModalOpen: boolean;
  modalData: ModalDataType | null;
  openModal: (data: ModalDataType) => void;
  closeModal: () => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState<ModalDataType | null>(null);

  const openModal = (data: ModalDataType) => {
    setModalData(data);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalData(null);
  };

  return (
    <ModalContext.Provider
      value={{ isModalOpen, modalData, openModal, closeModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context)
    throw new Error("useModalContext must be used within a ModalProvider");
  return context;
};
