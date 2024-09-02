import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

export default function AboutTwo() {
    return (
        <>
            <section id="services" className='custom bg-GrayP py-20'>
                <div className='maxWidth flex flex-col items-center'>
                    <p className="text-Roxo text-xl uppercase text-center">Osteopatia</p>
                    <h1 className="text-Rosa text-4xl font-semibold uppercase text-center">A mudança acontece através do movimento, e o movimento cura!</h1>
                    <p className="text-BlueP mt-4 text-lg max-w-[900px] text-center">
                        A osteopatia é uma abordagem terapêutica que visa tratar e prevenir condições de saúde por meio de técnicas manuais. Focando na inter-relação entre o corpo, mente e espírito, nossos tratamentos promovem o equilíbrio natural do organismo, aliviando dores e restaurando a mobilidade. Seja para melhorar a postura, tratar dores crônicas, ou simplesmente cuidar do bem-estar geral, estamos aqui para guiar você em sua jornada para uma vida mais saudável e equilibrada.
                    </p>

                    <article className="flex flex-col gap-y-4 mt-10 text-BlueP lg:flex-row">
                        <ul className="max-w-[300px] flex flex-col mt-4 gap-y-2">
                            <li className="flex items-center gap-2">
                                <FontAwesomeIcon icon={faCircle} className="text-BlueP" />
                                <p className='font-semibold'>Cervicalgia</p>
                            </li>
                            <li className="flex items-center gap-2">
                                <FontAwesomeIcon icon={faCircle} className="text-BlueP" />
                                <p className='font-semibold'>Desequilíbrios musculares</p>
                            </li>
                            <li className="flex items-center gap-2">
                                <FontAwesomeIcon icon={faCircle} className="text-BlueP" />
                                <p className='font-semibold'>Disfunção da articulação temporomandibular (DTM)</p>
                            </li>
                            <li className="flex items-center gap-2">
                                <FontAwesomeIcon icon={faCircle} className="text-BlueP" />
                                <p className='font-semibold'>Disfunções viscerais</p>
                            </li>
                            <li className="flex items-center gap-2">
                                <FontAwesomeIcon icon={faCircle} className="text-BlueP" />
                                <p className='font-semibold'>Distúrbios do sistema nervoso</p>
                            </li>
                        </ul>

                        <ul className="max-w-[300px] flex flex-col gap-y-2 mt-4">
                            <li className="flex items-center gap-2">
                                <FontAwesomeIcon icon={faCircle} className="text-BlueP" />
                                <p className='font-semibold'>Cervicalgia</p>
                            </li>
                            <li className="flex items-center gap-2">
                                <FontAwesomeIcon icon={faCircle} className="text-BlueP" />
                                <p className='font-semibold'>Desequilíbrios musculares</p>
                            </li>
                            <li className="flex items-center gap-2">
                                <FontAwesomeIcon icon={faCircle} className="text-BlueP" />
                                <p className='font-semibold'>Disfunção da articulação temporomandibular (DTM)</p>
                            </li>
                            <li className="flex items-center gap-2">
                                <FontAwesomeIcon icon={faCircle} className="text-BlueP" />
                                <p className='font-semibold'>Disfunções viscerais</p>
                            </li>
                            <li className="flex items-center gap-2">
                                <FontAwesomeIcon icon={faCircle} className="text-BlueP" />
                                <p className='font-semibold'>Distúrbios do sistema nervoso</p>
                            </li>
                        </ul>

                        <ul className="max-w-[300px] flex flex-col gap-y-2 mt-4">
                            <li className="flex items-center gap-2">
                                <FontAwesomeIcon icon={faCircle} className="text-BlueP" />
                                <p className='font-semibold'>Cervicalgia</p>
                            </li>
                            <li className="flex items-center gap-2">
                                <FontAwesomeIcon icon={faCircle} className="text-BlueP" />
                                <p className='font-semibold'>Desequilíbrios musculares</p>
                            </li>
                            <li className="flex items-center gap-2">
                                <FontAwesomeIcon icon={faCircle} className="text-BlueP" />
                                <p className='font-semibold'>Disfunção da articulação temporomandibular (DTM)</p>
                            </li>
                            <li className="flex items-center gap-2">
                                <FontAwesomeIcon icon={faCircle} className="text-BlueP" />
                                <p className='font-semibold'>Disfunções viscerais</p>
                            </li>
                            <li className="flex items-center gap-2">
                                <FontAwesomeIcon icon={faCircle} className="text-BlueP" />
                                <p className='font-semibold'>Distúrbios do sistema nervoso</p>
                            </li>
                        </ul>

                        <ul className="max-w-[300px] flex flex-col gap-y-2 mt-4">
                            <li className="flex items-center gap-2">
                                <FontAwesomeIcon icon={faCircle} className="text-BlueP" />
                                <p className='font-semibold'>Cervicalgia</p>
                            </li>
                            <li className="flex items-center gap-2">
                                <FontAwesomeIcon icon={faCircle} className="text-BlueP" />
                                <p className='font-semibold'>Desequilíbrios musculares</p>
                            </li>
                            <li className="flex items-center gap-2">
                                <FontAwesomeIcon icon={faCircle} className="text-BlueP" />
                                <p className='font-semibold'>Disfunção da articulação temporomandibular (DTM)</p>
                            </li>
                            <li className="flex items-center gap-2">
                                <FontAwesomeIcon icon={faCircle} className="text-BlueP" />
                                <p className='font-semibold'>Disfunções viscerais</p>
                            </li>
                            <li className="flex items-center gap-2">
                                <FontAwesomeIcon icon={faCircle} className="text-BlueP" />
                                <p className='font-semibold'>Distúrbios do sistema nervoso</p>
                            </li>
                        </ul>
                    </article>
                    <a className="border-BlueP border text-BlueP py-2 px-4 rounded-md mt-12 uppercase hover:bg-BlueP hover:text-white" target="_blank" href="" >Agende uma sessão</a>


                </div>
            </section>
        </>
    );
}
