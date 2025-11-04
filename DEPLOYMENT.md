# Deployment Guide for MediWide

This guide covers deploying the MediWide website with Next.js frontend on Vercel and Django backend on a separate platform.

## Architecture Overview

- **Frontend (Next.js)**: Deploy to Vercel
- **Backend (Django)**: Deploy to Railway, Render, or another Python hosting platform
- **Database**: PostgreSQL (recommended for production)

---

## Part 1: Deploy Django Backend

### Option A: Deploy to Railway (Recommended)

Railway offers easy Django deployment with PostgreSQL included.

1. **Create a Railway account** at [railway.app](https://railway.app)

2. **Install Railway CLI** (optional):
\`\`\`bash
npm install -g @railway/cli
\`\`\`

3. **Add production requirements**:

Create `backend/requirements.txt`:
\`\`\`txt
Django>=4.2.0
djangorestframework>=3.14.0
django-cors-headers>=4.3.0
psycopg2-binary>=2.9.9
gunicorn>=21.2.0
whitenoise>=6.6.0
python-decouple>=3.8
\`\`\`

4. **Create Railway configuration**:

Create `backend/railway.json`:
\`\`\`json
{
  "$schema": "https://railway.app/railway.schema.json",
  "build": {
    "builder": "NIXPACKS"
  },
  "deploy": {
    "startCommand": "python manage.py migrate && gunicorn mediwide.wsgi",
    "restartPolicyType": "ON_FAILURE",
    "restartPolicyMaxRetries": 10
  }
}
\`\`\`

5. **Update Django settings for production**:

Create `backend/mediwide/production_settings.py`:
\`\`\`python
from .settings import *
from decouple import config

DEBUG = False

ALLOWED_HOSTS = config('ALLOWED_HOSTS', default='').split(',')

# Database - PostgreSQL for production
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': config('PGDATABASE'),
        'USER': config('PGUSER'),
        'PASSWORD': config('PGPASSWORD'),
        'HOST': config('PGHOST'),
        'PORT': config('PGPORT', default='5432'),
    }
}

# Security settings
SECURE_SSL_REDIRECT = True
SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True
SECURE_BROWSER_XSS_FILTER = True
SECURE_CONTENT_TYPE_NOSNIFF = True

# CORS settings for production
CORS_ALLOWED_ORIGINS = config('CORS_ALLOWED_ORIGINS', default='').split(',')

# Static files
STATIC_ROOT = BASE_DIR / 'staticfiles'
STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'
\`\`\`

6. **Deploy to Railway**:
   - Go to [railway.app](https://railway.app)
   - Click "New Project" → "Deploy from GitHub repo"
   - Select your repository
   - Set root directory to `backend`
   - Add a PostgreSQL database
   - Configure environment variables (see below)

7. **Set Railway Environment Variables**:
\`\`\`
DJANGO_SETTINGS_MODULE=mediwide.production_settings
SECRET_KEY=your-secret-key-here
ALLOWED_HOSTS=your-app.railway.app
CORS_ALLOWED_ORIGINS=https://your-vercel-app.vercel.app
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USE_TLS=True
EMAIL_HOST_USER=your-email@gmail.com
EMAIL_HOST_PASSWORD=your-app-password
ADMIN_EMAIL=admin@mediwide.com
\`\`\`

Railway will automatically provide PostgreSQL variables: `PGDATABASE`, `PGUSER`, `PGPASSWORD`, `PGHOST`, `PGPORT`

8. **Note your backend URL**: e.g., `https://your-app.railway.app`

---

### Option B: Deploy to Render

1. **Create a Render account** at [render.com](https://render.com)

2. **Create a new Web Service**:
   - Connect your GitHub repository
   - Set root directory to `backend`
   - Build Command: `pip install -r requirements.txt && python manage.py migrate`
   - Start Command: `gunicorn mediwide.wsgi`

3. **Add PostgreSQL database** from Render dashboard

4. **Configure environment variables** (same as Railway above)

---

### Option C: Other Options

- **PythonAnywhere**: Good for beginners, free tier available
- **DigitalOcean App Platform**: More control, scalable
- **AWS Elastic Beanstalk**: Enterprise-grade, more complex
- **Heroku**: Simple but paid plans only

---

## Part 2: Deploy Next.js Frontend to Vercel

### Using Vercel Dashboard (Easiest)

1. **Push your code to GitHub** (if not already done)

2. **Go to [vercel.com](https://vercel.com)** and sign in

3. **Click "Add New Project"**

4. **Import your GitHub repository**

5. **Configure the project**:
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `./` (leave as root)
   - Build Command: `next build` (default)
   - Output Directory: `.next` (default)

6. **Add Environment Variable**:
   - Key: `NEXT_PUBLIC_API_URL`
   - Value: `https://your-backend-url.railway.app` (your Django backend URL)

7. **Click "Deploy"**

8. **Update Django CORS settings**:
   - Go back to your Django backend (Railway/Render)
   - Update `CORS_ALLOWED_ORIGINS` environment variable
   - Add your Vercel URL: `https://your-app.vercel.app`

### Using Vercel CLI

1. **Install Vercel CLI**:
\`\`\`bash
npm install -g vercel
\`\`\`

2. **Login to Vercel**:
\`\`\`bash
vercel login
\`\`\`

3. **Deploy**:
\`\`\`bash
vercel
\`\`\`

4. **Set environment variable**:
\`\`\`bash
vercel env add NEXT_PUBLIC_API_URL
\`\`\`
Enter your Django backend URL when prompted.

5. **Deploy to production**:
\`\`\`bash
vercel --prod
\`\`\`

---

## Part 3: Post-Deployment Configuration

### 1. Update Django CORS Settings

In your Django backend environment variables, update:
\`\`\`
CORS_ALLOWED_ORIGINS=https://your-vercel-app.vercel.app,https://your-custom-domain.com
\`\`\`

### 2. Configure Email Settings

For production email notifications, use a proper email service:

**Gmail** (for testing):
- Enable 2-factor authentication
- Generate an App Password
- Use in `EMAIL_HOST_PASSWORD`

**SendGrid** (recommended for production):
\`\`\`
EMAIL_BACKEND=django.core.mail.backends.smtp.EmailBackend
EMAIL_HOST=smtp.sendgrid.net
EMAIL_PORT=587
EMAIL_USE_TLS=True
EMAIL_HOST_USER=apikey
EMAIL_HOST_PASSWORD=your-sendgrid-api-key
\`\`\`

**AWS SES**, **Mailgun**, or **Postmark** are also good options.

### 3. Set Up Custom Domain (Optional)

**For Vercel (Frontend)**:
- Go to Project Settings → Domains
- Add your custom domain
- Follow DNS configuration instructions

**For Railway/Render (Backend)**:
- Go to Settings → Custom Domain
- Add your API subdomain (e.g., `api.mediwide.com`)
- Update DNS records

### 4. Update Environment Variables

After setting up custom domains, update:

**Vercel**:
\`\`\`
NEXT_PUBLIC_API_URL=https://api.mediwide.com
\`\`\`

**Django Backend**:
\`\`\`
ALLOWED_HOSTS=api.mediwide.com
CORS_ALLOWED_ORIGINS=https://mediwide.com,https://www.mediwide.com
\`\`\`

---

## Part 4: Testing Your Deployment

1. **Test the backend API**:
\`\`\`bash
curl -X POST https://your-backend-url.railway.app/api/enquiries/ \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "1234567890",
    "subject": "Test",
    "message": "Testing deployment"
  }'
\`\`\`

2. **Test the frontend**:
   - Visit your Vercel URL
   - Fill out the contact form
   - Check for success message
   - Verify email notifications

3. **Check Django admin**:
   - Visit `https://your-backend-url.railway.app/admin/`
   - Login with superuser credentials
   - Verify enquiry was saved

---

## Part 5: Create Django Superuser

After deployment, create an admin user:

**Railway**:
\`\`\`bash
railway run python manage.py createsuperuser
\`\`\`

**Render**:
- Go to Shell tab in dashboard
- Run: `python manage.py createsuperuser`

---

## Troubleshooting

### Frontend can't connect to backend
- Check `NEXT_PUBLIC_API_URL` in Vercel environment variables
- Verify Django backend is running
- Check CORS settings in Django

### Email notifications not working
- Verify email credentials in backend environment variables
- Check email service allows SMTP access
- Look at Django logs for error messages

### Database errors
- Ensure migrations ran: `python manage.py migrate`
- Check database connection settings
- Verify PostgreSQL is running

### Static files not loading
- Run `python manage.py collectstatic`
- Check `STATIC_ROOT` and `STATICFILES_STORAGE` settings

---

## Environment Variables Checklist

### Vercel (Frontend)
- ✅ `NEXT_PUBLIC_API_URL`

### Django Backend (Railway/Render)
- ✅ `DJANGO_SETTINGS_MODULE`
- ✅ `SECRET_KEY`
- ✅ `ALLOWED_HOSTS`
- ✅ `CORS_ALLOWED_ORIGINS`
- ✅ `EMAIL_HOST`
- ✅ `EMAIL_PORT`
- ✅ `EMAIL_USE_TLS`
- ✅ `EMAIL_HOST_USER`
- ✅ `EMAIL_HOST_PASSWORD`
- ✅ `ADMIN_EMAIL`
- ✅ Database variables (auto-provided by Railway/Render)

---

## Quick Deployment Checklist

- [ ] Push code to GitHub
- [ ] Deploy Django backend to Railway/Render
- [ ] Add PostgreSQL database
- [ ] Configure backend environment variables
- [ ] Run migrations
- [ ] Create Django superuser
- [ ] Note backend URL
- [ ] Deploy Next.js to Vercel
- [ ] Add `NEXT_PUBLIC_API_URL` to Vercel
- [ ] Update Django CORS with Vercel URL
- [ ] Test contact form submission
- [ ] Verify email notifications
- [ ] Check Django admin panel

---

## Cost Estimates

### Free Tier Options
- **Vercel**: Free for personal projects
- **Railway**: $5/month credit (enough for small apps)
- **Render**: Free tier available (with limitations)
- **Supabase/Neon**: Free PostgreSQL tier

### Recommended Production Setup
- **Vercel Pro**: $20/month (if needed)
- **Railway**: ~$10-20/month
- **Email Service**: Free tier usually sufficient
- **Total**: ~$10-40/month depending on traffic

---

## Need Help?

- **Vercel Docs**: https://vercel.com/docs
- **Railway Docs**: https://docs.railway.app
- **Render Docs**: https://render.com/docs
- **Django Deployment**: https://docs.djangoproject.com/en/stable/howto/deployment/

For issues specific to this project, check the TROUBLESHOOTING.md file.
