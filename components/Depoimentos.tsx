export default function Depoimentos() {
    return (
        <>
            <section id="depo" className='custom py-20 bgDepo'>
                <div className='maxWidth'>
                    <p className="text-BlueP text-xl uppercase text-center">Depoimentos</p>
                    <h1 className="text-GreenS text-4xl font-semibold uppercase text-center">O que dizem os nossos clientes:</h1>

                    <div className="flex flex-col gap-y-8 items-center justify-center gap-x-8 mt-20 lg:flex-row">
                        <article className="bg-white py-8 px-4 rounded-md flex flex-col justify-center items-center max-w-[400px]">
                            <div className="">
                                <img src="/depo01.png" alt="" />
                            </div>
                            <h1 className="text-BlueP font-semibold mt-2">Ana Laura</h1>
                            <p className="text-BlueP mt-4 text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio ad excepturi sequi qui vitae necessitatibus temporibus debitis illo nisi minima, inventore nulla voluptates molestiae magnam harum ab saepe ipsa totam impedit suscipit! Exercitationem porro nemo, minus laboriosam unde corrupti autem quaerat quia quisquam eos architecto, culpa nesciunt, similique ut. Suscipit.</p>
                        </article>

                        <article className="bg-white py-8 px-4 rounded-md flex flex-col justify-center items-center max-w-[400px]">
                            <div className="">
                                <img src="/depo01.png" alt="" />
                            </div>
                            <h1 className="text-BlueP font-semibold mt-2">Ana Laura</h1>
                            <p className="text-BlueP mt-4 text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio ad excepturi sequi qui vitae necessitatibus temporibus debitis illo nisi minima, inventore nulla voluptates molestiae magnam harum ab saepe ipsa totam impedit suscipit! Exercitationem porro nemo, minus laboriosam unde corrupti autem quaerat quia quisquam eos architecto, culpa nesciunt, similique ut. Suscipit.</p>
                        </article>

                        <article className="bg-white py-8 px-4 rounded-md flex flex-col justify-center items-center max-w-[400px]">
                            <div className="">
                                <img src="/depo01.png" alt="" />
                            </div>
                            <h1 className="text-BlueP font-semibold mt-2">Ana Laura</h1>
                            <p className="text-BlueP mt-4 text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio ad excepturi sequi qui vitae necessitatibus temporibus debitis illo nisi minima, inventore nulla voluptates molestiae magnam harum ab saepe ipsa totam impedit suscipit! Exercitationem porro nemo, minus laboriosam unde corrupti autem quaerat quia quisquam eos architecto, culpa nesciunt, similique ut. Suscipit.</p>
                        </article>
                    </div>


                </div>
            </section>
        </>
    );
}