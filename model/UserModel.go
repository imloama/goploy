package model

import (
	"errors"

	"golang.org/x/crypto/bcrypt"
)

// User mysql table user
type User struct {
	ID         uint32 `json:"id"`
	Account    string `json:"account"`
	Password   string `json:"password"`
	Name       string `json:"name"`
	Email      string `json:"email"`
	Role       string `json:"role"`
	State      uint8  `json:"state"`
	CreateTime int64  `json:"createTime"`
	UpdateTime int64  `json:"updateTime"`
}

// Users many user
type Users []User

// QueryRow add user information to u *User
func (u *User) QueryRow() error {
	db := NewDB()
	err := db.QueryRow("SELECT account, name, role FROM user WHERE id = ? AND state = ?", u.ID, 1).Scan(&u.Account, &u.Name, &u.Role)
	if err != nil {
		return errors.New("数据查询失败")
	}
	return nil
}

// Query user row
func (u *Users) Query(pagination *Pagination) error {
	db := NewDB()
	rows, err := db.Query(
		"SELECT id, account, name, email, role, create_time, update_time FROM user ORDER BY id DESC LIMIT ?, ?",
		(pagination.Page-1)*pagination.Rows,
		pagination.Rows)
	if err != nil {
		return err
	}
	for rows.Next() {
		var user User

		if err := rows.Scan(&user.ID, &user.Account, &user.Name, &user.Email, &user.Role, &user.CreateTime, &user.UpdateTime); err != nil {
			return err
		}
		*u = append(*u, user)
	}
	rows, err = db.Query(`SELECT COUNT(*) AS count FROM user`)
	if err != nil {
		return err
	}
	if rows.Next() {
		rows.Scan(&pagination.Total)
	}
	return nil
}

// AddRow add one row to table user and add id to u.ID
func (u *User) AddRow() error {
	db := NewDB()
	password := []byte(u.Password)

	// Hashing the password with the default cost of 10
	hashedPassword, err := bcrypt.GenerateFromPassword(password, bcrypt.DefaultCost)
	if err != nil {
		return err
	}
	result, err := db.Exec(
		"INSERT INTO user (account, password, name, email, role, create_time, update_time) VALUES (?, ?, ?, ?, ?, ?, ?)",
		u.Account,
		string(hashedPassword),
		u.Name,
		u.Email,
		u.Role,
		u.CreateTime,
		u.UpdateTime,
	)
	id, err := result.LastInsertId()
	u.ID = uint32(id)
	return err
}

// Vaildate if user exists
func (u *User) Vaildate() error {
	var hashPassword string
	db := NewDB()
	err := db.QueryRow("SELECT id, password FROM user WHERE account = ?", u.Account).Scan(&u.ID, &hashPassword)
	if err != nil {
		return err
	}

	err = bcrypt.CompareHashAndPassword([]byte(hashPassword), []byte(u.Password))
	if err != nil {
		return errors.New("密码错误")
	}
	return nil
}

// UpdatePassword return err
func (u *User) UpdatePassword(newPassword string) error {
	password := []byte(newPassword)
	// Hashing the password with the default cost of 10
	hashedPassword, err := bcrypt.GenerateFromPassword(password, bcrypt.DefaultCost)
	if err != nil {
		return err
	}
	db := NewDB()
	_, err = db.Exec(
		"UPDATE user SET password = ? where id = ?",
		string(hashedPassword),
		u.ID,
	)
	return err
}
