async function Albums({ params }: { params: {id:number }}) {
    const id = params.id
    const data = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`)
    const res = await data.json()
    console.log(res)
    return(
        <div className="flex flex-col items-center space-y-4 text-2xl p-5 font-serif">
            <h1 className="text-4xl mb-3 font-bold text-slate-900">Single Todos Data</h1>
            <h1>userId : {res.userId}</h1>
            <h1>id : {res.id}</h1>
            <h1>tittle : {res.title}</h1>
        </div>
    )
  }
  export default Albums
  