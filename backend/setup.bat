@echo off
echo Setting up MediWide Django Backend...

REM Create virtual environment if it doesn't exist
if not exist "venv" (
    echo Creating virtual environment...
    python -m venv venv
)

REM Activate virtual environment
echo Activating virtual environment...
call venv\Scripts\activate

REM Install dependencies
echo Installing dependencies...
pip install django djangorestframework django-cors-headers

REM Run migrations
echo Running database migrations...
python manage.py makemigrations
python manage.py migrate

echo.
echo Setup complete! Would you like to create a superuser for the admin panel?
echo Run: python manage.py createsuperuser
echo.
echo To start the server, run: python manage.py runserver
pause
