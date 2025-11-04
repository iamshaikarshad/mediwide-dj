#!/bin/bash

# Deployment script for production
echo "Starting deployment..."

# Install dependencies
echo "Installing dependencies..."
pip install -r requirements.txt

# Run migrations
echo "Running database migrations..."
python manage.py migrate --noinput

# Collect static files
echo "Collecting static files..."
python manage.py collectstatic --noinput

# Create superuser if needed (optional)
# python manage.py createsuperuser --noinput

echo "Deployment complete!"
