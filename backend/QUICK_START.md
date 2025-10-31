# Quick Start Guide

## Windows Users

1. **Run the setup script:**
   \`\`\`bash
   cd backend
   setup.bat
   \`\`\`

2. **Create an admin user (optional):**
   \`\`\`bash
   python manage.py createsuperuser
   \`\`\`

3. **Start the server:**
   \`\`\`bash
   python manage.py runserver
   \`\`\`

## Linux/Mac Users

1. **Run the setup script:**
   \`\`\`bash
   cd backend
   chmod +x setup.sh
   ./setup.sh
   \`\`\`

2. **Create an admin user (optional):**
   \`\`\`bash
   python manage.py createsuperuser
   \`\`\`

3. **Start the server:**
   \`\`\`bash
   python manage.py runserver
   \`\`\`

## Manual Setup (if scripts don't work)

1. **Create virtual environment:**
   \`\`\`bash
   python -m venv venv
   \`\`\`

2. **Activate virtual environment:**
   - Windows: `venv\Scripts\activate`
   - Linux/Mac: `source venv/bin/activate`

3. **Install dependencies:**
   \`\`\`bash
   pip install django djangorestframework django-cors-headers
   \`\`\`

4. **Run migrations:**
   \`\`\`bash
   python manage.py makemigrations
   python manage.py migrate
   \`\`\`

5. **Start server:**
   \`\`\`bash
   python manage.py runserver
   \`\`\`

## Verify Setup

Visit http://localhost:8000/api/enquiries/ in your browser. You should see an empty list `[]` instead of an error.

## Configure Email (Optional)

Edit `mediwide/settings.py` and update the email settings:

\`\`\`python
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = 587
EMAIL_USE_TLS = True
EMAIL_HOST_USER = 'your-email@gmail.com'
EMAIL_HOST_PASSWORD = 'your-app-password'
DEFAULT_FROM_EMAIL = 'your-email@gmail.com'
ADMIN_EMAIL = 'admin@mediwide.com'
