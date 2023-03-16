import ClientCollection from '@/backend/db/ClientCollection';
import Client from '@/core/Client';
import ClientRepository from '@/core/ClientRepository';
import { useEffect, useMemo, useState } from 'react';
import { useTableOrForm } from './useTableOrForm';

export default function useClients() {
  const [client, setClient] = useState<Client>(Client.void());
  const [clients, setClients] = useState<Client[]>([]);

  const { isTableVisible, showTable, showForm } = useTableOrForm();

  const repository: ClientRepository = useMemo(() => {
    return new ClientCollection();
  }, []);

  useEffect(findAll, [repository]);

  function findAll() {
    repository.findAll().then(setClients);
    showTable();
  }

  function selectedClient(client: Client) {
    setClient(client);
    showForm();
  }

  function deleteClient(client: Client) {
    repository.delete(client);
    findAll();
  }

  async function saveClient(client: Client) {
    await repository.save(client);
    findAll();
  }

  function newClient() {
    setClient(Client.void());
    showForm();
  }

  return {
    isTableVisible,
    client,
    clients,
    newClient,
    saveClient,
    deleteClient,
    selectedClient,
    findAll,
    showTable,
  };
}
