#!/bin/bash

echo "Starting MediWide Development Environment"
echo "========================================="
echo ""

# Function to cleanup background processes
cleanup() {
    echo ""
    echo "Shutting down servers..."
    kill $DJANGO_PID $NEXTJS_PID 2>/dev/null
    exit
}

trap cleanup EXIT INT TERM

# Start Django backend
echo "Starting Django backend..."
cd backend
source venv/bin/activate 2>/dev/null || python3 -m venv venv && source venv/bin/activate
pip install -q -r requirements.txt
python manage.py migrate --no-input
python manage.py runserver &
DJANGO_PID=$!
cd ..

# Wait for Django to start
echo "Waiting for Django to start..."
sleep 3

# Start Next.js frontend
echo "Starting Next.js frontend..."
npm install
npm run dev &
NEXTJS_PID=$!

echo ""
echo "✓ Django backend running on http://localhost:8000"
echo "✓ Next.js frontend running on http://localhost:3000"
echo "✓ Admin panel: http://localhost:8000/admin"
echo ""
echo "Press Ctrl+C to stop both servers"
echo ""

# Wait for both processes
wait
