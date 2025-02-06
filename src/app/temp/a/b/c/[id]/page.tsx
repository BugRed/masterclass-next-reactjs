export default async function GetId({ params }:{ params: Promise<{id : string}>}){
    return(
        <div>
            <h1>GetId: {(await params).id}</h1>
        </div>
    )
}