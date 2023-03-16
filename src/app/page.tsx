"use client";
import ClientCollection from "@/backend/db/ClientCollection";
import Button from "@/components/Button";
import Forms from "@/components/Forms";
import Layout from "@/components/Layout";
import Table from "@/components/Table/Table";
import Client from "@/core/Client";
import ClientRepository from "@/core/ClientRepository";
import { useEffect, useMemo, useState } from "react";

export default function Home() {
  const [visible, setVisible] = useState<"table" | "form">("table");
  const [client, setClient] = useState<Client>(Client.void());
  const [clients, setClients] = useState<Client[]>([]);

  const repository: ClientRepository = useMemo(() => {
    return new ClientCollection();
  }, []);

  useEffect(findAll, [repository]);

  function findAll() {
    repository.findAll().then(setClients);
    setVisible("table");
  }

  function selectedClient(client: Client) {
    setClient(client);
    setVisible("form");
  }

  function excludedClient(client: Client) {
    repository.delete(client);
    findAll();
  }

  async function saveClient(client: Client) {
    await repository.save(client);
    findAll();
  }

  function newClient() {
    setClient(Client.void());
    setVisible("form");
  }

  return (
    <div
      className={`
        flex justify-center items-center h-screen
        bg-gradient-to-r from-blue-500 to bg-purple-500
        text-white
      `}
    >
      <Layout title="Simple Registration">
        {visible === "table" ? (
          <>
            <div className="flex justify-end">
              <Button className="mb-4" onClick={newClient}>
                New Client
              </Button>
            </div>
            <Table
              clients={clients}
              selectedClient={selectedClient}
              excludedClient={excludedClient}
            ></Table>
          </>
        ) : (
          <Forms
            client={client}
            canceled={() => setVisible("table")}
            clientChanged={saveClient}
          />
        )}
      </Layout>
    </div>
  );
}
