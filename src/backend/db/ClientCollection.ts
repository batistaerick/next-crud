import Client from "@/core/Client";
import ClientRepository from "@/core/ClientRepository";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  QueryDocumentSnapshot,
  setDoc,
} from "firebase/firestore/lite";
import db from "../config";

export default class ClientCollection implements ClientRepository {
  #converter = {
    toFirestore(client: Client) {
      return {
        name: client.name,
        age: client.age,
      };
    },
    fromFirestore(snapshot: QueryDocumentSnapshot): Client {
      const data = snapshot.data();
      return new Client(data.name, data.age, snapshot.id);
    },
  };

  #collections(id: string) {
    return doc(db, "client", id).withConverter(this.#converter);
  }

  async save(client: Client): Promise<void> {
    if (client.id) {
      const docRef = this.#collections(client.id);
      await setDoc(docRef, client);
    } else {
      const docRef = collection(db, "client", client.id).withConverter(
        this.#converter
      );
      await addDoc(docRef, client);
    }
  }

  async delete(client: Client): Promise<void> {
    const docRef = this.#collections(client.id);
    return await deleteDoc(docRef);
  }

  async findAll(): Promise<Client[]> {
    const clientsCollection = collection(db, "client").withConverter(
      this.#converter
    );
    const clientsSnapshot = await getDocs(clientsCollection);
    return clientsSnapshot.docs.map((doc) => doc.data());
  }
}
