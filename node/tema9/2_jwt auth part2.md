# NodeJS Part 2 :: Exercise 7 :: JWT Auth part 2

### Do

- Create routes:
  - `POST /users/signup`: create `user` in DB.
    - Store user with `username` and `password` keys in the DB.
      - If successful, respond with JSON `{msg: "Signup successful. Now you can log in."}`.
  - `POST /users/login`: log user in (adds JWT to `user` in DB).
    - Check that a provided password and the password in the DB match.
      - If they don't, respond with an error.
      - If they do, respond with `token` (JWT), `id` and `username`

### Use

- `req.body` in both routes
- `jsonwebtoken` package
- `jwt.sign` to sign a token with:
  - `payload` (with `id` (user id) and `username`)
  - `secret` (from `.env`)

### Check

- Use Postman to test the routes.
