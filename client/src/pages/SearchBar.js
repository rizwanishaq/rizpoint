import { set } from "date-fns";
import React, { useState, useEffect } from "react";
import { getPosts } from "../api/axios";
import { Button, Container, Form } from "react-bootstrap";
import SearchCard from "../components/Search/SearchCard";

const SearchBar = () => {
  const [posts, setPosts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    getPosts()
      .then((json) => {
        setPosts(json);
        console.log(json);
        return json;
      })
      .then((json) => {
        setSearchResults(json);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSearchChange = (e) => {
    if (!e.target.value) return setSearchResults(posts);

    const resultsArray = posts.filter(
      (post) =>
        post.title.includes(e.target.value) ||
        post.body.includes(e.target.value)
    );
    setSearchResults(resultsArray);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit} className="mt-2 mb-3 d-flex">
        <Form.Control
          type="search"
          placeholder="search results"
          onChange={handleSearchChange}
        />
        <Button variant="outline-success">Search</Button>
      </Form>

      {searchResults &&
        searchResults.map((post) => <SearchCard key={post.id} post={post} />)}
    </Container>
  );
};

export default SearchBar;
