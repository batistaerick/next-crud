'use client';
import Client from '@/core/Client';
import { useState } from 'react';
import Button from '../Button';
import Input from '../Input';

interface FormsProps {
  client: Client;
  clientChanged?: (client: Client) => void;
  canceled?: () => void;
}

export default function Forms({ client, canceled, clientChanged }: FormsProps) {
  const id = client?.id;
  const [name, setName] = useState<string>(client?.name ?? '');
  const [age, setAge] = useState<number>(client?.age ?? 0);

  return (
    <div>
      {id && <Input readOnly text="ID" type="text" value={client?.id} />}
      <Input text="Name" type="text" value={name} setState={setName} />
      <Input text="Age" type="number" value={age} setState={setAge} />
      <div className="flex justify-end mt-3">
        <Button
          className="p-2 m-1"
          onClick={() => clientChanged?.(new Client(name, age, id))}
        >
          {id ? 'Change' : 'Salve'}
        </Button>
        <Button className="p-2 m-1" onClick={canceled}>
          Cancel
        </Button>
      </div>
    </div>
  );
}
