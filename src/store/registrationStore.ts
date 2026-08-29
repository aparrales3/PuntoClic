import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface TalentRegistrationData {
  firstName: string;
  lastName: string;
  email: string;
  birthDate: string;
  idNumber: string;
  gender: string;
  phone: string;
  address: string;
  photoUrl?: string; // Optional or path
  cvUrl?: string; // Optional or path
  education: string;
  experience: string;
  password?: string;
}

export interface CompanyRegistrationData {
  companyName: string;
  email: string;
  legalName: string;
  sector: string;
  address: string;
  contactName: string;
  contactPhone: string;
  socialLinks: string;
  purpose: string;
  vision: string;
  culture: string;
  offer: string;
  history: string;
  logoUrl?: string;
  password?: string;
}

interface RegistrationState {
  talentData: Partial<TalentRegistrationData>;
  companyData: Partial<CompanyRegistrationData>;
  setTalentData: (data: Partial<TalentRegistrationData>) => void;
  setCompanyData: (data: Partial<CompanyRegistrationData>) => void;
  reset: () => void;
}

export const useRegistrationStore = create<RegistrationState>()(
  persist(
    (set) => ({
      talentData: {},
      companyData: {},
      setTalentData: (data) =>
        set((state) => ({ talentData: { ...state.talentData, ...data } })),
      setCompanyData: (data) =>
        set((state) => ({ companyData: { ...state.companyData, ...data } })),
      reset: () => set({ talentData: {}, companyData: {} }),
    }),
    {
      name: 'registration-storage',
    }
  )
);
