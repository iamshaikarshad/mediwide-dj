# Quick Vercel Deployment Guide

This is a simplified guide to deploy the MediWide website to Vercel.

## Prerequisites

- GitHub account
- Vercel account (free at [vercel.com](https://vercel.com))
- Django backend deployed (see DEPLOYMENT.md for backend options)

## Step-by-Step Deployment

### 1. Push to GitHub

If you haven't already, push your code to GitHub:

\`\`\`bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/mediwide.git
git push -u origin main
\`\`\`

### 2. Deploy to Vercel

**Option A: Using Vercel Dashboard (Easiest)**

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"Add New Project"**
3. Click **"Import Git Repository"**
4. Select your MediWide repository
5. Configure project:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: Leave default
   - **Output Directory**: Leave default
6. Click **"Environment Variables"**
7. Add the following:
   - **Name**: `NEXT_PUBLIC_API_URL`
   - **Value**: `https://your-backend-url.railway.app` (your Django backend URL)
8. Click **"Deploy"**
9. Wait 2-3 minutes for deployment to complete
10. Your site is live! 🎉

**Option B: Using Vercel CLI**

\`\`\`bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Select your account
# - Link to existing project? No
# - Project name? mediwide (or your choice)
# - Directory? ./ (press Enter)
# - Override settings? No

# Add environment variable
vercel env add NEXT_PUBLIC_API_URL production

# Enter your Django backend URL when prompted
# Example: https://your-backend.railway.app

# Deploy to production
vercel --prod
\`\`\`

### 3. Update Django Backend CORS

After deploying to Vercel, you'll get a URL like: `https://mediwide-xyz.vercel.app`

Update your Django backend environment variables:

**On Railway:**
1. Go to your Railway project
2. Click on your backend service
3. Go to **Variables** tab
4. Update `CORS_ALLOWED_ORIGINS`:
   \`\`\`
   https://mediwide-xyz.vercel.app
   \`\`\`
5. Click **Save**

**On Render:**
1. Go to your Render dashboard
2. Select your web service
3. Go to **Environment** tab
4. Update `CORS_ALLOWED_ORIGINS`
5. Click **Save Changes**

### 4. Test Your Deployment

1. Visit your Vercel URL: `https://mediwide-xyz.vercel.app`
2. Scroll to the contact form
3. Fill out and submit the form
4. You should see a success message
5. Check your email for the admin notification

### 5. Add Custom Domain (Optional)

**In Vercel:**
1. Go to your project dashboard
2. Click **Settings** → **Domains**
3. Add your domain (e.g., `mediwide.com`)
4. Follow the DNS configuration instructions
5. Wait for DNS propagation (5-60 minutes)

**Update Django Backend:**
After adding custom domain, update `CORS_ALLOWED_ORIGINS`:
\`\`\`
https://mediwide.com,https://www.mediwide.com
\`\`\`

## Troubleshooting

### Form submission fails
- Check browser console for errors
- Verify `NEXT_PUBLIC_API_URL` is set correctly in Vercel
- Ensure Django backend is running
- Check CORS settings in Django

### "Unable to connect to backend" error
- Verify your Django backend URL is correct
- Check if backend is deployed and running
- Test backend directly: `curl https://your-backend.railway.app/api/enquiries/`

### Environment variable not working
- Environment variables must start with `NEXT_PUBLIC_` to be accessible in the browser
- Redeploy after adding environment variables
- Check Vercel dashboard → Settings → Environment Variables

## Redeploying

Vercel automatically redeploys when you push to GitHub:

\`\`\`bash
git add .
git commit -m "Update website"
git push
\`\`\`

Or manually redeploy from Vercel dashboard:
1. Go to Deployments tab
2. Click the three dots on latest deployment
3. Click **Redeploy**

## Cost

- **Vercel**: Free for personal projects
- **Bandwidth**: 100GB/month on free tier
- **Builds**: Unlimited on free tier

## Next Steps

- [ ] Set up custom domain
- [ ] Configure email service for production
- [ ] Set up monitoring and analytics
- [ ] Add SSL certificate (automatic with Vercel)
- [ ] Test all features in production

## Need Help?

- **Vercel Documentation**: https://vercel.com/docs
- **Vercel Support**: https://vercel.com/support
- **Backend Deployment**: See DEPLOYMENT.md
\`\`\`
