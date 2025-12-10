export default async function UserInfo(props){
    console.log("props",props)
    const name="maaz"
    const res= await fetch("https://jsonplaceholder.typicode.com/todos");
    const boolder=await res.json();
    return (
        <div>
            <h1>my name is {name}</h1>
            {boolder && boolder.map(bold=><li key={bold.id}>{bold.title}</li>)}
        </div>
    )
}
