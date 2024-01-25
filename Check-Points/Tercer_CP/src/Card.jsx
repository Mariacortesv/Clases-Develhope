
export function Card ({ user }) {
    return (
      <div>
        <img src={user.avatar} alt={`User`} />
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>City: {user.address.city}</p>
      </div>
    );
  };