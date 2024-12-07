import { useState } from 'react';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [userType, setUserType] = useState('');

  const handleLogin = (type) => {
    setCurrentPage('login');
    setUserType(type);
  };

  const handleLoginSubmit = () => {
    setCurrentPage('menu');
  };

  const handleBack = () => {
    setCurrentPage('home');
  };

  const handleLogout = () => {
    setCurrentPage('home');
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      {currentPage === 'home' && (
        <div>
          <h1 className="text-3xl font-bold mb-4">Veterinaria</h1>
          <div className="flex justify-center mb-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
              onClick={() => handleLogin('admin')}
            >
              Administrador
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
              onClick={() => handleLogin('veterinario')}
            >
              Veterinario
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
              onClick={() => handleLogin('empleado')}
            >
              Empleado
            </button>
          </div>
        </div>
      )}
      {currentPage === 'login' && (
        <div>
          <h1 className="text-3xl font-bold mb-4">Veterinaria</h1>
          <h2 className="text-2xl font-bold mb-4">
            {userType === 'admin' && 'Administrador'}
            {userType === 'veterinario' && 'Veterinario'}
            {userType === 'empleado' && 'Empleado'}
          </h2>
          <div className="flex flex-col mb-4">
            <input
              type="text"
              placeholder="Usuario"
              className="px-4 py-2 border border-gray-300 rounded mb-2"
            />
            <input
              type="password"
              placeholder="Contraseña"
              className="px-4 py-2 border border-gray-300 rounded mb-2"
            />
          </div>
          <div className="flex justify-center mb-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
              onClick={handleLoginSubmit}
            >
              Iniciar Sesión
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-2"
              onClick={handleBack}
            >
              Volver
            </button>
          </div>
        </div>
      )}
      {currentPage === 'menu' && (
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Menú - {userType === 'admin' && 'Administrador'}
            {userType === 'veterinario' && 'Veterinario'}
            {userType === 'empleado' && 'Empleado'}
          </h2>
          <div className="flex flex-wrap justify-center mb-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2 mb-2"
            >
              Clientes
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2 mb-2"
            >
              Mascotas
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2 mb-2"
            >
              Historial Médico
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2 mb-2"
            >
              Proveedores
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2 mb-2"
            >
              Pagos
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2 mb-2"
            >
              Empleados
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2 mb-2"
            >
              Veterinarios
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2 mb-2"
            >
              Productos
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2 mb-2"
            >
              Citas
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2 mb-2"
            >
              Usuarios
            </button>
          </div>
          <div className="flex justify-center mb-4">
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-2"
              onClick={handleLogout}
            >
              Cerrar Sesión
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;