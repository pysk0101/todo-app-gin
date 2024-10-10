package api

import (
	"github.com/gin-gonic/gin"
	"github.com/pysk0101/todo-app-gin/backend/pkg/todos"
)

func SetupRoutes(r *gin.Engine, todoHandler *todos.TodoHandler) {
	todoGroup := r.Group("/todos")
	{
		todoGroup.GET("", todoHandler.FindAll)       // /todos
		todoGroup.POST("", todoHandler.Create)       // /todos
		todoGroup.PUT("", todoHandler.Update)        // /todos/:id
		todoGroup.DELETE("/:id", todoHandler.Delete) // /todos/:id
	}
}
