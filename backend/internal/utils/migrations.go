package utils

import (
	"fmt"
	"log"
	"os"

	"github.com/pysk0101/todo-app-gin/backend/internal/db"
)

func RunMigrations() {
	// Migration dosyasını oku
	migrationFile, err := os.ReadFile("../../internal/db/migrations/create_tables.sql")
	if err != nil {
		log.Fatalf("Error reading migration file: %v", err)
	}

	// Veritabanında migration'ı çalıştır
	if _, err := db.Database.Exec(string(migrationFile)); err != nil {
		log.Fatalf("Error executing migration: %v", err)
	}

	fmt.Println("Migrations completed successfully")
}
