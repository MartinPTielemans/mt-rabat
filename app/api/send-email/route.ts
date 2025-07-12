import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const body = await request.json();
    const { fornavn, efternavn, email, telefon, service, besked } = body;

    if (!fornavn || !efternavn || !email || !besked) {
      return NextResponse.json({ error: 'Manglende påkrævede felter' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: 'Kontaktformular <kontakt@mtrabat.dk>',
      to: ['info@mtrabat.dk'],
      subject: `Ny kontaktforespørgsel fra ${fornavn} ${efternavn}`,
      text: `
        Navn: ${fornavn} ${efternavn}
        Email: ${email}
        Telefon: ${telefon || 'Ikke angivet'}
        Service: ${service || 'Ikke valgt'}
        Besked: ${besked}
      `,
      replyTo: email,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: 'Email sendt succesfuldt', data });
  } catch (error) {
    return NextResponse.json({ error: 'Server fejl' }, { status: 500 });
  }
} 