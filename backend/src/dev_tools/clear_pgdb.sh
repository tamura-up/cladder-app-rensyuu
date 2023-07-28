#!/usr/bin/bash

oldpass=$(echo ${PGPASSWORD})
export PGPASSWORD=${DB_PASSWORD}
psql -h${DB_HOST} -U${DB_USERNAME} -d${DB_NAME} -c "drop schema public cascade;"
psql -h${DB_HOST} -U${DB_USERNAME} -d${DB_NAME} -c "create schema public;"
export PGPASSWORD=${oldpass}