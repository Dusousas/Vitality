import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import React from 'react';

const NavBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.6
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, options);

        sections.forEach(section => {
            observer.observe(section);
        });

        return () => {
            sections.forEach(section => {
                observer.unobserve(section);
            });
        };
    }, []);

    return (
        <>
            <header className=" py-3 bg-white fixed w-full z-20">
                <div className="flex justify-between items-center maxWidth">

                    <div>
                        <a className='text-black' href=""><img className='w-[80px]' src="/Logo.png" alt="" /></a>
                    </div>
                    <div className="lg:hidden">
                        <button onClick={toggleMenu} className="text-black focus:outline-none">
                            <svg className="w-8 h-8 hover:text-GreenP" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>

                    <nav className={`lg:flex ${isOpen ? 'block' : 'hidden'} custom-height text-center  bg-GreenP flex flex-col gap-10 items-center justify-center  absolute left-0 z-10 top-[68px] uppercase w-full lg:flex lg:h-[39px] lg:flex-row lg:static lg:w-auto lg:bg-transparent`}>
                            <ScrollLink duration={500} offset={-92} to='inicio' smooth={true} onClick={closeMenu}>
                                <span className={`block  py-2 cursor-pointer text-GreenS ${activeSection === 'inicio' ? 'border-b-[2px] lg:border-GreenP' : ''}`}>Início</span>
                            </ScrollLink>

                            <ScrollLink duration={500} offset={-80} to='about' smooth={true} onClick={closeMenu}>
                                <span className={`block  py-2 cursor-pointer text-GreenS ${activeSection === 'about' ? 'border-b-[2px] lg:border-GreenP' : ''}`}>Sobre nós</span>
                            </ScrollLink>

                            <ScrollLink duration={500} offset={-80} to='services' smooth={true} onClick={closeMenu}>
                                <span className={`block  py-2 cursor-pointer text-GreenS ${activeSection === 'services' ? 'border-b-[2px] lg:border-GreenP' : ''}`}>Serviços</span>
                            </ScrollLink>

                            <ScrollLink duration={500} offset={0} to='depo' smooth={true} onClick={closeMenu}>
                                <span className={`block  py-2 cursor-pointer text-GreenS ${activeSection === 'depo' ? 'border-b-[2px] lg:border-GreenP' : ''}`}>Depoimentos</span>
                            </ScrollLink>

                            <ScrollLink duration={500} offset={0} to='contact' smooth={true} onClick={closeMenu}>
                                <span className={`block  py-2 cursor-pointer text-GreenS ${activeSection === 'contact' ? 'border-b-[2px] lg:border-GreenP' : ''}`}>Contato</span>
                            </ScrollLink>
                    </nav>

                </div>
            </header>
        </>
    );
};

export default NavBar;
