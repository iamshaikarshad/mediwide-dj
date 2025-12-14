# MediWide Django Backend

This is the Django backend for the MediWide website that handles enquiry submissions, admin notifications, and automatic responses.

## Setup Instructions

### 1. Create Virtual Environment

\`\`\`bash
cd backend
python -m venv venv

# On Windows
venv\Scripts\activate

# On macOS/Linux
source venv/bin/activate
\`\`\`

### 2. Install Dependencies

\`\`\`bash
pip install -r requirements.txt
\`\`\`

### 3. Environment Variables

Create a `.env` file in the backend directory with the following variables:

\`\`\`
DJANGO_SECRET_KEY=your-secret-key-here
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1
CORS_ALLOWED_ORIGINS=http://localhost:3000,http://127.0.0.1:3000

# Email Configuration (Gmail example)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USE_TLS=True
EMAIL_HOST_USER=your-email@gmail.com
EMAIL_HOST_PASSWORD=your-app-password
DEFAULT_FROM_EMAIL=noreply@mediwide.com
ADMIN_EMAIL=admin@mediwide.com
\`\`\`

**Note for Gmail:** You need to use an App Password, not your regular Gmail password. Generate one at: https://myaccount.google.com/apppasswords

### 4. Run Migrations

\`\`\`bash
python manage.py makemigrations
python manage.py migrate
\`\`\`

### 5. Create Superuser (Admin)

\`\`\`bash
python manage.py createsuperuser
\`\`\`

### 6. Run Development Server

\`\`\`bash
python manage.py runserver
\`\`\`

The API will be available at `http://localhost:8000`

## API Endpoints

- `POST /api/enquiries/` - Submit a new enquiry
- `GET /api/enquiries/list/` - Get all enquiries (admin)

## Admin Panel

Access the Django admin panel at `http://localhost:8000/admin` to view and manage enquiries.

## Features

- Stores enquiries in SQLite database
- Sends email notification to admin when new enquiry is received
- Sends automatic response email to customer
- Admin panel for managing enquiries
- REST API with CORS support for Next.js frontend
