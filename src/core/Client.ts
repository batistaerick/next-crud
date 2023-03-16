export default class Client {
  #id: string;
  #name: string;
  #age: number;

  constructor(name: string, age: number, id: string) {
    this.#id = id;
    this.#name = name;
    this.#age = age;
  }

  static void() {
    return new Client(null, null, "");
  }

  get id() {
    return this.#id;
  }

  get name() {
    return this.#name;
  }

  get age() {
    return this.#age;
  }

  static converter(data: any) {
    return new Client(data.name, data.number, data.id);
  }

  static toObject(client: Client) {
    return {
      id: client.id,
      name: client.name,
      age: client.age,
    };
  }
}
