package todos

import "time"

type Todo struct {
	Id         int       `json:"id"`
	Title      string    `json:"title"`
	Completed  bool      `json:"completed"`
	Created_at time.Time `json:"created_at"`
	Updated_at time.Time `json:"updated_at"`
}
