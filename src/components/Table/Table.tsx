import Client from '@/core/Client';
import { EditIcon, TrashIcon } from 'public/Icons';

interface TableProps {
  clients: Client[];
  selectedClient?: (client: Client) => void;
  excludedClient?: (client: Client) => void;
}

export default function Table({
  clients,
  selectedClient,
  excludedClient,
}: TableProps) {
  const showActions = excludedClient || selectedClient;

  function headerRender() {
    return (
      <tr>
        <th className="text-left p-4">ID</th>
        <th className="text-left p-4">Name</th>
        <th className="text-left p-4">Age</th>
        {showActions && <th className="p-4">Actions</th>}
      </tr>
    );
  }

  function actionsRender(client: Client) {
    return (
      <td className="flex justify-center">
        {selectedClient && (
          <button
            className={`
              flex justify-center items-center
              text-green-600 rounded-full p-2 m-1
              hover:bg-purple-50
            `}
            onClick={() => selectedClient(client)}
          >
            {EditIcon}
          </button>
        )}
        {excludedClient && (
          <button
            className={`
              flex justify-center items-center 
              text-red-600 rounded-full p-2 m-1
              hover:bg-purple-50
            `}
            onClick={() => excludedClient(client)}
          >
            {TrashIcon}
          </button>
        )}
      </td>
    );
  }

  function dataRender() {
    return clients?.map((client, index) => (
      <tr
        className={`${index % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}
        key={client.id}
      >
        <td className="text-left p-4">{client.id}</td>
        <td className="text-left p-4">{client.name}</td>
        <td className="text-left p-4">{client.age}</td>
        {actionsRender(client)}
      </tr>
    ));
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead
        className={`
          text-gray-100
          bg-gradient-to-r from-purple-500 to bg-purple-800
        `}
      >
        {headerRender()}
      </thead>
      <tbody>{dataRender()}</tbody>
    </table>
  );
}
