import React from 'react'

const Contact = () => {
  return (
    <footer id="contact" className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Let's build something meaningful together.
        </h2>
        
        <div className="space-y-6 mb-12">
          <div>
            <a
              href="mailto:mahnoorrizwan411@gmail.com"
              className="text-xl md:text-2xl text-gray-700 hover:text-gray-900 transition-colors duration-300 inline-block"
            >
              mahnoorrizwan411@gmail.com
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <a
              href="https://www.linkedin.com/in/mahnoor-rizwan"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-800 text-white rounded-full font-medium hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/mahnoor-rizwan"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-gray-800 rounded-full font-medium hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-gray-200"
            >
              GitHub
            </a>
            <button
              onClick={() => {
                const link = document.createElement('a')
                link.href = '#'
                link.download = 'Mahnoor_Rizwan_CV.pdf'
                link.click()
              }}
              className="px-6 py-3 bg-gradient-to-r from-peach to-lavender text-gray-800 rounded-full font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              CV
            </button>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200">
          <p className="text-gray-600">
            © {new Date().getFullYear()} Mahnoor Rizwan. Built with React, Vite & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Contact

