'use client'

import { createContext, useContext, useState, ReactNode } from 'react';

type OrderModalContextType = {
  isModalOpen: boolean;
  selectedTariff: string | null;
  openModal: (tariff?: string) => void;
  closeModal: () => void;
};

const OrderModalContext = createContext<OrderModalContextType | undefined>(undefined);

export const useOrderModal = () => {
  const context = useContext(OrderModalContext);
  if (!context) {
    // Возвращаем заглушку если контекста нет
    return {
      isModalOpen: false,
      selectedTariff: null,
      openModal: () => console.log('OrderModal not initialized'),
      closeModal: () => {}
    };
  }
  return context;
};

export function OrderModalProvider({ children }: { children: ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTariff, setSelectedTariff] = useState<string | null>(null);

  const openModal = (tariff?: string) => {
    setSelectedTariff(tariff || null);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTariff(null);
  };

  return (
    <OrderModalContext.Provider value={{ isModalOpen, selectedTariff, openModal, closeModal }}>
      {children}
    </OrderModalContext.Provider>
  );
}
