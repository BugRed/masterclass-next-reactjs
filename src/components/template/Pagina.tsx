import Box from "../Box";
import Cabecalho from "./Cabecalho";
import MenuPrincipal from "./MenuPrincipal";

export default function Pagina(props: any){
    return (
      <div className="flex flex-col h-screen">
        <Cabecalho />
        <div className="flex-grow flex">
          <MenuPrincipal />
          <main className="p-7 flex-1">
            {props.children}
          </main>
        </div>
      </div>
    );
}