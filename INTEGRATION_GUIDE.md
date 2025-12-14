# MediWide Frontend-Backend Integration Guide

This guide explains how to run the complete MediWide application with both the Next.js frontend and Django backend.

## Prerequisites

- Node.js 18+ and npm/yarn
- Python 3.8+
- Git

## Quick Start

### 1. Setup Django Backend

\`\`\`bash
# Navigate to backend directory
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Create .env file (copy from .env.example and fill in your details)
cp .env.example .env

# Run migrations
python manage.py makemigrations
python manage.py migrate

# Create superuser for admin access
python manage.py createsuperuser

# Start Django server (runs on port 8000)
python manage.py runserver
\`\`\`

### 2. Setup Next.js Frontend

\`\`\`bash
# In a new terminal, navigate to project root
cd ..

# Install dependencies
npm install

# Create .env.local file
cp .env.local.example .env.local

# Start Next.js development server (runs on port 3000)
npm run dev
\`\`\`

### 3. Access the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8000/api/
- **Django Admin**: http://localhost:8000/admin

## Email Configuration

To enable email notifications and auto-responses, configure your email settings in `backend/.env`:

### Using Gmail

1. Enable 2-Factor Authentication on your Google account
2. Generate an App Password: https://myaccount.google.com/apppasswords
3. Update your `.env` file:

\`\`\`env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USE_TLS=True
EMAIL_HOST_USER=your-email@gmail.com
EMAIL_HOST_PASSWORD=your-16-digit-app-password
DEFAULT_FROM_EMAIL=noreply@mediwide.com
ADMIN_EMAIL=admin@mediwide.com
\`\`\`

### Using Other Email Providers

Update the SMTP settings according to your provider:

**Outlook/Office 365:**
\`\`\`env
EMAIL_HOST=smtp.office365.com
EMAIL_PORT=587
\`\`\`

**SendGrid:**
\`\`\`env
EMAIL_HOST=smtp.sendgrid.net
EMAIL_PORT=587
EMAIL_HOST_USER=apikey
EMAIL_HOST_PASSWORD=your-sendgrid-api-key
\`\`\`

## Testing the Integration

1. Open http://localhost:3000 in your browser
2. Scroll to the contact form
3. Fill in the form and submit
4. Check:
   - Form shows success message
   - Admin receives notification email
   - Customer receives auto-response email
   - Enquiry appears in Django admin panel

## API Endpoints

### Submit Enquiry
\`\`\`
POST http://localhost:8000/api/enquiries/
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "subject": "Website Development",
  "message": "I'm interested in your services..."
}
\`\`\`

### List Enquiries (Admin)
\`\`\`
GET http://localhost:8000/api/enquiries/list/
\`\`\`

## Production Deployment

### Backend (Django)

1. Set `DEBUG=False` in production
2. Update `ALLOWED_HOSTS` with your domain
3. Use PostgreSQL instead of SQLite
4. Set strong `DJANGO_SECRET_KEY`
5. Configure production email settings
6. Use a production WSGI server (gunicorn, uwsgi)

### Frontend (Next.js)

1. Update `NEXT_PUBLIC_API_URL` to your production API URL
2. Deploy to Vercel or your preferred hosting

## Troubleshooting

### CORS Issues
- Ensure `CORS_ALLOWED_ORIGINS` in Django includes your frontend URL
- Check that both servers are running

### Email Not Sending
- Verify email credentials in `.env`
- Check spam folder
- Review Django logs for error messages
- Test with a simple email provider first (Gmail)

### Database Issues
- Run migrations: `python manage.py migrate`
- Check database file permissions
- Verify SQLite database exists in backend directory

## Development Tips

- Keep both servers running in separate terminals
- Use Django admin panel to view and manage enquiries
- Check browser console for frontend errors
- Check Django terminal for backend errors
- Test email functionality with a test email account first
