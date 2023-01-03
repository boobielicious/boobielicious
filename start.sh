#!/bin/sh

# Run migrations
npx prisma migrate deploy

# Start application
npm start