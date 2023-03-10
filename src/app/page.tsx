"use client";
import Button from "@/components/Button";
import Forms from "@/components/Forms";
import Layout from "@/components/Layout";
import Table from "@/components/Table/Table";
import Client from "@/core/Client";
import { useState } from "react";

export default function Home() {
  const [visible, setVisible] = useState<"table" | "form">("table");

  const clients = [
    new Client("Erick", 28, "asdf"),
    new Client("Netero", 112, "df"),
    new Client("Gon", 14, ""),
    new Client("Killua", 14, ""),
  ];

  function selectedClient(client: Client) {
    console.log(client.name);
  }

  function excludedClient(client: Client) {
    console.log(client);
  }

  function saveClient(client: Client) {
    console.log(client);
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
              <Button className="md-4" onClick={() => setVisible("form")}>
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
            client={clients[0]}
            canceled={() => setVisible("table")}
            clientChanged={saveClient}
          />
        )}
      </Layout>
    </div>
  );
}
