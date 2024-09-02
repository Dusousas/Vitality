import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faSquareFacebook, faSquareInstagram, faSquareWhatsapp, } from "@fortawesome/free-brands-svg-icons";



export default function Contato() {
    return (
        <>
            <section id="contact" className='custom py-20 bg-white bgContact'>
                <div className='maxWidth'>
                    
                    <p className="text-Roxo text-xl uppercase text-center">Onde estamos?</p>
                    <h1 className="text-Rosa text-4xl font-semibold uppercase text-center">Entre em contato</h1>
                    <div className="lg:flex  gap-6 mt-20">

                        <div className="w-full md:w-1/2">
                            <h1 className="text-Roxo uppercase text-3xl text-center tracking-wide lg:text-left">Fale Conosco</h1>
                            <p className="text-center pt-6 text-Roxo lg:text-left">Não perca mais tempo e entre em contato com nossa equipe de especialistas. Teremos o mais prazer em ajudar você.</p>

                            <article className="flex items-center justify-center pt-6 gap-4 lg:justify-start ">
                                <a href="#"><FontAwesomeIcon className="text-Roxo text-3xl mb-2" icon={faSquareInstagram} /></a>
                                <a href="#"><FontAwesomeIcon className="text-Roxo text-3xl mb-2" icon={faSquareWhatsapp} /></a>
                                <a href="#"><FontAwesomeIcon className="text-Roxo text-3xl mb-2" icon={faSquareFacebook} /></a>
                            </article>

                            <div className="mt-6 flex items-center gap-2">
                                <i><FontAwesomeIcon className="text-Roxo" icon={faLocationDot} /></i>
                                <p className="text-Roxo">Rua Lorem Ipsum, Centro, 10, Brotas - SP 17380-000</p>
                            </div>

                        </div>

                        <div className="w-full md:w-1/2 flex justify-center ">
                            <form className="mt-6 border-[1px] border-Roxo rounded-md p-10 gap-4  max-w-[550px]" action="#" method="post" autoComplete="off">
                                <h1 className="text-Roxo text-xl mb-2">Formulário de contato</h1>
                                <input className="border w-full py-2 px-2 rounded-md mb-4 outline-none" placeholder="Digite seu primeiro nome*" type="text" />
                                <input className="border w-full py-2 px-2 rounded-md mb-4 outline-none" placeholder="Digite um e-mail valido*" type="email" />
                                <input className="border w-full py-2 px-2 rounded-md mb-4 outline-none" placeholder="Ex: (11)9 1234-0000*" type="tel" />
                                <textarea className="border w-full py-6 px-2 resize-none mb-4 outline-none" placeholder="Conte-nos tudo*" />
                                <button className="bg-[#313131] text-white py-2 px-9 rounded-md" type="submit">Enviar</button>
                            </form>
                        </div>
                    </div>
                
                </div>
                <iframe className="mt-20" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29535.14758046149!2d-48.1487227948338!3d-22.28202574534086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c779b1ef54476b%3A0x53ea79d1218530bb!2sBrotas%2C%20SP%2C%2017380-000!5e0!3m2!1spt-BR!2sbr!4v1725282763420!5m2!1spt-BR!2sbr" width="100%" height="400"/>
            </section>
        </>
    );
}