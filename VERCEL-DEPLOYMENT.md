# Vercel Deployment Guide

This guide explains how to deploy your Next.js career guidance application to Vercel.

## Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **Git Repository**: Push your code to GitHub, GitLab, or Bitbucket
3. **Environment Variables**: Set up your environment variables in Vercel

## Environment Variables Required

Set these environment variables in your Vercel dashboard:

1. **GEMINI_API_KEY**: Your Google Gemini API key for AI chat functionality
   - Get it from [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Format: `AIzaSyD...` (your actual API key)

2. **DATABASE_URL** (Optional): Your database connection string (if using Prisma)
   - Example: `postgresql://username:password@localhost:5432/career_db`

3. **NODE_ENV**: Set to `production` for production builds

## Deployment Steps

### Method 1: Vercel Dashboard (Recommended)

1. **Connect Repository**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "Add New..." → "Project"
   - Connect your Git provider (GitHub, GitLab, Bitbucket)
   - Select your repository

2. **Configure Project**
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`

3. **Environment Variables**
   - Go to Project Settings → Environment Variables
   - Add all required environment variables
   - Make sure `GEMINI_API_KEY` is set

4. **Deploy**
   - Click "Deploy"
   - Vercel will automatically build and deploy your site

### Method 2: Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel --prod
   ```

## Configuration Files

The following files are configured for Vercel:

- **`vercel.json`**: Main configuration file with build settings, rewrites, and headers
- **`next.config.mjs`**: Next.js configuration
- **`.env.example`**: Template for environment variables

## Features Configured

✅ **Serverless Functions**: API routes work as serverless functions
✅ **Static Site Generation**: Next.js pages are pre-rendered
✅ **API Routes**: Serverless functions for `/api/*` endpoints
✅ **Security Headers**: XSS protection, content type options, frame options
✅ **CORS**: API routes configured for cross-origin requests
✅ **Environment Variables**: Support for production environment

## Troubleshooting

### Build Failures

1. **Check Build Logs**: Go to Vercel dashboard → Deployments → View build log
2. **Environment Variables**: Ensure all required variables are set, especially `GEMINI_API_KEY`
3. **Node Version**: Vercel uses Node.js 18 by default, which is compatible
4. **Dependencies**: All dependencies should install correctly

### API Routes Not Working

1. Check if API routes are in `/api/*` format (they are)
2. Ensure serverless functions are enabled (configured in vercel.json)
3. Check CORS headers in `vercel.json`
4. Verify environment variables are accessible in functions

### Common Issues

1. **Missing Environment Variables**: Make sure `GEMINI_API_KEY` is set in Vercel
2. **Build Timeout**: If build takes too long, check for heavy dependencies
3. **Function Timeout**: API routes have a 10-second timeout by default

## Performance Optimizations

- **Image Optimization**: Next.js Image component automatically optimizes images
- **Static Generation**: Pages are pre-rendered for faster loading
- **CDN**: Global content delivery network for faster loading
- **Edge Functions**: API routes run on Vercel's edge network

## Post-Deployment

1. **Test Your Site**: Visit your Vercel URL and test all features
2. **Check API Endpoints**: Test `/api/chat` and other API routes
3. **Verify Environment Variables**: Ensure AI chat functionality works
4. **Set Up Custom Domain** (optional): Configure your custom domain in Vercel

## Monitoring

- **Deployment Status**: Monitor in Vercel dashboard
- **Function Logs**: Check serverless function logs in dashboard
- **Analytics**: Use Vercel Analytics for performance monitoring
- **Error Tracking**: Set up error monitoring with services like Sentry

## Support

If you encounter issues:

1. Check the [Vercel Documentation](https://vercel.com/docs)
2. Review build logs in your Vercel dashboard
3. Test locally with `npm run build` first
4. Ensure all environment variables are properly set

Your site should now be successfully deployed to Vercel! 🎉

## Important Notes

- This project was originally configured for Netlify but has been adapted for Vercel
- The `netlify.toml` file is still present but won't affect Vercel deployment
- API routes work as serverless functions on Vercel
- Environment variables must be set in the Vercel dashboard
