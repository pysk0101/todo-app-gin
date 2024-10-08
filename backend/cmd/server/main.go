package main

import (
	"fmt"
	"os"

	"github.com/gin-contrib/cors"
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

	todoRepo := todos.NewTodoRepo(database)
	todoService := todos.NewTodoService(todoRepo)
	todoHandler := todos.NewTodoHandler(todoService)

	r := gin.Default()
	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:3000"},
		AllowMethods:     []string{"GET", "POST", "DELETE", "PUT"},
		AllowHeaders:     []string{"Content-Type"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		MaxAge:           86400,
	}))
	api.SetupRoutes(r, todoHandler)
	r.GET("/", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "Hello, World!",
		})
	})

	r.Run(":8080")
}
