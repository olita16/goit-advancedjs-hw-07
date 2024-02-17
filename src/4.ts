// Клас key

class Key {
  private signature: number;

  constructor() {
    this.signature = Math.floor(Math.random() * 1000); // Випадковий підпис
  }

  getSignature() {
    return this.signature;
  }
}

// Class Person
class Person {
  private key: Key;

  constructor(key: Key) {
    this.key = key;
  }

  getKey() {
    return this.key;
  }
}

// Abstract Class House
abstract class House {
  protected door: boolean = false;
  protected key: Key;
  protected tenants: Person[] = [];

  constructor() {
    this.key = key;
  }

  abstract openDoor(key: Key): void;

  comeIn(person: Person) {
    if (this.door) {
      this.tenants.push(person);
      console.log("Person came in.");
    } else {
      console.log("Door is closed.");
    }
  }
}

// Class My House

class MyHouse extends House {
  openDoor(key: Key) {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true; // Відчиняємо двері
      console.log("Door is open.");
    } else {
      console.log("Invalid key.");
    }
  }
}

// Сценарій реалізації

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
