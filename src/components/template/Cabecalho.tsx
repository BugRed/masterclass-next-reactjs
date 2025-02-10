import Logo from "./Logo";
import MenuUsuario from "./MenuUsuario";

export default function Cabecalho(){
    return(
        <header className="flex items-center gap-5 px-5 bg-zinc-800 h-[80px]">
            <Logo />
            <span className="flex-grow">Cabeçalho</span>
            <MenuUsuario />
        </header>
    
    )
}