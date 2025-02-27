import Box from "@/components/Box";
import Pagina from "@/components/template/Pagina";

export default function Flexbox() {
  return (
    <Pagina>
      <div className="h-96 w-[900px]">
        <h1>Flexbox</h1>
        <div
          className="
                    bg-zinc-700
                    h-96
                    flex
                    justify-around
                    items-center
                    gap-5
            "
        >
          <Box text="#1" className="w-24" />
          <Box text="#2" className="flex-grow" />
          <Box text="#3" className="w-20" />
        </div>
      </div>
    </Pagina>
  );
}
