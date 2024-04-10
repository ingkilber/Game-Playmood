import React, { useEffect, useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link, Head } from '@inertiajs/react';

// Función para mostrar imágenes de juegos en línea
function OnlineGames({ auth }) {

    const [selectedMood, setSelectedMood] = useState(null);

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
        { url: 'https://i.pinimg.com/564x/72/94/35/7294359524a9f97fd25c56891d5656e9.jpg', moods: ['alegre'] },
        { url: 'https://i.pinimg.com/564x/e7/d9/bf/e7d9bffe395108f058361048884e03d5.jpg', moods: ['triste', 'alegre'] },
        { url: 'https://i.blogs.es/d4d988/460742-crash-bandicoot-n-sane-trilogy-playstation-4-front-cover/650_1200.jpeg', moods: ['alegre'] },
        { url: 'https://uvejuegos.com/img/caratulas/686/Caratula-Doom-3-Xbox.jpg', moods: ['triste'] },
        { url: 'https://as.com/ocio/imagenes/2016/06/02/juegos/1464887113_304316_1464887415_sumario_normal.jpg', moods: ['alegre'] },
        { url: 'https://sm.ign.com/ign_es/game/l/league-of-/league-of-legends_q2kj.png', moods: ['triste'] },
        { url: 'https://uvejuegos.com/img/caratulas/57402/darksiders-warmastered-edition-cover.jpg', moods: ['alegre', ''] },
        { url: 'https://assets.spartangeek.com/cc/league-of-leyends-cover.png', moods: ['triste', 'alegre'] },
        { url: 'https://uvejuegos.com/img/caratulas/59904/wowbfa.jpg', moods: ['alegre'] },
        { url: 'https://1.bp.blogspot.com/_3SA8RC6xbJ8/TKDjg1qxaSI/AAAAAAAAAKU/bOXesi4vzZ8/w1200-h630-p-k-no-nu/gta4krk.jpg', moods: ['triste'] },
    ];

    // Filtrar imágenes según el estado de ánimo seleccionado
    const filteredImages = selectedMood ?
        gameImages.filter(image => image.moods.includes(selectedMood)) : // Filtrar por estado de ánimo si se ha seleccionado uno
        gameImages; // Devolver todas las imágenes si no hay un estado de ánimo seleccionado

        const emoji = selectedMood === 'alegre' ? '😀' : selectedMood === 'triste' ? '😞' : null;

    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Mis juegos" />

            <div className="py-[10vh] items-center">
                <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">

                    <h2 className="text-3xl font-semibold mb-12">Juegos en línea {emoji}</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {filteredImages.map((image, index) => (
                            <img key={index} src={image.url} alt={`Juego ${index + 1}`} className="w-full h-auto rounded-lg" style={{ aspectRatio: '1/1.5' }} />
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