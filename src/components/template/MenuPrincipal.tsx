import { IconApps, IconHexagonNumber1, IconLayout2} from "@tabler/icons-react";
import MenuItem from "./MenuItem";

export default function MenuPrincipal() {

  return (
    <aside className="w-80 bg-zinc-900">
      <nav className="flex flex-col p-5">
        <MenuItem link="/first">
          <IconHexagonNumber1 />
          <span>Primeiro Componente</span>
        </MenuItem>
        <MenuItem link="/flexbox">
          <IconLayout2 />
          <span>Flexbox</span>
        </MenuItem>
        <MenuItem link="/pagina">
          <IconApps />
          <span>Componente Pagina</span>
        </MenuItem>
      </nav>
    </aside>
  );
}
