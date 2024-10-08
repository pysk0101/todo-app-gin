package main

import (
	"fmt"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"github.com/pysk0101/todo-app-gin/backend/api"
	"github.com/pysk0101/todo-app-gin/backend/internal/db"
	"github.com/pysk0101/todo-app-gin/backend/internal/utils"
	"github.com/pysk0101/todo-app-gin/backend/pkg/todos"
)

func main() {
	if err := godotenv.Load("../../.env.local"); err != nil {
		fmt.Fprintf(os.Stderr, "Error loading .env file: %s\n", err)
		os.Exit(1)
	}

	db.InitDB()
	utils.RunMigrations()
	database := db.GetDB()
	// Repository ve Service oluştur
	todoRepo := todos.NewTodoRepo(database) // database bağlantısını buradan sağlıyoruz
	todoService := todos.NewTodoService(todoRepo)
	todoHandler := todos.NewTodoHandler(todoService)

	r := gin.Default()
	api.SetupRoutes(r, todoHandler)
	r.GET("/", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "Hello, World!",
		})
	})

	// HTTP sunucusunu başlat
	r.Run(":8080")
}
