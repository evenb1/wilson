const Subscribe = () => {
  return (
    <section className="max-container bg-gray-100 w-full flex flex-col items-center p-6">
      <h2 className="text-3xl leading-normal font-bold font-Archivo mb-2">JOIN OUR COMMUNITY</h2>
      <p className="text-center mb-4">Be the first to hear about all the exclusive offers and latest news and events from Dunlop Sports.</p>
      
      <div className="flex w-full max-w-md border  rounded-lg overflow-hidden">
        <label htmlFor="email-input" className="sr-only">Email address</label>
        <input 
          type="email" 
          id="email-input" 
          className="py-3 px-4 block w-full border-none rounded-none text-sm focus:ring-blue-500 focus:outline-none dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500" 
          placeholder="you@site.com"
        />
        <button 
          type="submit" 
          className="bg-blue-600 text-white px-6 py-3 text-sm font-semibold hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
        >
          Subscribe
        </button>
      </div>
    </section>
  )
}

export default Subscribe;
