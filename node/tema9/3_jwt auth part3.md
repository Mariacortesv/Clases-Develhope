# NodeJS Part 2 :: Exercise 8 :: JWT Auth part 3

### Do

- Create route:
  - `GET /users/logout`: log user out (removes JWT from `user` in DB).
- Create `authorize` middleware and use it in routes that require it (protected routes).
- Restrict file upload of planet images to `users`.

### Use

- SQL query:
  ```sql
  UPDATE users
  SET token=NULL
  WHERE id=$1;
  ```
  - Make sure that `$1` is the user's `id`
- `passport.authenticate()` in `authorize` function
  - set `session` to `false` in `passport.authetnicate` (2nd param)
  - when successful, do: `req.user = user` (`user` comes from `(err, user)` cb func that `passport.authenticate` provides (3rd param))

### Check

- Use Postman to test the routes.
