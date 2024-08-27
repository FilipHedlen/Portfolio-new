const ProjectCards = () => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800">
      <img className="w-full h-48 object-cover" src="/light-logo.png" alt="Project Thumbnail" />
      <div className="p-6">
        <div className="font-bold text-2xl mb-2 text-gray-900 dark:text-gray-100">FrostPeak Explorer</div>
        <p className="text-gray-700 dark:text-gray-300 text-base">
          Degree project from my education at Medieinstitutet.
        </p>
      </div>
      <div className="px-6 py-4 flex justify-between">
        <a 
          href="https://frostpeak-explorer.onrender.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white rounded-full px-4 py-2 text-sm font-semibold transition duration-300"
        >
          Live Page
        </a>
        <a
          href="https://github.com/FilipHedlen/FrostPeak"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gray-700 hover:bg-gray-800 text-white rounded-full px-4 py-2 text-sm font-semibold transition duration-300"
        >
          Code
        </a>
      </div>
    </div>
  );
}

export default ProjectCards;