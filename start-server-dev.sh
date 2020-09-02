#!/bin/bash
#export DJANGO_SETTINGS_MODULE="backend.settings.development"
cd backend/
pytest -v
pytest -v > unit-test.log
if grep -q failed unit-test.log
then
    echo "Test cases have failed. Server will not start..."
else
    python manage.py runserver
fi