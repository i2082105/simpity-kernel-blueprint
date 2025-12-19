# Google Analytics Setup

This project is configured to use Google Analytics 4 (GA4) with cookie consent integration.

## Setup Instructions

1. **Get your Google Analytics Measurement ID**
   - Go to [Google Analytics](https://analytics.google.com/)
   - Create a new property or select an existing one
   - Navigate to Admin → Data Streams → Web
   - Copy your Measurement ID (format: `G-XXXXXXXXXX`)

2. **Configure Environment Variable**
   - Create a `.env` file in the root directory (if it doesn't exist)
   - Add your Measurement ID:
     ```
     VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
     ```
   - Replace `G-XXXXXXXXXX` with your actual Measurement ID

3. **For Production**
   - Make sure to set the `VITE_GA_MEASUREMENT_ID` environment variable in your hosting platform
   - The variable will be available at build time

## How It Works

- Google Analytics only loads after the user accepts cookies via the cookie consent banner
- Page views are automatically tracked when users navigate between routes
- The tracking respects user privacy by only initializing after consent

## Manual Event Tracking

You can track custom events using the analytics utility:

```typescript
import { trackEvent } from '@/lib/analytics';

// Track a custom event
trackEvent('button_click', {
  button_name: 'contact_form_submit',
  page: '/contact'
});
```

## Testing

- In development, GA will only initialize if cookies are accepted
- Check the browser console and Network tab to verify GA script loading
- Use Google Analytics DebugView to see real-time events


