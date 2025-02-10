export default function Box(props: any){
    return(
        <div className={`
            flex justify-center items-center
            bg-red-700 rounded-md p-3
            border-2 border-zinc-300
            ${props.className ?? ''}
        `}>
            <span>{props.text}</span>
        </div>
    )
}