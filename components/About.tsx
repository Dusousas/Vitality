export default function About() {
    return (
        <>
            <section id="about" className='custom bg-white py-20'>
                <div className='maxWidth flex flex-col items-center gap-28 lg:flex-row lg:justify-center'>

                    <article className="flex justify-center">
                        <img className="rounded " src="/About1.jpg" alt="" />
                    </article>

                    <article className=" w-full text-center lg:w-1/3 lg:max-w-[600px] lg:text-left">
                        <h1 className="text-BlueP text-3xl">A Clínica Vida Leve nasceu da paixão e determinação da Dra. Marina Ragassi, fisioterapeuta especialista em Osteopatia, com mais de 5 anos de carreira.</h1>
                        <p className="text-BlueP mt-6 text-lg">Sua paixão pela Osteopatia transborda em cada atendimento, em cada toque, e em cada história de sucesso de seus pacientes. Osteopatia, como ela define, não é apenas "tirar a dor com a mão", mas é uma abordagem holística que busca equilibrar o corpo, melhorando sua função e utilizando as imensas e diversas conexões que ele possui.</p>
                        <p className="text-BlueP mt-4 text-lg">Aqui, cada paciente é tratado com exclusividade, com sessões de até uma hora, garantindo um atendimento de excelência, individualizado e focado nas necessidades específicas de cada um. Na Clínica Vida Leve, a crença é simples: "Tudo que fazemos com amor, dá certo." E esta filosofia é evidente em cada tratamento, cada sorriso de alívio e em cada história de transformação que a clínica tem o prazer de fazer parte.</p>
                   <div className="border mt-6 border-BlueP" />
                    </article>

                </div>
            </section>
        </>
    );
}