from .base import *

DEBUG = False

SECRET_KEY = os.getenv("SECRET_KEY")

ALLOWED_HOSTS = ["www.mysite.com"]

STATIC_ROOT = BASE_DIR / 'static'