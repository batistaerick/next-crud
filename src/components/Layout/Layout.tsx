import { ReactNode } from 'react';
import Title from '../Title';

interface LayoutProps {
  title: string;
  children: ReactNode;
}

export default function Layout({ title, children }: LayoutProps) {
  return (
    <div
      className={`
        flex flex-col w-2/3
        bg-white text-gray-800 rounded-md
      `}
    >
      <Title>{title}</Title>
      <div className="p-6">{children}</div>
    </div>
  );
}
