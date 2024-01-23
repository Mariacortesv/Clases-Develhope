// App.js

import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Welcome } from "./Welcome";
import { Container } from "./Container";
import { Catalogue } from "./Catalogue";
import { Product } from "./Product";
import { GithubUsers } from "./GithubUsers";
import { GithubUser } from "./GithubUser";
import { HookCounter } from "./CounterHook";
import ShowGithubUser from "./ShowGithubUser";

function App() {
  return (
    <div>
      <h1>External Libraries class</h1>
      <Container
        title={
          <div>
            <h2>React Router</h2>
            <div>
              <Link to="/">Home</Link> | <Link to="products">Products</Link> |{" "}
              <Link to="users">Users</Link> | <Link to="counter">Counter</Link>
            </div>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/counter" element={<HookCounter />} />
          <Route path="products" element={<Catalogue />}>
            <Route index element={<p>Please Select a Product</p>} />
            <Route path=":id" element={<Product />} />
          </Route>
          <Route
            path="users"
            element={
              <div>
                <h2>Github Users</h2>
                <Routes>
                <Route path="users" element={<GithubUsers />} />
                  <Route index element={<p>Add a user and select it</p>} />
                  <Route path=":username" element={<ShowGithubUser />} />
                  <Route path=":username/clase" element={<GithubUser />} />
                
                </Routes>
              </div>
            }
          />
          <Route
            path="*"
            element={
              <div>
                <p>Not Found!</p>
                <Link to="/">Go Home</Link>
              </div>
            }
          />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
