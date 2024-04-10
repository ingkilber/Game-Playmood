import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';
import OnlineGames from './Games.jsx';

export default function Dashboard({ auth }) {

    const [currentScreen, setCurrentScreen] = useState('welcome'); // Estado para controlar la pantalla actual
    const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
    const [isChecked3, setIsChecked3] = useState(false);
    const [isChecked4, setIsChecked4] = useState(false);
    const [isChecked5, setIsChecked5] = useState(false);
    const [isChecked6, setIsChecked6] = useState(false);
    
    const [isChecked1_2, setIsChecked1_2] = useState(false);
    const [isChecked2_2, setIsChecked2_2] = useState(false);
    const [isChecked3_2, setIsChecked3_2] = useState(false);

    const [isChecked1_3, setIsChecked1_3] = useState(false);
    const [isChecked2_3, setIsChecked2_3] = useState(false);
    const [isChecked3_3, setIsChecked3_3] = useState(false);

    const [isChecked1_4, setIsChecked1_4] = useState(false);
    const [isChecked2_4, setIsChecked2_4] = useState(false);

    const [isChecked1_5, setIsChecked1_5] = useState(false);

    const [isChecked1_6, setIsChecked1_6] = useState(false);
    const [isChecked2_6, setIsChecked2_6] = useState(false);
    const [isChecked3_6, setIsChecked3_6] = useState(false);
    const [isChecked4_6, setIsChecked4_6] = useState(false);
    const [isChecked5_6, setIsChecked5_6] = useState(false);
    const [isChecked6_6, setIsChecked6_6] = useState(false);
    const [isChecked7_6, setIsChecked7_6] = useState(false);

    const [isChecked1_7, setIsChecked1_7] = useState(false);
    const [isChecked2_7, setIsChecked2_7] = useState(false);
    const [isChecked3_7, setIsChecked3_7] = useState(false);
    const [isChecked4_7, setIsChecked4_7] = useState(false);

    const handleNext = () => {
        if (currentScreen === 'welcome') {
            setCurrentScreen('questions'); // Cambia a la primera pantalla de preguntas
            setCurrentQuestionNumber(currentQuestionNumber + 1);
        } else if (currentScreen === 'questions') {
            setCurrentScreen('questions2');
            setCurrentQuestionNumber(currentQuestionNumber + 1);
        } else if (currentScreen === 'questions2') {
            setCurrentScreen('questions3');
            setCurrentQuestionNumber(currentQuestionNumber + 1);
        } else if (currentScreen === 'questions3') {
            setCurrentScreen('questions4');
            setCurrentQuestionNumber(currentQuestionNumber + 1);
        } else if (currentScreen === 'questions4') {
            setCurrentScreen('questions5');
            setCurrentQuestionNumber(currentQuestionNumber + 1);
        } else if (currentScreen === 'questions5') {
            setCurrentScreen('questions6');
            setCurrentQuestionNumber(currentQuestionNumber + 1);
        } else if (currentScreen === 'questions6') {
            setCurrentScreen('questions7');
            setCurrentQuestionNumber(currentQuestionNumber + 1);
        } else if (currentScreen === 'questions7') {
            setCurrentScreen('questions8');
            setCurrentQuestionNumber(currentQuestionNumber + 1);
        }  else if (currentScreen === 'questions8') {
            setCurrentScreen('fin_de_preguntas');
            setCurrentQuestionNumber(null);
        } else {
            // setCurrentScreen('fin_de_preguntas');
        }
    };

    const [selectedMood, setSelectedMood] = useState(null); // Estado para almacenar el estado de animo

    const handleGames = () => {
        // Verifica si se ha seleccionado alguna opción antes de continuar
        if (selectedMood !== null) {
            // Almacena selectedMood en localStorage
            localStorage.setItem('selectedMood', selectedMood);

            // Dirige al usuario a la página de juegos con el valor seleccionado como parte de la URL
            window.location.href = `/games`;
        } else {
            // Muestra un mensaje de advertencia si no se ha seleccionado ninguna opción
            alert("Por favor, selecciona un estado de ánimo antes de continuar.");
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            // header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Bienvenido</h2>}
        >
            <Head title="Inicio" />

            <div className="py-[10vh] items-center">
                <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">

                {currentQuestionNumber >= '1' && (
                    <div className="flex items-center justify-end mt-2 mr-4 mb-2">Pregunta {currentQuestionNumber}-8</div>
                )}
            
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg ">

                    {/* Bienvenida */}
                    {currentScreen === 'welcome' && (
                            <div>
                                <div className="mt-6 ml-6 text-gray-900">Gracias por registrarte 👋</div>
                                <div className="mt-6 ml-6 text-3xl font-semibold text-black">¡Bienvenido!</div>
                                <p className="mt-6 ml-6 mr-6 text-lg/relaxed">
                                    A continuación te haremos un pequeño grupo de 
                                    <strong> preguntas </strong> que nos ayudarán a definir tu perfil para hacerte las 
                                    <strong> mejores recomendaciones de videojuegos! </strong>
                                </p>

                                <nav className="flex flex-col lg:flex-row text-center text-black w-full mt-8">
                                    <button
                                        onClick={handleNext}
                                        className="w-full bg-[#FFC670] hover:bg-[rgba(237,135,3,0.8)] hover:text-white text-lg font-bold py-2 px-4 rounded-r"
                                    >
                                        Continuar
                                    </button>
                                </nav>

                            </div>
                        )}

                        {/* Pregunta 1 */}
                        {currentScreen === 'questions' && (
                            <div>
                                <div className="mt-6 mb-6 text-3xl font-semibold text-black flex items-center justify-center">¿Cuáles son tus géneros de videojuegos favoritos?</div>
                                <div className="mt-4 ml-6 flex items-center">
                                    <input
                                        type="checkbox"
                                        className="mr-2 border border-gray-500 rounded"
                                        checked={isChecked1}
                                        onChange={() => setIsChecked1(!isChecked1)}
                                    />
                                    <label htmlFor="check">Acción (Arcade, Shooters, Pelea, etc.)</label>
                                </div>

                                <div className="mt-4 ml-6 flex items-center">
                                    <input
                                        type="checkbox"
                                        className="mr-2 border border-gray-500 rounded"
                                        checked={isChecked2}
                                        onChange={() => setIsChecked2(!isChecked2)}
                                    />
                                    <label htmlFor="check">Aventura (Casual, Puzzle, Metroidvania, etc.) </label>
                                </div>

                                <div className="mt-4 ml-6 flex items-center">
                                    <input
                                        type="checkbox"
                                        className="mr-2 border border-gray-500 rounded"
                                        checked={isChecked3}
                                        onChange={() => setIsChecked3(!isChecked3)}
                                    />
                                    <label htmlFor="check">Deportes y Carrera</label>
                                </div>

                                <div className="mt-4 ml-6 flex items-center">
                                    <input
                                        type="checkbox"
                                        className="mr-2 border border-gray-500 rounded"
                                        checked={isChecked4}
                                        onChange={() => setIsChecked4(!isChecked4)}
                                    />
                                    <label htmlFor="check">Estrategia (RTS, Tower Defense, Turn-Based Strategy, etc.)</label>
                                </div>

                                <div className="mt-4 ml-6 flex items-center">
                                    <input
                                        type="checkbox"
                                        className="mr-2 border border-gray-500 rounded"
                                        checked={isChecked5}
                                        onChange={() => setIsChecked5(!isChecked5)}
                                    />
                                    <label htmlFor="check">Role-Playing (RPG, JRPG, Rogue-Like, etc.)</label>
                                </div>

                                <div className="mt-4 ml-6 flex items-center">
                                    <input
                                        type="checkbox"
                                        className="mr-2 border border-gray-500 rounded"
                                        checked={isChecked6}
                                        onChange={() => setIsChecked6(!isChecked6)}
                                    />
                                    <label htmlFor="check">Simulación (Farming & Crafting, Life & Immersive, etc.) </label>
                                </div>

                                <nav className="flex flex-col lg:flex-row text-center text-black w-full mt-8">
                                        
                                                <button
                                                    onClick={handleNext}
                                                    className="w-full bg-[#FFF7EB] hover:bg-[rgba(255,198,112,0.8)] hover:text-white text-lg py-2 px-4 rounded-l"
                                                >
                                                    Saltear
                                                </button>

                                                <button
                                                    onClick={handleNext}
                                                    className="w-full bg-[#FFC670] hover:bg-[rgba(237,135,3,0.8)] hover:text-white text-lg font-bold py-2 px-4 rounded-r"
                                                >
                                                    Siguiente
                                                </button>
                                    </nav>
                            </div>
                        )}

                        {/* Pregunta 2 */}
                        {currentScreen === 'questions2' && (
                            <div>
                                <div className="mt-6 mb-6 text-3xl font-semibold text-black flex items-center justify-center">¿Sueles terminar por completo los videojuegos?</div>

                                <div className="mt-4 ml-6 flex items-center">
                                    <input
                                        type="checkbox"
                                        className="mr-2 border border-gray-500 rounded"
                                        checked={isChecked1_2}
                                        onChange={() => setIsChecked1_2(!isChecked1_2)}
                                    />
                                    <label htmlFor="check">Si </label>
                                </div>

                                <div className="mt-4 ml-6 flex items-center">
                                    <input
                                        type="checkbox"
                                        className="mr-2 border border-gray-500 rounded"
                                        checked={isChecked2_2}
                                        onChange={() => setIsChecked2_2(!isChecked2_2)}
                                    />
                                    <label htmlFor="check">No</label>
                                </div>

                                <div className="mt-4 ml-6 flex items-center">
                                    <input
                                        type="checkbox"
                                        className="mr-2 border border-gray-500 rounded"
                                        checked={isChecked3_2}
                                        onChange={() => setIsChecked3_2(!isChecked3_2)}
                                    />
                                    <label htmlFor="check">Depende el “mood” en el que esté XD</label>
                                </div>

                                <nav className="flex flex-col lg:flex-row text-center text-black w-full mt-8">
                                        
                                                <button
                                                    onClick={handleNext}
                                                    className="w-full bg-[#FFF7EB] hover:bg-[rgba(255,198,112,0.8)] hover:text-white text-lg py-2 px-4 rounded-l"
                                                >
                                                    Saltear
                                                </button>

                                                <button
                                                    onClick={handleNext}
                                                    className="w-full bg-[#FFC670] hover:bg-[rgba(237,135,3,0.8)] hover:text-white text-lg font-bold py-2 px-4 rounded-r"
                                                >
                                                    Siguiente
                                                </button>
                                    </nav>
                            </div>
                        )}

                        {/* Pregunta 3 */}
                        {currentScreen === 'questions3' && (
                            <div>
                                <div className="mt-6 mb-6 text-3xl font-semibold text-black flex items-center justify-center">¿Necesitas poder pausar el juego?</div>

                                <div className="mt-4 ml-6 flex items-center">
                                    <input
                                        type="checkbox"
                                        className="mr-2 border border-gray-500 rounded"
                                        checked={isChecked1_3}
                                        onChange={() => setIsChecked1_3(!isChecked1_3)}
                                    />
                                    <label htmlFor="check">Si </label>
                                </div>

                                <div className="mt-4 ml-6 flex items-center">
                                    <input
                                        type="checkbox"
                                        className="mr-2 border border-gray-500 rounded"
                                        checked={isChecked2_3}
                                        onChange={() => setIsChecked2_3(!isChecked2_3)}
                                    />
                                    <label htmlFor="check">No</label>
                                </div>

                                <div className="mt-4 ml-6 flex items-center">
                                    <input
                                        type="checkbox"
                                        className="mr-2 border border-gray-500 rounded"
                                        checked={isChecked3_3}
                                        onChange={() => setIsChecked3_3(!isChecked3_3)}
                                    />
                                    <label htmlFor="check">No es algo importante para mi, tranki</label>
                                </div>

                                <nav className="flex flex-col lg:flex-row text-center text-black w-full mt-8">
                                        
                                                <button
                                                    onClick={handleNext}
                                                    className="w-full bg-[#FFF7EB] hover:bg-[rgba(255,198,112,0.8)] hover:text-white text-lg py-2 px-4 rounded-l"
                                                >
                                                    Saltear
                                                </button>

                                                <button
                                                    onClick={handleNext}
                                                    className="w-full bg-[#FFC670] hover:bg-[rgba(237,135,3,0.8)] hover:text-white text-lg font-bold py-2 px-4 rounded-r"
                                                >
                                                    Siguiente
                                                </button>
                                    </nav>
                            </div>
                        )}

                        {/* Pregunta 4 */}
                        {currentScreen === 'questions4' && (
                            <div>
                                <div className="mt-6 mb-6 text-3xl font-semibold text-black flex items-center justify-center">¿Te gusta rejugar algunos de tus videojuegos?</div>

                                <div className="mt-4 ml-6 flex items-center">
                                    <input
                                        type="checkbox"
                                        className="mr-2 border border-gray-500 rounded"
                                        checked={isChecked1_4}
                                        onChange={() => setIsChecked1_4(!isChecked1_4)}
                                    />
                                    <label htmlFor="check">Si </label>
                                </div>

                                <div className="mt-4 ml-6 flex items-center">
                                    <input
                                        type="checkbox"
                                        className="mr-2 border border-gray-500 rounded"
                                        checked={isChecked2_4}
                                        onChange={() => setIsChecked2_4(!isChecked2_4)}
                                    />
                                    <label htmlFor="check">No</label>
                                </div>

                                <nav className="flex flex-col lg:flex-row text-center text-black w-full mt-8">
                                        
                                                <button
                                                    onClick={handleNext}
                                                    className="w-full bg-[#FFF7EB] hover:bg-[rgba(255,198,112,0.8)] hover:text-white text-lg py-2 px-4 rounded-l"
                                                >
                                                    Saltear
                                                </button>

                                                <button
                                                    onClick={handleNext}
                                                    className="w-full bg-[#FFC670] hover:bg-[rgba(237,135,3,0.8)] hover:text-white text-lg font-bold py-2 px-4 rounded-r"
                                                >
                                                    Siguiente
                                                </button>
                                    </nav>
                            </div>
                        )}

                        {/* Pregunta 5 */}
                        {currentScreen === 'questions5' && (
                            <div>
                                <div className="mt-6 mb-6 text-3xl font-semibold text-black flex items-center justify-center">Analicemos ahora que tan bien cumple tu PC <br/> los requerimientos de los videojuegos:</div>

                                <div className="mt-4 ml-6 flex items-center">
                                    <img
                                        src="https://images.sftcdn.net/images/t_app-icon-m/p/a3fbd9dc-96d0-11e6-88e1-00163ed833e7/146228571/cpu-z-146228571.png"
                                        alt="Avatar"
                                        className="w-12 h-12 mr-4 rounded-full"
                                    />
                                    <label htmlFor="check" className="mr-8">Analizar PC con CPU-Z</label>
                                    <input
                                        type="checkbox"
                                        className="ml-8 border border-gray-500 rounded"
                                        checked={isChecked1_5}
                                        onChange={() => setIsChecked1_5(!isChecked1_5)}
                                    />
                                </div>

                                <nav className="flex flex-col lg:flex-row text-center text-black w-full mt-8">
                                        
                                                <button
                                                    onClick={handleNext}
                                                    className="w-full bg-[#FFF7EB] hover:bg-[rgba(255,198,112,0.8)] hover:text-white text-lg py-2 px-4 rounded-l"
                                                >
                                                    Saltear
                                                </button>

                                                <button
                                                    onClick={handleNext}
                                                    className="w-full bg-[#FFC670] hover:bg-[rgba(237,135,3,0.8)] hover:text-white text-lg font-bold py-2 px-4 rounded-r"
                                                >
                                                    Siguiente
                                                </button>
                                    </nav>
                            </div>
                        )}

                        {/* Pregunta 6 */}
                        {currentScreen === 'questions6' && (
                            <div>
                                <div className="mt-6 mb-6 text-3xl font-semibold text-black flex items-center justify-center">Conectemos tus cuentas de videojuegos para poder <br/> recomendarte juegos de tus librerías:</div>

                                <div className="mt-4 ml-6 flex items-center">
                                    <img
                                        src="https://pbs.twimg.com/profile_images/1686625495784275969/ictpK2Fb_400x400.jpg"
                                        alt="Avatar"
                                        className="w-12 h-12 mr-4 rounded-full"
                                    />
                                    <label htmlFor="check" className="mr-8">UPlay</label>
                                    <input
                                        type="checkbox"
                                        className="ml-8 border border-gray-500 rounded"
                                        checked={isChecked1_6}
                                        onChange={() => setIsChecked1_7(!isChecked1_6)}
                                    />
                                </div>

                                <div className="mt-4 ml-6 flex items-center">
                                    <img
                                        src="https://scontent.fepa12-1.fna.fbcdn.net/v/t1.6435-9/47689630_2008809912535398_6760787756701450240_n.png?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHyTC-uLff-cIhOwDxx-zZsBqWi381gLH0GpaLfzWAsfQclRFz9mJhxqWcabOMpslM&_nc_ohc=KEofNQQNPQ0Ab4rmyF2&_nc_ht=scontent.fepa12-1.fna&oh=00_AfCljS0L4XgheTYEuxlvZECKTshYiCSIMShBD124thQpCQ&oe=663D0CA2"
                                        alt="Avatar"
                                        className="w-12 h-12 mr-4 rounded-full"
                                    />
                                    <label htmlFor="check" className="mr-8">Amazon Games</label>
                                    <input
                                        type="checkbox"
                                        className="ml-8 border border-gray-500 rounded"
                                        checked={isChecked2_6}
                                        onChange={() => setIsChecked2_6(!isChecked2_6)}
                                    />
                                </div>

                                <div className="mt-4 ml-6 flex items-center">
                                    <img
                                        src="https://play-lh.googleusercontent.com/PuPFgmLam2WNyul3lUQywQT5Y5sPgL6VzWSUAdXOS1oIQwHYnrB_MyfXCOrR4LzZcjeP"
                                        alt="Avatar"
                                        className="w-12 h-12 mr-4 rounded-full"
                                    />
                                    <label htmlFor="check" className="mr-8">Battlenet</label>
                                    <input
                                        type="checkbox"
                                        className="ml-8 border border-gray-500 rounded"
                                        checked={isChecked3_6}
                                        onChange={() => setIsChecked3_6(!isChecked3_6)}
                                    />
                                </div>

                                <div className="mt-4 ml-6 flex items-center">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Electronic-Arts-Logo.svg/1000px-Electronic-Arts-Logo.svg.png"
                                        alt="Avatar"
                                        className="w-12 h-12 mr-4 rounded-full"
                                    />
                                    <label htmlFor="check" className="mr-8">EA Play</label>
                                    <input
                                        type="checkbox"
                                        className="ml-8 border border-gray-500 rounded"
                                        checked={isChecked4_6}
                                        onChange={() => setIsChecked4_6(!isChecked4_6)}
                                    />
                                </div>

                                <div className="mt-4 ml-6 flex items-center">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/2048px-Steam_icon_logo.svg.png"
                                        alt="Avatar"
                                        className="w-12 h-12 mr-4 rounded-full"
                                    />
                                    <label htmlFor="check" className="mr-8">Steam</label>
                                    <input
                                        type="checkbox"
                                        className="border border-gray-500 rounded"
                                        checked={isChecked5_6}
                                        onChange={() => setIsChecked5_6(!isChecked5_6)}
                                    />
                                </div>

                                <div className="mt-4 ml-6 flex items-center">
                                    <img
                                        src="https://pics.computerbase.de/7/7/6/0/8/logo-256.png"
                                        alt="Avatar"
                                        className="w-12 h-12 mr-4 rounded-full"
                                    />
                                    <label htmlFor="check" className="mr-8">GOG</label>
                                    <input
                                        type="checkbox"
                                        className="ml-8 border border-gray-500 rounded"
                                        checked={isChecked6_6}
                                        onChange={() => setIsChecked6_6(!isChecked6_6)}
                                    />
                                </div>

                                <div className="mt-4 ml-6 flex items-center">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Epic_Games_logo.svg/516px-Epic_Games_logo.svg.png"
                                        alt="Avatar"
                                        className="w-12 h-12 mr-4 rounded-full"
                                    />
                                    <label htmlFor="check" className="mr-8">Epic Games</label>
                                    <input
                                        type="checkbox"
                                        className="ml-8 border border-gray-500 rounded"
                                        checked={isChecked7_6}
                                        onChange={() => setIsChecked7_6(!isChecked7_6)}
                                    />
                                </div>


                                <nav className="flex flex-col lg:flex-row text-center text-black w-full mt-8">
                                        
                                                <button
                                                    onClick={handleNext}
                                                    className="w-full bg-[#FFF7EB] hover:bg-[rgba(255,198,112,0.8)] hover:text-white text-lg py-2 px-4 rounded-l"
                                                >
                                                    Saltear
                                                </button>

                                                <button
                                                    onClick={handleNext}
                                                    className="w-full bg-[#FFC670] hover:bg-[rgba(237,135,3,0.8)] hover:text-white text-lg font-bold py-2 px-4 rounded-r"
                                                >
                                                    Siguiente
                                                </button>
                                    </nav>
                            </div>
                        )}

                        {/* Pregunta 7 */}
                        {currentScreen === 'questions7' && (
                            <div>
                            <div className="mt-6 text-3xl font-semibold text-black flex items-center justify-center">¡Últimas dos preguntitas! 😁 </div>
                            <div className="mt-2 mb-6 text-3xl font-semibold text-black flex items-center justify-center">¿Cuánto tiempo para jugar tenés hoy?</div>
                        
                            <div className="mt-4 ml-6 flex items-center">
                                <input
                                    type="radio"
                                    name="tiempo-jugar"
                                    className="mr-2 border border-gray-500 rounded-full"
                                    checked={isChecked1_7}
                                    onChange={() => setIsChecked1_7(!isChecked1_7)}
                                />
                                <label htmlFor="check">Menos de 30min.</label>
                            </div>
                        
                            <div className="mt-4 ml-6 flex items-center">
                                <input
                                    type="radio"
                                    name="tiempo-jugar"
                                    className="mr-2 border border-gray-500 rounded-full"
                                    checked={isChecked2_7}
                                    onChange={() => setIsChecked2_7(!isChecked2_7)}
                                />
                                <label htmlFor="check">Entre 30min. y 1hr.</label>
                            </div>
                        
                            <div className="mt-4 ml-6 flex items-center">
                                <input
                                    type="radio"
                                    name="tiempo-jugar"
                                    className="mr-2 border border-gray-500 rounded-full"
                                    checked={isChecked3_7}
                                    onChange={() => setIsChecked3_7(!isChecked3_7)}
                                />
                                <label htmlFor="check">Entre 1hr. y 3hr.</label>
                            </div>

                            <div className="mt-4 ml-6 flex items-center">
                                <input
                                    type="radio"
                                    name="tiempo-jugar"
                                    className="mr-2 border border-gray-500 rounded-full"
                                    checked={isChecked4_7}
                                    onChange={() => setIsChecked4_7(!isChecked4_7)}
                                />
                                <label htmlFor="check">Más de 3hr.</label>
                            </div>
                        
                            <nav className="flex flex-col lg:flex-row text-center text-black w-full mt-8">
                                {/* <button
                                    onClick={handleNext}
                                    className="w-full bg-[#FFF7EB] hover:bg-[rgba(255,198,112,0.8)] hover:text-white text-lg py-2 px-4 rounded-l"
                                >
                                    Saltear
                                </button> */}
                        
                                <button
                                    onClick={handleNext}
                                    className="w-full bg-[#FFC670] hover:bg-[rgba(237,135,3,0.8)] hover:text-white text-lg font-bold py-2 px-4 rounded-r"
                                >
                                    Siguiente
                                </button>
                            </nav>
                        </div>
                        )}

                        {/* Pregunta 8 */}
                        {currentScreen === 'questions8' && (
                            <div>
                            <div className="mt-6 mb-6 text-3xl font-semibold text-black flex items-center justify-center">¿En qué “mood” estás hoy? 😌</div>
                        
                            <div className="mt-4 ml-6 flex items-center">
                                <input
                                    type="radio"
                                    name="tiempo-jugar"
                                    className="mr-2 border border-gray-500 rounded-full"
                                    checked={selectedMood === 'alegre'}
                                    onChange={() => setSelectedMood('alegre')}
                                />
                                <label htmlFor="check">Alegre</label>
                            </div>
                        
                            <div className="mt-4 ml-6 flex items-center">
                                <input
                                    type="radio"
                                    name="tiempo-jugar"
                                    className="mr-2 border border-gray-500 rounded-full"
                                    checked={selectedMood === 'triste'}
                                    onChange={() => setSelectedMood('triste')}
                                />
                                <label htmlFor="check">Triste</label>
                            </div>

                        
                            <nav className="flex flex-col lg:flex-row text-center text-black w-full mt-8">
                                {/* <button
                                    onClick={handleNext}
                                    className="w-full bg-[#FFF7EB] hover:bg-[rgba(255,198,112,0.8)] hover:text-white text-lg py-2 px-4 rounded-l"
                                >
                                    Saltear
                                </button> */}
                        
                                <button
                                    onClick={handleNext}
                                    className="w-full bg-[#FFC670] hover:bg-[rgba(237,135,3,0.8)] hover:text-white text-lg font-bold py-2 px-4 rounded-r"
                                >
                                    Siguiente
                                </button>
                            </nav>
                        </div>
                        )}

                        {/* Resultado final */}
                        {currentScreen === 'fin_de_preguntas' && (
                            <div>
                                <div className="mt-6 ml-6 text-gray-900">¡Enhorabuena! 🥳</div>
                                <div className="mt-6 ml-6 text-3xl font-semibold text-black">Gracias por contestar todas las preguntas</div>
                                <p className="mt-6 ml-6 mr-6 text-lg/relaxed">
                                    A continuación te haremos un pequeño grupo de 
                                    <strong> preguntas </strong> que nos ayudarán a definir tu perfil para hacerte las
                                    <strong> mejores recomendaciones de videojuegos! </strong>
                                </p>

                                <nav className="flex flex-col lg:flex-row text-center text-black w-full mt-8">
                                    <button
                                        onClick={handleGames}
                                        className="w-full bg-[#FFC670] hover:bg-[rgba(237,135,3,0.8)] hover:text-white text-lg font-bold py-2 px-4 rounded-r"
                                    >
                                        Empezar a jugar
                                    </button>
                                </nav>

                            </div>
                        )}

                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
