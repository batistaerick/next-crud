import Client from "@/core/Client";

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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" />
            </svg>
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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
            </svg>
          </button>
        )}
      </td>
    );
  }

  function dataRender() {
    return clients?.map((client, index) => (
      <tr
        className={`${index % 2 === 0 ? "bg-purple-200" : "bg-purple-100"}`}
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
