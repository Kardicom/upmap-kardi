'use client'

import React, { useState, useEffect } from 'react';
import { X, Phone, User, Building, CheckCircle, Package } from 'lucide-react';
import { useOrderModal } from '../contexts/OrderModalContext';

interface FormData {
  phone: string;
  name: string;
  company: string;
}

const OrderModal: React.FC = () => {
  const { isModalOpen, selectedTariff, closeModal } = useOrderModal();
  const [formData, setFormData] = useState<FormData>({
    phone: '',
    name: '',
    company: ''
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [agree, setAgree] = useState(false);
  const [agreeError, setAgreeError] = useState('');

  useEffect(() => {
    if (!isModalOpen) {
      setShowSuccess(false);
      setFormData({ phone: '', name: '', company: '' });
      setErrors({});
    }
  }, [isModalOpen]);

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.phone.trim()) {
      newErrors.phone = 'Телефон обязателен для заполнения';
    } else if (!/^[\+]?[0-9\s\-\(\)]{10,}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Введите корректный номер телефона';
    }

    if (!formData.name.trim()) {
      newErrors.name = 'Имя обязательно для заполнения';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const sendToServer = async (data: FormData) => {
    const payload = {
      name: data.name,
      phone: data.phone,
      company: data.company || 'Не указана',
      selectedPackage: selectedTariff || '',
      subject: `Новая заявка с сайта UPMAP${selectedTariff ? ` - ${selectedTariff}` : ''}`,
      message: `Новая заявка с сайта UPMAP\nИмя: ${data.name}\nТелефон: ${data.phone}\nКомпания: ${data.company || 'Не указана'}${selectedTariff ? `\nПакет: ${selectedTariff}` : ''}\nДата: ${new Date().toLocaleString('ru-RU')}\nИсточник: Сайт UPMAP`
    };
    
    // TODO: Подключить реальный API
    console.log('Sending data:', payload);
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { success: true };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAgreeError('');
    if (!agree) {
      setAgreeError('Необходимо согласие с политикой конфиденциальности');
      return;
    }
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    try {
      await sendToServer(formData);
      setShowSuccess(true);
      
      setTimeout(() => {
        setFormData({ phone: '', name: '', company: '' });
        setErrors({});
        setShowSuccess(false);
        setAgree(false);
        closeModal();
      }, 5000);
      
    } catch (error) {
      console.error('Ошибка отправки:', error);
      alert('Произошла ошибка при отправке заявки. Попробуйте еще раз.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  if (!isModalOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {showSuccess ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Заявка отправлена!
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Спасибо за обращение! Мы получили вашу заявку{selectedTariff ? ` на пакет "${selectedTariff}"` : ''} и свяжемся с вами 
              в ближайшее время для обсуждения деталей.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <p className="text-amber-800 text-sm">
                <strong>Что дальше?</strong><br />
                Наш менеджер позвонит вам в течение 15 минут для уточнения деталей 
                и составления персонального предложения.
              </p>
            </div>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">
                {selectedTariff ? `Заказать пакет "${selectedTariff}"` : 'Заказать услугу'}
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100"
                disabled={isSubmitting}
              >
                <X size={20} />
              </button>
            </div>

            {selectedTariff && (
              <div className="px-6 pt-6 pb-0">
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
                  <div className="flex items-center gap-2 text-amber-800">
                    <Package size={16} />
                    <span className="font-medium">Выбранный пакет: {selectedTariff}</span>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  <div className="flex items-center gap-2">
                    <Phone size={16} />
                    Телефон <span className="text-red-500">*</span>
                  </div>
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors ${
                    errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-300'
                  }`}
                  placeholder="+7 (999) 123-45-67"
                  disabled={isSubmitting}
                />
                {errors.phone && (
                  <p className="mt-2 text-sm text-red-600">{errors.phone}</p>
                )}
              </div>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    Имя клиента <span className="text-red-500">*</span>
                  </div>
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors ${
                    errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300'
                  }`}
                  placeholder="Введите ваше имя"
                  disabled={isSubmitting}
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-600">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  <div className="flex items-center gap-2">
                    <Building size={16} />
                    Наименование компании
                  </div>
                </label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors"
                  placeholder="Название вашей компании (необязательно)"
                  disabled={isSubmitting}
                />
              </div>

              <div className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id="agree"
                  checked={agree}
                  onChange={e => setAgree(e.target.checked)}
                  className="mr-2"
                  required
                  disabled={isSubmitting}
                />
                <label htmlFor="agree" className="text-sm text-gray-700 select-none">
                  Я соглашаюсь с{' '}
                  <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">
                    политикой конфиденциальности
                  </a>
                </label>
              </div>
              {agreeError && <p className="text-sm text-red-600 mb-2">{agreeError}</p>}
              
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="flex-1 px-4 py-3 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors font-medium"
                  disabled={isSubmitting}
                >
                  Отмена
                </button>
                <button
                  type="submit"
                  disabled={
                    isSubmitting ||
                    !agree ||
                    !formData.phone.trim() ||
                    !formData.name.trim()
                  }
                  className={`flex-1 px-4 py-3 rounded-lg font-medium shadow-lg transition-opacity ${
                    isSubmitting || !agree || !formData.phone.trim() || !formData.name.trim()
                      ? 'bg-amber-500 text-white opacity-60 cursor-not-allowed'
                      : 'bg-amber-500 text-white hover:bg-amber-600'
                  }`}
                >
                  Отправить заявку
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default OrderModal;
