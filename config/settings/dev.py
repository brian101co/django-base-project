from .base import *

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-h&())*@&(m+!bf_13_gmczys^qt%n=tj3+19t9wd-cdx_&3oh4'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = []

STATICFILES_DIRS = [
    BASE_DIR / 'static',
]
