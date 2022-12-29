import React, { useState } from "react";
import styles from "./style.module.css";
import axios from "axios";
const server = `http://localhost:3001/api`;

function PopupLogin() {
  const onSubmit = (e) => {
    e.preventDefault();
    const password = e.target.elements.password.value;
    const email = e.target.elements.email.value;
    axios
      .post(`${server}/users/login`, { email, password })
      .then((response) => {
        let result = `Bearer ${response.data}`;

        // if (response.data.legth > 0) {
        return axios
          .get(`${server}/users/getusers`, {
            headers: {
              authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiNjM5ZWU4ZjM2NTgxNWZhNDFmMjY0ZGU4IiwiaWF0IjoxNjcyMzUyNzMzLCJleHAiOjE2NzI0MzkxMzN9.02vlTCC5hOlCIi1suBdQASLZH6aZ_eJz0yBnvfXoolk`,
            },
          })
          .then((response) => {
            console.log(response.data[0]);
          });
        // } else {
        //   return axios.post(`${server}/users/register`, { email, password });
        // }
      });

    closeModal();
  };
  const [isOpen, setIsOpen] = useState(false);
  // Function to open the modal
  const openModal = () => {
    setIsOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div>
      {/* Button to open the modal */}
      <button onClick={openModal}>Login</button>

      {/* Modal component */}
      {isOpen && (
        <div className={styles.modal}>
          {/* Close button */}
          <button onClick={closeModal}>X</button>

          {/* Modal content */}
          <div className={styles.modalcontent}>
            <div>
              <form onSubmit={onSubmit}>
                <input
                  type="search"
                  name="email"
                  placeholder="insert email"
                  required
                ></input>
                <tr></tr>

                <tr></tr>
                <input
                  type="password"
                  name="password"
                  placeholder="insert password"
                  required
                ></input>
                <tr></tr>
                <input type="submit" required></input>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PopupLogin;
