const Subscribe = () => {
  return (
    <section className="max-container bg-gray-100 w-full flex flex-col items-center p-6">
      <h2 className="text-3xl leading-normal font-bold font-Archivo mb-2">JOIN OUR COMMUNITY</h2>
      <p className="text-center text-sm font-montserrat mb-4">Be the first to hear about all the exclusive offers and latest news</p>
      
      <div className="flex w-full max-w-md border border-gray-200 rounded-none overflow-hidden">
        <label htmlFor="email-input" className="sr-only">Email address</label>
        <input 
          type="email" 
          id="email-input" 
          className="py-4 px-5 block w-full rounded-none text-sm border-none" 
          placeholder="you@site.com"
        />
        <button 
          type="submit" 
          className="bg-white text-black px-7 py-4 text-sm font-light border-l border-gray-200 font-montserrat hover:bg-gray-100 rounded-none"
        >
          Subscribe
        </button>
      </div>
    </section>
  )
}

export default Subscribe;
