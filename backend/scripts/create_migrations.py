#!/usr/bin/env python
"""
Script to create and run migrations for the enquiries app
"""
import os
import sys
import django

# Add the parent directory to the path
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

# Setup Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'mediwide.settings')
django.setup()

from django.core.management import call_command

if __name__ == '__main__':
    print("Creating migrations...")
    call_command('makemigrations', 'enquiries')
    
    print("\nRunning migrations...")
    call_command('migrate')
    
    print("\nMigrations completed successfully!")
