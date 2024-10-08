package todos

import (
	"database/sql"
	"errors"
)

type Repository interface {
	List() ([]*Todo, error)
	Create(todo *Todo) error
	Update(todo *Todo) error
	Delete(id int) error
}

type todoRepository struct {
	db *sql.DB
}

func NewTodoRepo(db *sql.DB) Repository {
	return &todoRepository{db: db}
}

func (r *todoRepository) Create(todo *Todo) error {
	_, err := r.db.Exec("INSERT INTO todos (title, completed) VALUES (?, ?)", todo.Title, todo.Completed)
	if err != nil {
		return err
	}
	return nil
}

func (r *todoRepository) List() ([]*Todo, error) {
	rows, err := r.db.Query("SELECT * FROM todos")
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	todos := []*Todo{}
	for rows.Next() {
		t := &Todo{}
		err := rows.Scan(&t.Id, &t.Title, &t.Completed, &t.Created_at, &t.Updated_at)
		if errors.Is(err, sql.ErrNoRows) {
			return nil, nil
		}
		todos = append(todos, t)
	}
	return todos, nil
}

func (r *todoRepository) Update(todo *Todo) error {
	_, err := r.db.Exec("UPDATE todos SET title = ?, completed = ? WHERE id = ?", todo.Title, todo.Completed, todo.Id)
	if err != nil {
		return err
	}
	return nil
}

func (r *todoRepository) Delete(id int) error {
	_, err := r.db.Exec("DELETE FROM todos WHERE id = ?", id)
	if err != nil {
		return err
	}
	return nil
}
