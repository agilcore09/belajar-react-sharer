import posts from "../blog.json";
import './../test.css'
function Homepage(){
    return (
        <>
           
                <div className="container">
                {posts.map((e) => {
                    return(
                        <div className="card">
                            <h1 className="text-red-600">{e.title}</h1>
                            <img src="https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2023/04/03/Azizi-Zee-1774448471.jpeg" alt="Azizi" />
                            <small>{e.date} {e.tags.join(' ')}</small>
                            <div className="card-body">
                                <p>{e.body}</p>
                            </div>
                        </div>
                )
            })}
                </div>
        </>
    )
}

export default Homepage 