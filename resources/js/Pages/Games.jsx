import React from 'react';

// Función para mostrar imágenes de juegos en línea
function OnlineGames() {
    // Supongamos que tienes una lista de URLs de imágenes de juegos en línea
    const gameImages = [
        'https://i.blogs.es/98dc03/sinestesia/450_1000.jpeg',
        'https://i.blogs.es/98dc03/sinestesia/450_1000.jpeg',
        'https://i.blogs.es/98dc03/sinestesia/450_1000.jpeg',
    ];

    return (
        <div>
            <h2 className="text-3xl font-semibold mb-4">Juegos en línea</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {gameImages.map((image, index) => (
                    <img key={index} src={image} alt={`Juego ${index + 1}`} className="w-full h-auto rounded-lg" />
                ))}
            </div>
        </div>
    );
}

export default OnlineGames;