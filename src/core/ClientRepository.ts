import Client from "./Client";

export default interface ClientRepository {
  save(client: Client): Promise<void>;
  delete(client: Client): Promise<void>;
  findAll(): Promise<Client[]>;
}
