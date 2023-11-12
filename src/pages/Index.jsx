import posts from "../blog.json";
import './../test.css'
function Homepage(){
    return (
            <>
           <h1 className="text-center text-4xl text-gray-800 font-bold mt-5">Tutorial React JS</h1>
                <div className="container px-10 flex justify-center">
                {posts.map((e) => {
                    return(
                        <div className="w-80 h-auto py-5 px-5 shadow-xl px-2 rounded-lg">
                            <h1 className="text-red-600 text-center text-3xl font-bold text-gray-800 my-9">{e.title}</h1>
                            <img src="https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2023/04/03/Azizi-Zee-1774448471.jpeg" alt="Azizi" />
                            <small>{e.date} {e.tags.join(' ')}</small>
                            <div className="text-sm">
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