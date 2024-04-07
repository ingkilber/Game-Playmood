import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link, Head } from '@inertiajs/react';
import { useState } from 'react';

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
    const [isChecked2_5, setIsChecked2_5] = useState(false);

    const handleNext = () => {
        if (currentScreen === 'welcome') {
            setCurrentScreen('questions'); // Cambia a la primera pantalla de preguntas
            setCurrentQuestionNumber(currentQuestionNumber + 1);
        } else if (currentScreen === 'questions') {
            setCurrentScreen('questions2'); // Cambia a la segunda pantalla de preguntas
            setCurrentQuestionNumber(currentQuestionNumber + 1);
        } else if (currentScreen === 'questions2') {
            setCurrentScreen('questions3'); // Cambia a la segunda pantalla de preguntas
            setCurrentQuestionNumber(currentQuestionNumber + 1);
        } else if (currentScreen === 'questions3') {
            setCurrentScreen('questions4'); // Cambia a la segunda pantalla de preguntas
            setCurrentQuestionNumber(currentQuestionNumber + 1);
        } else if (currentScreen === 'questions4') {
            setCurrentScreen('questions5'); // Cambia a la segunda pantalla de preguntas
            setCurrentQuestionNumber(currentQuestionNumber + 1);
        } else {
            // Lógica para continuar después de responder preguntas
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            // header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Bienvenido</h2>}
        >
            <Head title="Inicio" />

            <div className="py-12">
                <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">

                {currentQuestionNumber >= '1' && (
                    <div className="flex items-center justify-end mt-2 mr-4 mb-2">Pregunta {currentQuestionNumber}-12</div>
                )}
            
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg ">
                    {currentScreen === 'welcome' && (
                            <div>
                                <div className="mt-6 ml-6 text-gray-900">Gracias por registrarte 👋</div>
                                <div className="mt-6 ml-6 text-3xl font-semibold text-black">¡Bienvenido!</div>
                                <p className="mt-6 ml-6 mr-6 text-lg/relaxed">
                                    A continuación te haremos un pequeño grupo de 
                                    <strong> preguntas </strong> que nos ayudarán a definir tu perfil para hacerte las 
                                    <strong> mejores recomendaciones de videojuegos! </strong>
                                </p>
                                <div className="flex items-center justify-center mt-4 p-6">
                                    <PrimaryButton
                                        className="w-full bg-[#ED8703] hover:bg-[rgba(237,135,3,0.8)] hover:bg-gray-400 text-lg rounded justify-center"
                                        onClick={handleNext}
                                    >
                                        Continuar
                                    </PrimaryButton>
                                </div>
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
                                    <label htmlFor="check">Role-Playing (RPG, JRPG, Rogue-Like, etc.)</label>
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
                                                    className="w-full bg-[#FFF7EB] hover:bg-[rgba(255,198,112,0.8)] hover:bg-gray-400 hover:text-white text-lg py-2 px-4 rounded-l"
                                                >
                                                    Saltear
                                                </button>

                                                <button
                                                    onClick={handleNext}
                                                    className="w-full bg-[#FFC670] hover:bg-[rgba(237,135,3,0.8)] hover:bg-gray-400 hover:text-white text-lg font-bold py-2 px-4 rounded-r"
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
                                                    className="w-full bg-[#FFF7EB] hover:bg-[rgba(255,198,112,0.8)] hover:bg-gray-400 hover:text-white text-lg py-2 px-4 rounded-l"
                                                >
                                                    Saltear
                                                </button>

                                                <button
                                                    onClick={handleNext}
                                                    className="w-full bg-[#FFC670] hover:bg-[rgba(237,135,3,0.8)] hover:bg-gray-400 hover:text-white text-lg font-bold py-2 px-4 rounded-r"
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
                                                    className="w-full bg-[#FFF7EB] hover:bg-[rgba(255,198,112,0.8)] hover:bg-gray-400 hover:text-white text-lg py-2 px-4 rounded-l"
                                                >
                                                    Saltear
                                                </button>

                                                <button
                                                    onClick={handleNext}
                                                    className="w-full bg-[#FFC670] hover:bg-[rgba(237,135,3,0.8)] hover:bg-gray-400 hover:text-white text-lg font-bold py-2 px-4 rounded-r"
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
                                                    className="w-full bg-[#FFF7EB] hover:bg-[rgba(255,198,112,0.8)] hover:bg-gray-400 hover:text-white text-lg py-2 px-4 rounded-l"
                                                >
                                                    Saltear
                                                </button>

                                                <button
                                                    onClick={handleNext}
                                                    className="w-full bg-[#FFC670] hover:bg-[rgba(237,135,3,0.8)] hover:bg-gray-400 hover:text-white text-lg font-bold py-2 px-4 rounded-r"
                                                >
                                                    Siguiente
                                                </button>
                                    </nav>
                            </div>
                        )}

                        {/* Pregunta 5 */}
                        {currentScreen === 'questions5' && (
                            <div>
                                <div className="mt-6 mb-6 text-3xl font-semibold text-black flex items-center justify-center">¿Te gusta tener las quinta pregunta?</div>

                                <div className="mt-4 ml-6 flex items-center">
                                    <input
                                        type="checkbox"
                                        className="mr-2 border border-gray-500 rounded"
                                        checked={isChecked1_5}
                                        onChange={() => setIsChecked1_5(!isChecked1_5)}
                                    />
                                    <label htmlFor="check">Si </label>
                                </div>

                                <div className="mt-4 ml-6 flex items-center">
                                    <input
                                        type="checkbox"
                                        className="mr-2 border border-gray-500 rounded"
                                        checked={isChecked2_5}
                                        onChange={() => setIsChecked2_5(!isChecked2_5)}
                                    />
                                    <label htmlFor="check">No</label>
                                </div>

                                <nav className="flex flex-col lg:flex-row text-center text-black w-full mt-8">
                                        
                                                <button
                                                    onClick={handleNext}
                                                    className="w-full bg-[#FFF7EB] hover:bg-[rgba(255,198,112,0.8)] hover:bg-gray-400 hover:text-white text-lg py-2 px-4 rounded-l"
                                                >
                                                    Saltear
                                                </button>

                                                <button
                                                    onClick={handleNext}
                                                    className="w-full bg-[#FFC670] hover:bg-[rgba(237,135,3,0.8)] hover:bg-gray-400 hover:text-white text-lg font-bold py-2 px-4 rounded-r"
                                                >
                                                    Siguiente
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
