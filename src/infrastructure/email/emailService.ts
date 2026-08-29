import { resend, DEFAULT_FROM_EMAIL } from './resendClient';

export interface SendEmailOptions {
  to: string | string[];
  subject: string;
  html: string;
  text?: string;
  from?: string;
}

export interface EmailResponse {
  success: boolean;
  messageId?: string;
  error?: string;
}

/**
 * Sends a transactional email using Resend
 */
export async function sendEmail({
  to,
  subject,
  html,
  text,
  from = DEFAULT_FROM_EMAIL,
}: SendEmailOptions): Promise<EmailResponse> {
  try {
    const { data, error } = await resend.emails.send({
      from,
      to,
      subject,
      html,
      text: text || html.replace(/<[^>]*>?/gm, ''),
    });

    if (error) {
      console.error('[Resend Email Error]:', error);
      return {
        success: false,
        error: error.message,
      };
    }

    return {
      success: true,
      messageId: data?.id,
    };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Error desconocido al enviar correo';
    console.error('[Resend Unexpected Exception]:', message);
    return {
      success: false,
      error: message,
    };
  }
}

/**
 * Prebuilt Template: Welcome Email for Talent, Company or Institution
 */
export async function sendWelcomeEmail(
  to: string,
  name: string,
  role: 'talento' | 'empresa' | 'institucion'
): Promise<EmailResponse> {
  const roleTitles = {
    talento: 'Talento Profesional',
    empresa: 'Empresa Aliada',
    institucion: 'Institución Educativa',
  };

  const subject = `¡Bienvenido a PUNTOCLICK, ${name}!`;

  const html = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #fff8f2; color: #201b12; margin: 0; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; padding: 32px; border: 1px solid #f0e6dc; box-shadow: 0 4px 20px rgba(32, 27, 18, 0.05); }
        .header { text-align: center; margin-bottom: 24px; }
        .logo { font-size: 24px; font-weight: 800; color: #785a00; letter-spacing: 2px; text-transform: uppercase; }
        .badge { display: inline-block; background-color: #f4be37; color: #3b2d00; padding: 6px 14px; border-radius: 9999px; font-size: 12px; font-weight: 700; margin-top: 10px; }
        .content { font-size: 16px; line-height: 1.6; color: #4b453d; }
        .cta-button { display: block; width: fit-content; margin: 28px auto; background-color: #785a00; color: #ffffff !important; padding: 14px 28px; text-decoration: none; border-radius: 10px; font-weight: bold; text-align: center; }
        .footer { font-size: 12px; text-align: center; color: #8e8880; margin-top: 32px; border-top: 1px solid #f0e6dc; padding-top: 16px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo">🐝 PUNTOCLICK</div>
          <div class="badge">${roleTitles[role]}</div>
        </div>
        <div class="content">
          <h2>¡Hola, ${name}!</h2>
          <p>Te damos la más cordial bienvenida a <strong>PUNTOCLICK Nicaragua</strong>, el ecosistema digital donde conectamos el mejor talento con empresas líderes e instituciones académicas.</p>
          <p>Tu cuenta ha sido configurada con éxito. Ya puedes ingresar a tu panel de control para explorar oportunidades, configurar tu perfil y activar tu red de conexiones.</p>
          <a href="${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/auth/login" class="cta-button">Acceder a mi Cuenta</a>
          <p>Si tienes alguna consulta, nuestro equipo de soporte está siempre disponible para ayudarte.</p>
        </div>
        <div class="footer">
          <p>© 2026 PUNTOCLICK Nicaragua. Todos los derechos reservados.</p>
          <p>Managua, Nicaragua • Conectando el futuro profesional</p>
        </div>
      </div>
    </body>
    </html>
  `;

  return sendEmail({ to, subject, html });
}

/**
 * Prebuilt Template: Password Recovery OTP Code
 */
export async function sendPasswordRecoveryEmail(
  to: string,
  name: string,
  code: string
): Promise<EmailResponse> {
  const subject = `Tu código de recuperación PUNTOCLICK: ${code}`;

  const html = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #fff8f2; color: #201b12; margin: 0; padding: 20px; }
        .container { max-width: 540px; margin: 0 auto; background: #ffffff; border-radius: 16px; padding: 32px; border: 1px solid #f0e6dc; text-align: center; }
        .code-box { font-size: 32px; font-weight: 800; letter-spacing: 8px; color: #785a00; background: #fdf2e3; padding: 16px 24px; border-radius: 12px; margin: 24px 0; display: inline-block; border: 2px dashed #f4be37; }
        .footer { font-size: 12px; color: #8e8880; margin-top: 24px; border-top: 1px solid #f0e6dc; padding-top: 16px; }
      </style>
    </head>
    <body>
      <div class="container">
        <h1 style="color: #785a00; font-size: 24px;">PUNTOCLICK</h1>
        <h3>Recuperación de Contraseña</h3>
        <p>Hola ${name}, recibimos una solicitud para restablecer tu contraseña.</p>
        <p>Usa el siguiente código de verificación:</p>
        <div class="code-box">${code}</div>
        <p style="font-size: 13px; color: #8e8880;">Este código expirará en 15 minutos. Si no solicitaste este cambio, puedes ignorar este correo con total seguridad.</p>
        <div class="footer">
          <p>© 2026 PUNTOCLICK Nicaragua.</p>
        </div>
      </div>
    </body>
    </html>
  `;

  return sendEmail({ to, subject, html });
}
