import { useState } from 'react';

export function useTableOrForm() {
  const [visible, setVisible] = useState<'table' | 'form'>('table');

  const showTable = () => {
    setVisible('table');
  };
  const showForm = () => {
    setVisible('form');
  };

  return {
    isTableVisible: visible === 'table',
    showTable,
    showForm,
  };
}
