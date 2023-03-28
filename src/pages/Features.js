import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function Features() {
  const [user, setUser] = useState([{}]);
  console.log(user, "dsad");
  const getWell = async () => {
    let result = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(result.data[0], "ghjghjgh");
    setUser(result.data);
  };
  useEffect(() => {
    getWell();
  }, []);

  // const handleDelete = async (id) => {
  //   const result = await axios.delete(`http://localhost:8000/posts/${id}`);
  //   alert("delete successfully");
  //   getServices();
  // };

  const handleDelete = async (id) => {
    alert(id, "delete success");
    const result = await axios.delete(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    console.log(result.id, "sadjbsa");
    getWell();
  };

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>First Name</th>
            <th>Username</th>
            <th>email</th>
            <th>address</th>
            <th>city</th>
          </tr>
        </thead>
        <tbody>
          {user.map((item, index) => {
            return (
              <>
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  {/* <td>{item.address.city}</td>
                  <td>{item.address.zipcode}</td> */}
                  <td>
                    <Button variant="info" className="text-white">
                      <Link
                        className="text-decoration-none text-white"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </Link>
                    </Button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

export default Features;
