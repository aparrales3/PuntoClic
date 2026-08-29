import { Resend } from 'resend';

const resendApiKey = process.env.RESEND_API_KEY;

if (!resendApiKey) {
  console.warn(
    '[PuntoClic - Email Service]: RESEND_API_KEY is not defined in environment variables. Email sending will be simulated or fallback.'
  );
}

export const resend = new Resend(resendApiKey || 'dummy_key');

export const DEFAULT_FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL || 'PUNTOCLICK <onboarding@resend.dev>';
