#!/bin/bash

DB_NAME="todo-app-gin.db" 

# Tabloları oluşturmak için SQL dosyasını çalıştır
sqlite3 "$DB_NAME" < ../internal/db/migrations/create_tables.sql

echo "Migration completed!"
