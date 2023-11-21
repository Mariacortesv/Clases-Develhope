function printAsyncName(callback, name) {
  setTimeout(() => {
    console.log("Hello");

    setTimeout(() => {
      console.log(name);
    }, 1000);
  }, 1000);
}


printAsyncName(() => {
  console.log("Callback");
}, "Maria");
