import { useNavigate } from "react-router-dom";
// import { getAuth, signOut } from "firebase/auth";

const NavBar = () => {
    const navigate = useNavigate();

    // const handleLogout = () => {
    //     const auth = getAuth();
    //     signOut(auth).then(() => {
    //         // Sign-out successful.
    //             }).catch((error) => {
    //         // An error happened.
    //     });
    //     navigate("/login");
    // };

    return (
        <>
            <div className="flex h16 max-w-6xl mx-auto items-center justify-between">
                <button className="-ml-1 rounded p-1  text-sky-500 focus-ring-2 focus:ring-slate-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        {/* Icono */}
                    </svg>
                </button>
                <div className="flex  items-center">
                    <div className="space-x-4 ml-4 md:flex">
                        <button
                            className="bg-transparent hover:bg-blue-500 text-sky-500 font-semibold hover:text-blue-700 py-2 px-4 border border-blue-500 hover:border-transparent rounded" 
                            // className="px-3 py-2  text-sky-500" 
                            onClick={() => navigate("/miembros")}
                            style={{fontWeight: "bold"}}
                            >Cumpleaños</button>
                        <button 
                            className="bg-transparent hover:bg-blue-500 text-sky-500 font-semibold hover:text-blue-700 py-2 px-4 border border-blue-500 hover:border-transparent rounded" 
                            onClick={() => navigate("/limpieza")}
                            style={{fontWeight: "bold"}}
                            >Limpieza</button>
                    </div>
                </div>
                <div className="h-6 3-6 rounded-full">
                {/* {isLoggedIn ? (
                    <button 
                    className="ml-4 rounded-full   text-sky-500 focus-ring-2 focus:ring-slate-200 focus:ring-offset-1"
                    onClick={handleLogout}>
                    Cerrar Sesion
                </button>
                ):( */}
                    <button 
                        className="ml-4 rounded-full   text-sky-500 focus-ring-2 focus:ring-slate-200 focus:ring-offset-1"
                        onClick={() => navigate("/logind")}>
                        Administrar
                    </button>
                {/* )} */}
                </div>
            </div>
        </>
    );
}

export default NavBar;