function KonasPage(){
    return(
        <div className="body bg-slate-950 h-screen flex justify-center items-center">
        <div className="konas-square border w-72 h-72 text-center" >
            <img src="public/konas.png" alt="" />
                <p className="text-white">Selamat Datang</p>
                <h3 className="text-white font-bold">Kotak Narsis Share Strip</h3>
                <button className="text-white bg-red-500 w-20 h-7 rounded-lg">Mulai</button>
            </div>
        </div>
    )
} 

export default KonasPage