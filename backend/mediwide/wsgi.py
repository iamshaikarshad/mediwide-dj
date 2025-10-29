"""
WSGI config for mediwide project.
"""

import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'mediwide.settings')

application = get_wsgi_application()
