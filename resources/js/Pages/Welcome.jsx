import { Link, Head } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document.getElementById('screenshot-container')?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document.getElementById('docs-card-content')?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head title="Gamer Playmood" />
            <div className="bg-gray-50 text-black/50" style={{ backgroundImage: "url('https://p4.wallpaperbetter.com/wallpaper/699/837/116/mario-in-hd-for-pc-wallpaper-preview.jpg')", backgroundSize: "contain", backgroundPosition: "center" }}>
                
                <div className="relative min-h-screen flex flex-col items-center justify-center">
                    <div className="relative w-full max-w-2xl px-6">

                        <main className="mt-6">
                            <div className="grid gap-6">
                                <a
                                    id="docs-card"
                                    className="flex flex-col items-start gap-6 overflow-hidden rounded-lg bg-white p-6 md:row-span-3 lg:p-10 lg:pb-10 text-black"
                                >

                                    <div className="relative flex items-center gap-6 lg:items-end">
                                        <div id="docs-card-content" className="flex items-start gap-6 lg:flex-col">

                                            <div className="pt-3 sm:pt-5 lg:pt-0">
                                                <h2 className="text-6xl font-semibold text-black">
                                                    Jugá con tu ánimo
                                                </h2>

                                                <p className="mt-4 text-lg/relaxed">
                                                ¡Bienvenido! PlayMood es una web App que te permitirá ayudarte a
                                                <strong> elegir el videojuego más adecuado podés disfrutar según su estado de ánimo. </strong>
                                                </p>

                                                <p className="mt-4 text-lg/relaxed">
                                                De forma rápida y sencilla vas a poder expresar
                                                <strong> en qué “mood” estás </strong>
                                                y nosotros te proporcionemos
                                                <strong> recomendaciones de juegos </strong>
                                                que estén o no en las librerías de tus distintas cuentas de videojuegos que mejor se ajusten a estas emociones.
                                                <br/>
                                                <br/>
                                                <strong> 👉 ¿Start?</strong>
                                                </p>

                                            </div>
                                        </div>
                                    </div>

                                    <nav className="flex flex-col lg:flex-row text-center text-black w-full">
                                        {auth.user ? (
                                            <Link
                                                href={route('dashboard')}
                                                className="inline-flex w-full lg:w-auto rounded-md px-3 py-2"
                                            >
                                                Dashboard
                                            </Link>
                                        ) : (
                                            <>
                                            <Link
                                                    href={route('register')}
                                                    className="w-full bg-[#ED8703] hover:bg-[rgba(237,135,3,0.8)] hover:bg-gray-400 hover:text-white text-lg py-2 px-4 rounded-l"
                                                >
                                                    Registrarte
                                                </Link>
                                                
                                                <Link
                                                    href={route('login')}
                                                    className="w-full bg-[#FFC670] hover:bg-[rgba(255,198,112,0.8)] hover:bg-gray-400 hover:text-white text-lg font-bold py-2 px-4 rounded-r"
                                                >
                                                    Iniciar Sesión
                                                </Link>
                                            </>
                                        )}
                                    </nav>

                                    <p className="text-2l">
                                        <strong> Usar aplicación sin registrarse</strong>
                                    </p>
                                </a>

                            </div>
                        </main>

                    </div>
                </div>
            </div>
        </>
    );
}
