import { ContextMenuClickProps } from "./types";

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger
} from "@/components/ui/context-menu";

const ContextMenuClick = ({ children, options }: ContextMenuClickProps) => {
  return (
    <ContextMenu>
      <ContextMenuTrigger>{children}</ContextMenuTrigger>
      <ContextMenuContent>
        {options.map((option, index) => (
          <ContextMenuItem key={index} onClick={option.onClick}>
            {option.label}
          </ContextMenuItem>
        ))}
      </ContextMenuContent>
    </ContextMenu>
  );
};

export default ContextMenuClick;
