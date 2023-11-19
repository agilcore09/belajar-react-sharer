import data from "../images.json";

function Gallery() {
    return (
        <>
            <div className="gallery-header my-5">
                <h3 className="text-center text-4xl font-semibold text-red-500">Strip Gallery</h3>
            </div>
            <div className="w-full max-w-5xl p-5 pb-10 mx-auto mb-10 gap-5 columns-3 space-y-5">
                {data.map((e) => {
                    return (
                        <img src={e.path} alt="gambar" />
                    )
                })}
            </div>
        </>

    )
}

export default Gallery;