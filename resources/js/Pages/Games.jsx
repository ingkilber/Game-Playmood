import React, { useEffect, useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link, Head } from '@inertiajs/react';

// Función para mostrar imágenes de juegos en línea
function OnlineGames({ auth, mood }) {

    const [selectedMood, setSelectedMood] = useState(null);
    const [searchTerm, setSearchTerm] = useState(''); // Estado para almacenar el texto de búsqueda

    useEffect(() => {
        // Obtiene el valor almacenado en localStorage
        const moodFromLocalStorage = localStorage.getItem('selectedMood');
        // Actualiza el estado con el valor almacenado
        setSelectedMood(moodFromLocalStorage);
    }, []);

    const handleClearMood = () => {
        setSelectedMood(null);
        localStorage.removeItem('selectedMood');
    };

    const gameImages = [
        { name: 'Mario Bros', url: 'https://i.pinimg.com/564x/72/94/35/7294359524a9f97fd25c56891d5656e9.jpg', moods: ['alegre'] },
        { name: 'WarCraft', url: 'https://i.pinimg.com/564x/e7/d9/bf/e7d9bffe395108f058361048884e03d5.jpg', moods: ['triste', 'alegre'] },
        { name: 'Crash Bandicoot', url: 'https://i.blogs.es/d4d988/460742-crash-bandicoot-n-sane-trilogy-playstation-4-front-cover/650_1200.jpeg', moods: ['alegre'] },
        { name: 'Doom', url: 'https://uvejuegos.com/img/caratulas/686/Caratula-Doom-3-Xbox.jpg', moods: ['triste'] },
        { name: 'NBA 2k', url: 'https://as.com/ocio/imagenes/2016/06/02/juegos/1464887113_304316_1464887415_sumario_normal.jpg', moods: ['alegre'] },
        { name: 'League of Legends', url: 'https://sm.ign.com/ign_es/game/l/league-of-/league-of-legends_q2kj.png', moods: ['triste'] },
        { name: 'Darksiders', url: 'https://uvejuegos.com/img/caratulas/57402/darksiders-warmastered-edition-cover.jpg', moods: ['alegre', ''] },
        { name: 'League of Legends', url: 'https://assets.spartangeek.com/cc/league-of-leyends-cover.png', moods: ['triste', 'alegre'] },
        { name: 'Warcraft', url: 'https://uvejuegos.com/img/caratulas/59904/wowbfa.jpg', moods: ['alegre'] },
        { name: 'Grand Theft Auto', url: 'https://1.bp.blogspot.com/_3SA8RC6xbJ8/TKDjg1qxaSI/AAAAAAAAAKU/bOXesi4vzZ8/w1200-h630-p-k-no-nu/gta4krk.jpg', moods: ['triste'] },
    ];

    // Filtrar imágenes según el estado de ánimo seleccionado
    const filteredImages = selectedMood ?
        gameImages.filter(image => image.moods.includes(selectedMood)) : // Filtrar por estado de ánimo si se ha seleccionado uno
        gameImages; // Devolver todas las imágenes si no hay un estado de ánimo seleccionado

    const filteredBySearch = searchTerm.length > 0 ?
        gameImages.filter(image => image.name.toLowerCase().includes(searchTerm.toLowerCase())) :
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