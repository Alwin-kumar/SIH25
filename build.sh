#!/bin/bash

# Build script for Netlify deployment
echo "🚀 Starting build process..."
echo "📝 Using standard Next.js webpack bundler (Turbopack removed)"

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Run linting
echo "🔍 Running linting..."
npm run lint

# Build the application
echo "🏗️ Building application..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build completed successfully!"
    echo "📊 Build output:"
    ls -la .next/
else
    echo "❌ Build failed!"
    exit 1
fi
