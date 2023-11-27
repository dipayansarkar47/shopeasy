import React from 'react'

const Contact = () => {


    return (
        <div className='bg-gradient-to-br from-green-200 via-cyan-200 to-pink-200'>
            <section className='py-20 px-10'>
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 ">
                        Contact Us
                    </h2>
                    <p className="mb-8 lg:mb-16 font-light text-center text-gray-800  sm:text-xl">
                        Got a technical issue? Want to send feedback? Need
                        details about our website? Let us know.
                    </p>

                    <form action="https://getform.io/f/9312a196-063b-4c89-83f5-0d72e236bbc0" method="POST" className="space-y-8">

                        <input type="name" id="name" name="name" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 " placeholder="Enter your name" required="" />
                        <input type="email" id="email" name="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  " placeholder="Enter your email" required="" />
                        <textarea id="message" name="message" rows={6} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 " placeholder="Leave your message..." defaultValue={""} />
                        <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-black sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
                    </form>


                </div>
            </section>

        </div>
    )
}

export default Contact