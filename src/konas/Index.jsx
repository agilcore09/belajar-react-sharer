import { Link } from "react-router-dom"

function KonasPage() {
    return (
        <div className="body bg-slate-950 h-screen flex justify-center items-center">
            <div className="konas-square w-2/5 h-3/5 text-center" >
                <img src="public/konas.png" alt="konas" className="w-4xl mx-auto my-auto" />
                <div className="body-content mt-10">
                    <p className="text-white text-xl">Selamat Datang</p>
                    <h3 className="text-white font-bold text-3xl">Kotak Narsis Share Strip</h3>
                    <br />
                    <a href="/gallery" className="text-white bg-red-500 h-35 rounded-lg text-xl px-6 py-2 font-bold mt-8 hover:py-3 hover:px-7 transition delay-150 duration-300 ease-in-out">MULAI</a>
                </div>
            </div>
        </div >
    )
}

export default KonasPage