package todos

type TodoService interface {
	Create(todo *Todo) error
	FindAll() ([]*Todo, error)
	Delete(id int) error
	Update(todo *Todo) error
}

type todoService struct {
	repo Repository
}

func NewTodoService(repo Repository) TodoService {
	return &todoService{repo: repo}
}

func (s *todoService) Create(todo *Todo) error {
	return s.repo.Create(todo)
}

func (s *todoService) FindAll() ([]*Todo, error) {
	return s.repo.List()
}

func (s *todoService) Delete(id int) error {
	return s.repo.Delete(id)
}

func (s *todoService) Update(todo *Todo) error {
	return s.repo.Update(todo)
}
