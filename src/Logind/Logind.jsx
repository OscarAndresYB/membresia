import { useState } from "react";
import firebaseApp from "../Membresia/credenciales";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Navigate } from 'react-router-dom';

const Logind = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [error, setError] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    const auth = getAuth(firebaseApp);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
       
        const user = userCredential.user;
        console.log("Inicio de sesión exitoso:", user);
        setIsLoggedIn(true);
       
      })
      // .catch((error) => {
      //   setError(error.message);
      // });
  };
  if (isLoggedIn) {
    return <Navigate to="/miembros" />;
  }

  return (
    <>
    <section className="gradient-form h-full bg-neutral-200 dark:bg-neutral-600">
  <div className="container h-full p-12">
    <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
      <div className="w-full">
        <div className="block rounded-lg bg-black shadow-lg dark:bg-neutral-800">
          <div onSubmit={handleLogin}>
            {/* Left column container*/}
            <div className="px-4 md:px-0 ">
              <div className="md:mx-6 md:p-12">
                {/*Logo*/}
                <div className="text-center">
                  <img 
                    className="mx-auto w-48" 
                    // src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                    src="https://cdn.pixabay.com/photo/2012/04/25/00/03/dove-41260_1280.png"
                    alt="logo" />
                  <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                    Inglesia Nueva apostolica
                  </h4>
                </div>
                <form onSubmit={handleLogin}>
                  <p className="mb-4">Por Favor Ingrese su Cuenta</p>
                  {/*Username input*/}
                  <div className="relative mb-4" data-te-input-wrapper-init>
                    <input 
                      type="email" 
                      className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0" id="emaillogueo" 
                      placeholder="Ingrese su correo"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)} 
                      />
                    <label htmlFor="emaillogueo" className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">Correo
                    </label>
                  </div>
                  {/*Password input*/}
                  <div className="relative mb-4" data-te-input-wrapper-init>
                    <input 
                      type="password" 
                      className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0" id="passwordlogueo" 
                      placeholder="Ingrese su contraseña" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      />
                    <label htmlFor="passwordlogueo" className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">Contraseña
                    </label>
                  </div>
                  {/*Submit button*/}
                  <div className="mb-12 pb-1 pt-1 text-center">
                    <button 
                        className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]" type="submit" 
                        data-te-ripple-init data-te-ripple-color="light" 
                        // style={{background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)'}}
                        style={{background: 'linear-gradient(to right, #AED6F1 , ##5DADE2 , #3498DB, #21618C)'}}
                        >
                      Entrar
                    </button>
                    
                  </div>
                  
                </form>
              </div>
            </div>
            {/* Right column container with background and description
            <div className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none" style={{background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)'}}>
              <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                <h4 className="mb-6 text-xl font-semibold">
                  We are more than just a company
                </h4>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    
    </>
  );
};

export default Logind;