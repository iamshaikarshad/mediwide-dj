#!/bin/bash

echo "Setting up MediWide Django Backend..."

# Create virtual environment if it doesn't exist
if [ ! -d "venv" ]; then
    echo "Creating virtual environment..."
    python -m venv venv
fi

# Activate virtual environment
echo "Activating virtual environment..."
source venv/bin/activate  # For Linux/Mac
# For Windows use: venv\Scripts\activate

# Install dependencies
echo "Installing dependencies..."
pip install django djangorestframework django-cors-headers

# Run migrations
echo "Running database migrations..."
python manage.py makemigrations
python manage.py migrate

# Create superuser prompt
echo ""
echo "Setup complete! Would you like to create a superuser for the admin panel?"
echo "Run: python manage.py createsuperuser"
echo ""
echo "To start the server, run: python manage.py runserver"
