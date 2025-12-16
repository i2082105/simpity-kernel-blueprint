# EmailJS Setup Instructions

To enable the contact form to send emails, you need to set up EmailJS and configure environment variables.

## Step 1: Create EmailJS Account

   Go to [https://www.emailjs.com/](https://www.emailjs.com/)
   Sign up for a free account (allows 200 emails/month)


## Step 2: Create an Email Service

 Choose your email provider (Gmail, Outlook, etc.)
 Follow the setup instructions for your provider
 Note your **Service ID** (e.g., `service_xxxxxxx`)


## Step 3: Create an Email Template

 Use the following template variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{company}}` - Sender's company
   - `{{subject}}` - Message subject
   - `{{message}}` - Message content
   - `{{to_email}}` - Recipient email (a.svirski@simpity.eu)

 Example template:
```
        Subject: Contact Form: {{subject}}

        From: {{from_name}} ({{from_email}})
        Company: {{company}}

        Message:
        {{message}}

        ---
        This email was sent from the Simpity contact form.
```

  Set the **To Email** field to: `{{to_email}}` (this will be populated from the environment variable)
  Note your **Template ID** (e.g., `template_xxxxxxx`)


## Step 4: Get Your Public Key

1. Go to **Account** → **General** in EmailJS dashboard
2. Find your **Public Key** (e.g., `xxxxxxxxxxxxx`)


## Step 5: Configure Environment Variables

```env
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_ADMIN_EMAILS=a.svirski@simpity.eu
```
   - For multiple emails (comma-separated): `VITE_ADMIN_EMAILS=a.svirski@simpity.eu,another@example.com,third@example.com`


## Step 6: Restart Development Server

After creating the `.env` file, restart your development server:

```bash
npm run dev
```


## Testing

1. Fill out the contact form on your website
2. Submit the form
3. Check the email inbox(es) configured in `VITE_ADMIN_EMAILS`
4. You should receive the form submission at all specified admin email addresses

## Troubleshooting

- **"EmailJS configuration is missing"**: Make sure your `.env` file exists and contains all three variables
- **Email not received**: Check your EmailJS dashboard for error logs
- **CORS errors**: Make sure your domain is added to EmailJS allowed origins (Account → General → Allowed Origins)

## Security Note

The EmailJS Public Key is safe to expose in client-side code. However, for production, consider:
- Setting up rate limiting
- Adding a CAPTCHA to prevent spam
- Using EmailJS's built-in spam protection features

