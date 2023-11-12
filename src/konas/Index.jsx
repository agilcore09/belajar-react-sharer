function KonasPage(){
    return(
        <div className="body bg-slate-950 h-screen flex justify-center items-center">
        <div className="konas-square w-2/5 h-3/5 text-center" >
            <img src="public/konas.png" alt="konas" className="w-4xl mx-auto my-auto" />
               <div className="body-content mt-10">
                    <p className="text-white text-3xl">Selamat Datang</p>
                    <h3 className="text-white font-bold text-5xl">Kotak Narsis Share Strip</h3>
                    <button className="text-white bg-red-500 w-48 h-16 rounded-lg text-2xl font-bold mt-8">MULAI</button>
               </div>
            </div>
        </div>
    )
} 

export default KonasPage