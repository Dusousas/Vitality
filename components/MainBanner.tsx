export default function MainBanner() {
    return (
        <>
            <section id="inicio" className='custom bg-GrayP py-20'>
                <div className='maxWidth flex flex-col justify-center items-center gap-y-10 lg:flex-row gap-x-10 '>

                    <article className="flex flex-col max-w-[450px] justify-center items-center text-center gap-y-2 lg:text-left lg:flex-row lg:w-full lg:items-start lg:gap-x-2">
                        <div className="w-[20%] flex justify-center lg:mt-1">
                            <img className="" src="/coracao.png" alt="" />
                        </div>
                        <div className="">
                            <h1 className="text-BlueP text-2xl font-bold">Saúde</h1>
                            <p className="text-BlueP mt-2">Nós cuidamos da sua saúde de forma abrangente, focando na prevenção e no equilíbrio do corpo e da mente de forma integral.</p>
                        </div>
                    </article>

                    <article className="flex flex-col max-w-[450px] justify-center items-center text-center gap-y-2 lg:text-left lg:flex-row lg:w-full lg:items-start lg:gap-x-2">
                        <div className="w-[20%] flex justify-center ">
                            <img className="" src="/batimento.png" alt="" />
                        </div>
                        <div>
                            <h1 className="text-BlueP text-2xl font-bold">Performance</h1>
                            <p className="text-BlueP mt-2 ">Nosso compromisso é ajudá-lo a atingir seu máximo potencial, seja você um atleta ou alguém em busca de um desempenho no dia a dia.</p>
                        </div>
                    </article>

                    <article className="flex flex-col max-w-[450px] justify-center items-center text-center gap-y-2 lg:text-left lg:flex-row lg:w-full lg:items-start lg:gap-x-2">
                        <div className="w-[20%] flex justify-center lg:mt-1">
                            <img className="" src="/escudo.png" alt="" />
                        </div>
                        <div>
                            <h1 className="text-BlueP text-2xl font-bold">Alimentação</h1>
                            <p className="text-BlueP mt-2">Valorizamos a alimentação como um alicerce para a saúde e o bem-estar, oferecendo orientações personalizadas para suas escolhas alimentares.</p>
                        </div>
                    </article>

                </div>
            </section>
        </>
    );
}