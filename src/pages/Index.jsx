import posts from "../blog.json";

function Homepage(){
    return (
        <>
            <p id="center">SIMPLE BLOG</p>
                <div className="container">
                {posts.map((e) => {
                    return(
                        <div className="card">
                            <h1 className="text-3xl">{e.title}</h1>
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