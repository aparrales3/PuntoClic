import { NextResponse } from 'next/server';
import {
  sendEmail,
  sendWelcomeEmail,
  sendPasswordRecoveryEmail,
} from '@/infrastructure/email/emailService';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { type, to, name, role, code, subject, html } = body;

    if (!to) {
      return NextResponse.json(
        { error: 'El campo "to" es obligatorio' },
        { status: 400 }
      );
    }

    let result;

    if (type === 'welcome') {
      result = await sendWelcomeEmail(to, name || 'Usuario', role || 'talento');
    } else if (type === 'recovery') {
      result = await sendPasswordRecoveryEmail(
        to,
        name || 'Usuario',
        code || '123456'
      );
    } else if (subject && html) {
      result = await sendEmail({ to, subject, html });
    } else {
      return NextResponse.json(
        { error: 'Tipo de correo no válido o faltan parámetros (subject/html)' },
        { status: 400 }
      );
    }

    if (!result.success) {
      return NextResponse.json(
        { error: result.error || 'Fallo al enviar correo' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      messageId: result.messageId,
      message: 'Correo enviado satisfactoriamente vía Resend',
    });
  } catch (error: unknown) {
    const errorMsg = error instanceof Error ? error.message : 'Error interno';
    return NextResponse.json({ error: errorMsg }, { status: 500 });
  }
}
