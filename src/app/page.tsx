'use client';
import Button from '@/components/Button';
import Forms from '@/components/Forms';
import Layout from '@/components/Layout';
import Table from '@/components/Table';
import useClients from '@/hooks/useClients';

export default function Home() {
  const {
    isTableVisible,
    client,
    clients,
    newClient,
    saveClient,
    deleteClient,
    selectedClient,
    showTable,
  } = useClients();

  return (
    <div
      className={`
        flex justify-center items-center h-screen
        bg-gradient-to-r from-blue-500 to bg-purple-500
        text-white
      `}
    >
      <Layout title="Simple Registration">
        {isTableVisible ? (
          <>
            <div className="flex justify-end">
              <Button className="mb-4" onClick={newClient}>
                New Client
              </Button>
            </div>
            <Table
              clients={clients}
              selectedClient={selectedClient}
              excludedClient={deleteClient}
            ></Table>
          </>
        ) : (
          <Forms
            client={client}
            canceled={showTable}
            clientChanged={saveClient}
          />
        )}
      </Layout>
    </div>
  );
}
