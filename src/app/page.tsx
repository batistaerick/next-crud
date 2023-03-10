"use client";
import Button from "@/components/Button";
import Forms from "@/components/Forms";
import Layout from "@/components/Layout";
import Table from "@/components/Table/Table";
import Client from "@/core/Client";
import { useState } from "react";

export default function Home() {
  const [visible, setVisible] = useState<"table" | "form">("table");
  const [client, setClient] = useState<Client>(Client.void());

  const clients = [
    new Client("Erick", 28, "asdf"),
    new Client("Netero", 112, "df"),
    new Client("Gon", 14, ""),
    new Client("Killua", 14, ""),
  ];

  function clientSelected(client: Client) {
    setClient(client);
    setVisible("form");
  }
  function excludedClient(client: Client) {
    console.log(client);
  }
  function saveClient(client: Client) {
    console.log(client);
    setVisible("table");
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
              <Button className="md-4" onClick={newClient}>
                New Client
              </Button>
            </div>
            <Table
              clients={clients}
              selectedClient={clientSelected}
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
