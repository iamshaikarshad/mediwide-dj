# Deployment Checklist

Use this checklist to ensure a smooth deployment of the MediWide website.

## Pre-Deployment

### Code Preparation
- [ ] All code committed to Git
- [ ] Code pushed to GitHub
- [ ] No sensitive data in code (API keys, passwords)
- [ ] Environment variables documented

### Backend Preparation
- [ ] Django backend code ready
- [ ] Requirements.txt updated
- [ ] Production settings configured
- [ ] Database migrations created
- [ ] Static files configuration set

## Backend Deployment (Railway/Render)

### Railway Deployment
- [ ] Railway account created
- [ ] New project created
- [ ] GitHub repository connected
- [ ] PostgreSQL database added
- [ ] Environment variables configured:
  - [ ] `DJANGO_SETTINGS_MODULE=mediwide.production_settings`
  - [ ] `SECRET_KEY` (generate a strong key)
  - [ ] `ALLOWED_HOSTS` (your Railway domain)
  - [ ] `CORS_ALLOWED_ORIGINS` (will update after Vercel deployment)
  - [ ] `EMAIL_HOST`
  - [ ] `EMAIL_PORT`
  - [ ] `EMAIL_USE_TLS`
  - [ ] `EMAIL_HOST_USER`
  - [ ] `EMAIL_HOST_PASSWORD`
  - [ ] `ADMIN_EMAIL`
- [ ] Deployment successful
- [ ] Backend URL noted: `_______________________`

### Post-Backend Deployment
- [ ] Migrations ran successfully
- [ ] Django superuser created
- [ ] Admin panel accessible at `/admin/`
- [ ] API endpoint tested: `/api/enquiries/`

## Frontend Deployment (Vercel)

### Vercel Setup
- [ ] Vercel account created
- [ ] New project created
- [ ] GitHub repository imported
- [ ] Framework detected as Next.js
- [ ] Environment variable added:
  - [ ] `NEXT_PUBLIC_API_URL` = (your backend URL)
- [ ] Deployment initiated
- [ ] Deployment successful
- [ ] Frontend URL noted: `_______________________`

### Post-Frontend Deployment
- [ ] Website loads correctly
- [ ] All pages accessible
- [ ] Images loading properly
- [ ] Contact form visible

## Integration Testing

### Backend Configuration Update
- [ ] Updated `CORS_ALLOWED_ORIGINS` in backend with Vercel URL
- [ ] Backend redeployed with new CORS settings

### Functionality Testing
- [ ] Contact form submission works
- [ ] Success message displays
- [ ] Admin email notification received
- [ ] Customer auto-response email received
- [ ] Enquiry saved in Django admin panel
- [ ] All form fields validated correctly
- [ ] Error handling works properly

## Production Configuration

### Email Service
- [ ] Production email service configured (SendGrid/AWS SES/etc.)
- [ ] Email credentials updated in backend
- [ ] Test emails sent successfully
- [ ] Email templates reviewed

### Security
- [ ] HTTPS enabled (automatic on Vercel)
- [ ] Django `DEBUG=False` in production
- [ ] Strong `SECRET_KEY` generated
- [ ] CORS properly configured
- [ ] SQL injection protection verified
- [ ] XSS protection enabled

### Performance
- [ ] Static files served correctly
- [ ] Images optimized
- [ ] Page load time acceptable (<3 seconds)
- [ ] Mobile responsiveness verified

## Optional Enhancements

### Custom Domain
- [ ] Domain purchased
- [ ] Domain added to Vercel
- [ ] DNS records configured
- [ ] SSL certificate issued
- [ ] Backend subdomain configured (api.yourdomain.com)
- [ ] CORS updated with custom domain

### Monitoring
- [ ] Error tracking set up (Sentry)
- [ ] Analytics configured (Vercel Analytics)
- [ ] Uptime monitoring enabled
- [ ] Performance monitoring active

### Backup
- [ ] Database backup configured
- [ ] Backup schedule set
- [ ] Backup restoration tested

## Post-Deployment

### Documentation
- [ ] Deployment process documented
- [ ] Environment variables documented
- [ ] Admin credentials stored securely
- [ ] Team members notified

### Testing
- [ ] Full user journey tested
- [ ] Cross-browser testing completed
- [ ] Mobile device testing completed
- [ ] Form submission from multiple devices tested

### Maintenance
- [ ] Update schedule planned
- [ ] Monitoring alerts configured
- [ ] Support process established
- [ ] Backup verification scheduled

## Troubleshooting Reference

### Common Issues

**Form submission fails:**
- Check `NEXT_PUBLIC_API_URL` in Vercel
- Verify CORS settings in Django
- Check browser console for errors
- Test backend API directly

**Email not sending:**
- Verify email credentials
- Check email service status
- Review Django logs
- Test SMTP connection

**Database errors:**
- Verify migrations ran
- Check database connection
- Review PostgreSQL logs
- Verify environment variables

**Static files not loading:**
- Run `collectstatic` command
- Check WhiteNoise configuration
- Verify `STATIC_ROOT` setting

## Success Criteria

- [ ] Website accessible at production URL
- [ ] Contact form fully functional
- [ ] Emails sending correctly
- [ ] Admin panel accessible
- [ ] No console errors
- [ ] Mobile responsive
- [ ] Fast page load times
- [ ] All features working as expected

## Deployment Complete! 🎉

**Frontend URL:** `_______________________`  
**Backend URL:** `_______________________`  
**Admin Panel:** `_______________________/admin/`  
**Deployment Date:** `_______________________`

---

**Notes:**
_Add any deployment-specific notes or issues encountered here_
\`\`\`
