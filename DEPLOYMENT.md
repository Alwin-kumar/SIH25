# Netlify Deployment Guide

This guide explains how to deploy your Next.js career guidance application to Netlify.

## Prerequisites

1. **Netlify Account**: Sign up at [netlify.com](https://netlify.com)
2. **Git Repository**: Push your code to GitHub, GitLab, or Bitbucket
3. **Environment Variables**: Set up your environment variables in Netlify

## Environment Variables Required

Set these environment variables in your Netlify dashboard:

1. **GEMINI_API_KEY**: Your Google Gemini API key for AI chat functionality
   - Get it from [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Format: `AIzaSyD...` (your actual API key)

2. **DATABASE_URL**: Your database connection string (if using Prisma)
   - Example: `postgresql://username:password@localhost:5432/career_db`

3. **NODE_ENV**: Set to `production` for production builds

## Deployment Steps

### Method 1: Git Integration (Recommended)

1. **Connect Repository**
   - Go to [Netlify Dashboard](https://app.netlify.com/)
   - Click "Add new site" → "Import an existing project"
   - Connect your Git provider (GitHub, GitLab, Bitbucket)
   - Select your repository

2. **Build Settings**
   - **Branch**: `main` or your main branch
   - **Build command**: `npm run build:netlify` (or `npm run build`)
   - **Publish directory**: `.next`

3. **Environment Variables**
   - Go to Site settings → Environment variables
   - Add all required environment variables

4. **Deploy**
   - Click "Deploy site"
   - Netlify will automatically build and deploy your site

### Method 2: Manual Deploy

1. **Build Locally**
   ```bash
   npm run build:netlify
   ```

2. **Deploy via CLI**
   ```bash
   npm install -g netlify-cli
   netlify login
   netlify deploy --prod --dir=.next
   ```

## Configuration Files

The following files are already configured for Netlify:

- **`netlify.toml`**: Main configuration file with build settings, redirects, and headers
- **`public/_redirects`**: Backup redirects file for SPA routing
- **`build.sh`**: Build script with linting and error checking
- **`package.json`**: Updated with deployment scripts
- **Note**: Using standard Next.js webpack bundler (Turbopack removed for better compatibility)

## Features Configured

✅ **Static Site Generation**: Next.js pages are pre-rendered
✅ **API Routes**: Serverless functions for `/api/*` endpoints
✅ **SPA Routing**: Client-side routing support for `/dashboard/*` pages
✅ **Security Headers**: XSS protection, content type options, frame options
✅ **CORS**: API routes configured for cross-origin requests
✅ **Image Optimization**: Automatic image compression and optimization
✅ **CSS/JS Minification**: Assets are automatically minified
✅ **Environment Variables**: Support for production and preview environments

## Troubleshooting

### Build Failures

1. **Check Build Logs**: Go to Netlify dashboard → Deploys → View build log
2. **Environment Variables**: Ensure all required variables are set
3. **Node Version**: Make sure Node 18+ is specified in `netlify.toml`
4. **Dependencies**: Run `npm ci` to ensure clean dependency installation

### API Routes Not Working

1. Check if API routes are in `/api/*` format
2. Ensure serverless functions are enabled
3. Check CORS headers in `netlify.toml`
4. Verify environment variables are accessible in functions

### Routing Issues

1. Check `_redirects` file in `public/` directory
2. Ensure SPA routing is configured in `netlify.toml`
3. Verify all routes are properly defined in Next.js

## Performance Optimizations

- **Image Optimization**: Images are automatically optimized
- **CSS/JS Bundling**: Assets are bundled and minified
- **Caching**: Static assets are cached for better performance
- **CDN**: Global content delivery network for faster loading

## Post-Deployment

1. **Test Your Site**: Visit your Netlify URL and test all features
2. **Check API Endpoints**: Test `/api/chat` and other API routes
3. **Verify Environment Variables**: Ensure AI chat and database connections work
4. **Set Up Custom Domain** (optional): Configure your custom domain in Netlify

## Support

If you encounter issues:

1. Check the [Netlify Documentation](https://docs.netlify.com/)
2. Review build logs in your Netlify dashboard
3. Test locally with `npm run build` first
4. Ensure all environment variables are properly set

## Monitoring

- **Build Status**: Monitor in Netlify dashboard
- **Function Logs**: Check serverless function logs
- **Analytics**: Use Netlify Analytics for performance monitoring
- **Error Tracking**: Set up error monitoring with services like Sentry

Your site should now be successfully deployed to Netlify! 🎉
