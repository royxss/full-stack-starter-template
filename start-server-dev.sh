#!/bin/bash
#export DJANGO_SETTINGS_MODULE="backend.settings.development"
cd backend/
pytest -v
python manage.py runserver