export function ConditionalRendering({ name, age }) {
  return (
    <div>
      <h2>Conditional Rendering 1</h2>
      {age > 18 && <p>You have {age}, Welcome to the adult Life </p>}
      {age && <p>You are {age} years old! </p>}
      {age > 18 && age < 65 ? (
        <p>You are a grown up, you are {age} years old!</p>
      ) : (
        <p>No age Found</p>
      )}
      {age > 18 && age < 65 && name === "John" ? (
        <p>Welcome, {name}!</p>
      ) : (
        <p>You are not John</p>
      )}
    </div>
  );
}
