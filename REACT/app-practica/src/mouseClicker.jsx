export function MouseClicker() {
  function handleButonClick(event) {
    console.log(event.target, event.currentTarget.name);
  }
  function handleImageClick (event){
  event.stopPropagation()
  console.log(event.target, event.currentTarget.name);
}
  return (
    <div>
      <button name="one" onClick={handleButonClick}>
        Click Me!{" "}
      </button>
      <button name="two" onClick={handleButonClick}>
        {" "}
        <img width={24} height={24} onClick={handleImageClick}/> Click Me!
      </button>
    </div>
  );
}
{
}

/* Ejercicio Handling Events 1/> */
