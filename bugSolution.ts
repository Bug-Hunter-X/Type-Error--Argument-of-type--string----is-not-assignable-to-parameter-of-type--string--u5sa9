function greeter(person: string): string {
  return "Hello, " + person;
}

let user: string = "Jane Doe";
console.log(greeter(user)); // Works!

//Alternative solution to handle arrays
function greeter2(person: string | string[]): string {
  if (typeof person === 'string') {
    return "Hello, " + person;
  } else {
    return "Hello, " + person.join(', ');
  }
}

let userArray = ["Jane Doe", 25];
console.log(greeter2(userArray)); // Works! console.log(greeter2("Jane Doe"))