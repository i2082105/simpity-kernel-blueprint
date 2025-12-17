# reCAPTCHA Setup Instructions

The contact form uses Google reCAPTCHA v2 to prevent spam submissions.


## Step 1: Create reCAPTCHA Site

1. Go to [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
2. Click **+ Create** to create a new site
3. Fill in the form:
   - **Label**: Give it a name (e.g., "Simpity Contact Form")
   - **reCAPTCHA type**: Select **reCAPTCHA v2** → **"I'm not a robot" Checkbox**

Check you’re using a v2 checkbox key (not v3 / Invisible / Enterprise)


   - **Domains**: Add your domains:
     - `localhost` (for development)
     - `simpity.eu` (for production)
     - `www.simpity.eu` (if using www subdomain)
   - Accept the reCAPTCHA Terms of Service
4. Click **Submit**


## Step 2: Get Your Site Key

After creating the site, you'll see:
- **Site Key** (public key - safe to expose in client-side code)
- **Secret Key** (private key - keep this secret, not needed for frontend)


## Step 3: Configure Environment Variable

1. Open your `.env` file in the project root
2. Add the reCAPTCHA site key:

```env
VITE_RECAPTCHA_SITE_KEY=your_site_key_here
```


## Step 4: Restart Development Server

After adding the environment variable, restart your development server:

```bash
npm run dev
```


## Testing

1. Navigate to the contact form on your website
2. Fill out the form
3. Complete the reCAPTCHA challenge ("I'm not a robot" checkbox)
4. Submit the form
5. The form should only submit if the CAPTCHA is completed

## Features

- **Theme Support**: The CAPTCHA automatically adapts to your site's theme (dark/light)
- **Validation**: Form submission is blocked until CAPTCHA is completed
- **Error Handling**: CAPTCHA resets automatically if form submission fails
- **Spam Protection**: Prevents automated spam submissions

## Troubleshooting

- **"Please complete the CAPTCHA" error**: Make sure you've checked the "I'm not a robot" box
- **CAPTCHA not showing**: 
  - Check that `VITE_RECAPTCHA_SITE_KEY` is set in your `.env` file
  - Verify your domain is added to the reCAPTCHA site configuration
  - Check browser console for errors
- **CAPTCHA not working in production**: 
  - Make sure your production domain is added to the reCAPTCHA site domains list
  - Verify the environment variable is set in your production environment

## Security Notes

- The Site Key is safe to expose in client-side code
- The Secret Key is not needed for frontend implementation
- reCAPTCHA v2 provides effective protection against automated spam
- For additional security, consider implementing rate limiting on your backend


