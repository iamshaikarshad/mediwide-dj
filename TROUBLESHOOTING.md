# Troubleshooting Guide

## Common Issues and Solutions

### 1. "Unable to connect to the Django backend"

**Symptoms:**
- Error: `Unable to connect to the Django backend at http://localhost:8000`
- Form submission fails with connection error

**Solutions:**

#### Check if Django is running
\`\`\`bash
# In a new terminal, navigate to backend directory
cd backend

# Start Django server
python manage.py runserver
\`\`\`

You should see:
\`\`\`
Starting development server at http://127.0.0.1:8000/
Quit the server with CONTROL-C.
\`\`\`

#### Verify environment variable
Create `.env.local` in the root directory:
\`\`\`bash
NEXT_PUBLIC_API_URL=http://localhost:8000
\`\`\`

Then restart your Next.js dev server:
\`\`\`bash
npm run dev
\`\`\`

#### Test the API directly
Open your browser and go to:
\`\`\`
http://localhost:8000/api/enquiries/
\`\`\`

You should see a Django REST Framework page.

---

### 2. "ModuleNotFoundError" in Django

**Symptoms:**
- Django won't start
- Missing module errors

**Solution:**
\`\`\`bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
\`\`\`

---

### 3. Database Migration Errors

**Symptoms:**
- "no such table" errors
- Django admin shows errors

**Solution:**
\`\`\`bash
cd backend
python manage.py migrate
\`\`\`

---

### 4. CORS Errors in Browser Console

**Symptoms:**
- "Access-Control-Allow-Origin" errors
- Form submits but gets blocked

**Solution:**

Check `backend/mediwide/settings.py`:
\`\`\`python
CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
]
\`\`\`

Make sure `django-cors-headers` is installed:
\`\`\`bash
pip install django-cors-headers
\`\`\`

---

### 5. Email Notifications Not Working

**Symptoms:**
- Form submits successfully but no emails received
- Console shows email errors

**Solution:**

For development, Django uses console email backend by default. Check your Django terminal for email output.

For production, configure SMTP in `backend/mediwide/settings.py`:
\`\`\`python
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = 587
EMAIL_USE_TLS = True
EMAIL_HOST_USER = 'your-email@gmail.com'
EMAIL_HOST_PASSWORD = 'your-app-password'
\`\`\`

---

### 6. Port Already in Use

**Symptoms:**
- "Address already in use" error
- Can't start Django on port 8000

**Solution:**

Find and kill the process:
\`\`\`bash
# On Mac/Linux
lsof -ti:8000 | xargs kill -9

# On Windows
netstat -ano | findstr :8000
taskkill /PID <PID> /F
\`\`\`

Or use a different port:
\`\`\`bash
python manage.py runserver 8001
\`\`\`

Then update `.env.local`:
\`\`\`
NEXT_PUBLIC_API_URL=http://localhost:8001
\`\`\`

---

## Quick Start Commands

### Start Everything (Automated)
\`\`\`bash
# Make script executable (first time only)
chmod +x start-dev.sh

# Run both servers
./start-dev.sh
\`\`\`

### Start Manually

**Terminal 1 - Django Backend:**
\`\`\`bash
cd backend
source venv/bin/activate
python manage.py runserver
\`\`\`

**Terminal 2 - Next.js Frontend:**
\`\`\`bash
npm run dev
\`\`\`

---

## Verification Checklist

- [ ] Django server running on http://localhost:8000
- [ ] Next.js server running on http://localhost:3000
- [ ] `.env.local` file exists with `NEXT_PUBLIC_API_URL=http://localhost:8000`
- [ ] Can access http://localhost:8000/api/enquiries/ in browser
- [ ] No CORS errors in browser console
- [ ] Database migrations completed (`python manage.py migrate`)

---

## Still Having Issues?

1. Check both terminal windows for error messages
2. Clear browser cache and restart dev server
3. Verify all dependencies are installed:
   \`\`\`bash
   # Backend
   cd backend
   pip install -r requirements.txt
   
   # Frontend
   npm install
   \`\`\`

4. Check the browser console (F12) for detailed error messages
5. Check Django terminal for API request logs
