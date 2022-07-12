import React, { useState, useEffect } from "react";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { Container } from "react-bootstrap";

const SimpleFirebase = () => {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, [usersCollectionRef]);

  return (
    <Container>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h1>{user.name}</h1>
            <h1>{user.age}</h1>
          </div>
        );
      })}
    </Container>
  );
};

export default SimpleFirebase;
