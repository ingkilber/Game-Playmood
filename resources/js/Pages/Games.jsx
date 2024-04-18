import React, { useEffect, useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link, Head } from '@inertiajs/react';
import axios from 'axios';

// Función para mostrar imágenes de juegos en línea
function OnlineGames({ auth }) {

    const [selectedMood, setSelectedMood] = useState(null);
    const [searchTerm, setSearchTerm] = useState(''); // Estado para almacenar el texto de búsqueda

    useEffect(() => {
        // Obtiene el valor almacenado en localStorage
        const moodFromLocalStorage = localStorage.getItem('selectedMood');
        // Actualiza el estado con el valor almacenado
        setSelectedMood(moodFromLocalStorage);
    }, []);

    // Consultar api
    const [dataGames, setDataGames] = useState([]);
    console.log("🚀 ~ OnlineGames ~ dataGames:", dataGames)

    useEffect(() => {
        axios.get('/games-api')
            .then(response => {
                setDataGames(response.data);
            })
            .catch(error => {
                console.error('Error al obtener datos:', error);
            });
    }, []);

    const handleClearMood = () => {
        setSelectedMood(null);
        localStorage.removeItem('selectedMood');
    };

    // Filtrar imágenes según el estado de ánimo seleccionado
    const filteredImages = selectedMood ?
    dataGames.filter(image => image.moods.includes(selectedMood)) : // Filtrar por estado de ánimo si se ha seleccionado uno
    dataGames; // Devolver todas las imágenes si no hay un estado de ánimo seleccionado

    const filteredBySearch = searchTerm.length > 0 ?
        dataGames.filter(image => image.name.toLowerCase().includes(searchTerm.toLowerCase())) :
        filteredImages;

        const emoji = selectedMood === 'alegre' ? '😀' : selectedMood === 'triste' ? '😞' : null;

    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Mis juegos" />

            <div className="py-[10vh] items-center">
                <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">

                    <h2 className="text-3xl font-semibold mb-12">Juegos en línea {emoji}</h2>

                    {/* Buscador */}
                    <div className="relative mb-8">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input value={searchTerm} onChange={e => setSearchTerm(e.target.value)} type="search" id="default-search" className="block w-full p-4 ps-10 text-m text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" placeholder="Buscar por juegos nombre..." required />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {filteredBySearch.map((image, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <img
                                    src={image.url}
                                    alt={image.name}
                                    className="w-full h-auto rounded-lg"
                                    style={{ aspectRatio: '1/1.5' }}
                                />
                                <span className="mt-2">{image.name}</span>
                            </div>
                        ))}
                    </div>

                    {selectedMood ? <button onClick={handleClearMood} className="w-full bg-[#FFC670] hover:bg-[rgba(237,135,3,0.8)] hover:text-white text-lg font-bold py-2 px-4 rounded mt-8">
                        Limpiar estado de ánimo
                    </button> : null}

                </div>
            </div>

        </AuthenticatedLayout>
    );
}

export default OnlineGames;