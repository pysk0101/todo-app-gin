package todos

import (
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

type TodoHandler struct {
	service TodoService
}

func NewTodoHandler(service TodoService) *TodoHandler {
	return &TodoHandler{service: service}
}

func (h *TodoHandler) RegisterRoutes(r *gin.Engine) {
	r.GET("/todos", h.FindAll)
	r.POST("/todos", h.Create)
	r.PUT("/todos", h.Update)
	r.DELETE("/todos/:id", h.Delete)
}

func (h *TodoHandler) FindAll(c *gin.Context) {
	todos, err := h.service.FindAll()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, todos)
}

func (h *TodoHandler) Create(c *gin.Context) {
	var todo Todo
	if err := c.BindJSON(&todo); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	if err := h.service.Create(&todo); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.Status(200)
}

func (h *TodoHandler) Update(c *gin.Context) {
	var todo Todo
	if err := c.BindJSON(&todo); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	if err := h.service.Update(&todo); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.Status(200)
}

func (h *TodoHandler) Delete(c *gin.Context) {
	id := c.Param("id")
	idInt, err := strconv.Atoi(id)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid ID"})
		return
	}
	if err := h.service.Delete(idInt); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.Status(200)
}
