import axios from 'axios';
import { Experience, BookingData, PromoValidation } from '@/types';

const api = axios.create({
  baseURL: '/api',
});

export const experiencesAPI = {
  getAll: () => api.get<Experience[]>('/experience'),
  getById: (experienceId: string) => api.get<{ success: boolean; data: Experience }>(`/experience/${experienceId}`),
};

export const bookingsAPI = {
  create: (data: BookingData) => api.post('/bookings', data),
};

export const promoAPI = {
  validate: (code: string, amount: number) => 
    api.post<PromoValidation>('/promo', { code, amount }),
};