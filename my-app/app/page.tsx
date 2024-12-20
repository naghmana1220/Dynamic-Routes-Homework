import Link from "next/link"



const Albums = async () => {
    const datalist = await fetch("https://jsonplaceholder.typicode.com/albums")
    const res = await datalist.json()
    return (
        <div className="grid justify-center p-8 gap-4 font-serif">
            <h1 className="text-4xl font-bold text-slate-900 mb-6">All Albums List</h1>
            <ol className="list-decimal space-y-2">
                {res.map((Albums: {id:number , userId:number, title:string} ) => (
                   <li key={Albums.id}>
                      <Link href={`/Albums/${Albums.id}`}>
                      {Albums.title}
                      </Link>
                   </li>
                ))}
            </ol>
        </div>
    )
}
export default Albums