#!/bin/bash

echo "Starting MediWide Django Backend..."
echo "=================================="

# Check if virtual environment exists
if [ ! -d "venv" ]; then
    echo "Creating virtual environment..."
    python3 -m venv venv
fi

# Activate virtual environment
source venv/bin/activate

# Install dependencies
echo "Installing dependencies..."
pip install -q -r requirements.txt

# Run migrations
echo "Running migrations..."
python manage.py migrate

# Create superuser prompt
echo ""
echo "Do you want to create a superuser? (y/n)"
read -r response
if [[ "$response" =~ ^([yY][eE][sS]|[yY])$ ]]; then
    python manage.py createsuperuser
fi

# Start server
echo ""
echo "Starting Django server on http://localhost:8000"
echo "Admin panel: http://localhost:8000/admin"
echo "API endpoint: http://localhost:8000/api/enquiries/"
echo ""
python manage.py runserver
