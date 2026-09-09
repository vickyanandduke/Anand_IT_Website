import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = String(body.name ?? '').trim();
    const email = String(body.email ?? '').trim();
    const phone = String(body.phone ?? '').trim();
    const service = String(body.service ?? '').trim();
    const message = String(body.message ?? '').trim();

    if (!name || !phone || !message) {
      return NextResponse.json(
        {
          success: false,
          message: 'Please fill in all required fields.',
        },
        { status: 400 }
      );
    }

    if (email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(email)) {
        return NextResponse.json(
          {
            success: false,
            message: 'Please enter a valid email address.',
          },
          { status: 400 }
        );
      }
    }

    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured.');

      return NextResponse.json(
        {
          success: false,
          message: 'Email service is not configured yet.',
        },
        { status: 500 }
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeService = escapeHtml(service || 'Not specified');
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br />');

    const { error } = await resend.emails.send({
      from:
        process.env.CONTACT_FROM_EMAIL ||
        'Anand Consultancy <contact@anandconsultancy.co.in>',

      to: ['contact@anandconsultancy.co.in'],

      ...(email ? { replyTo: email } : {}),

      subject: `New Website Enquiry — ${name}`,

      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <title>New Website Enquiry</title>
          </head>

          <body
            style="
              margin: 0;
              padding: 0;
              background: #f8fafc;
              font-family: Arial, Helvetica, sans-serif;
              color: #0f172a;
            "
          >
            <div style="padding: 40px 20px;">
              <div
                style="
                  max-width: 620px;
                  margin: 0 auto;
                  background: #ffffff;
                  border: 1px solid #e2e8f0;
                  border-radius: 16px;
                  overflow: hidden;
                "
              >
                <div
                  style="
                    background: #0b1f3a;
                    padding: 28px 30px;
                  "
                >
                  <h1
                    style="
                      margin: 0;
                      color: #ffffff;
                      font-size: 22px;
                      line-height: 1.3;
                    "
                  >
                    New Website Enquiry
                  </h1>

                  <p
                    style="
                      margin: 8px 0 0;
                      color: #bfdbfe;
                      font-size: 14px;
                    "
                  >
                    Anand Consultancy
                  </p>
                </div>

                <div style="padding: 30px;">
                  <div
                    style="
                      margin-bottom: 24px;
                      padding: 18px;
                      background: #f8fafc;
                      border-radius: 12px;
                      border: 1px solid #e2e8f0;
                    "
                  >
                    <p
                      style="
                        margin: 0 0 6px;
                        color: #64748b;
                        font-size: 12px;
                        text-transform: uppercase;
                        letter-spacing: 0.08em;
                      "
                    >
                      Customer
                    </p>

                    <p
                      style="
                        margin: 0;
                        font-size: 17px;
                        font-weight: 600;
                      "
                    >
                      ${safeName}
                    </p>
                  </div>

                  <table
                    width="100%"
                    cellpadding="0"
                    cellspacing="0"
                    style="border-collapse: collapse;"
                  >
                    <tr>
                      <td
                        style="
                          padding: 10px 0;
                          color: #64748b;
                          font-size: 14px;
                          width: 130px;
                        "
                      >
                        Email
                      </td>

                      <td
                        style="
                          padding: 10px 0;
                          font-size: 14px;
                        "
                      >
                        ${safeEmail || 'Not provided'}
                      </td>
                    </tr>

                    <tr>
                      <td
                        style="
                          padding: 10px 0;
                          color: #64748b;
                          font-size: 14px;
                        "
                      >
                        Phone
                      </td>

                      <td
                        style="
                          padding: 10px 0;
                          font-size: 14px;
                        "
                      >
                        ${safePhone}
                      </td>
                    </tr>

                    <tr>
                      <td
                        style="
                          padding: 10px 0;
                          color: #64748b;
                          font-size: 14px;
                        "
                      >
                        Service
                      </td>

                      <td
                        style="
                          padding: 10px 0;
                          font-size: 14px;
                        "
                      >
                        ${safeService}
                      </td>
                    </tr>
                  </table>

                  <div
                    style="
                      margin-top: 24px;
                      padding-top: 24px;
                      border-top: 1px solid #e2e8f0;
                    "
                  >
                    <p
                      style="
                        margin: 0 0 10px;
                        color: #64748b;
                        font-size: 12px;
                        text-transform: uppercase;
                        letter-spacing: 0.08em;
                      "
                    >
                      Message
                    </p>

                    <div
                      style="
                        font-size: 15px;
                        line-height: 1.7;
                        color: #334155;
                      "
                    >
                      ${safeMessage}
                    </div>
                  </div>
                </div>

                <div
                  style="
                    padding: 18px 30px;
                    background: #f8fafc;
                    border-top: 1px solid #e2e8f0;
                  "
                >
                  <p
                    style="
                      margin: 0;
                      color: #94a3b8;
                      font-size: 12px;
                    "
                  >
                    This enquiry was submitted through
                    anandconsultancy.co.in
                  </p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend email error:', error);

      return NextResponse.json(
        {
          success: false,
          message: 'Unable to send your enquiry right now.',
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Your enquiry has been sent successfully.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API error:', error);

    return NextResponse.json(
      {
        success: false,
        message: 'Something went wrong. Please try again.',
      },
      { status: 500 }
    );
  }
}