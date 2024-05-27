export interface ContextMenuClickProps {
    children: React.ReactNode;
    options: { label: string; onClick: () => void }[];
  }
  