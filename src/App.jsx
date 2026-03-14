import Gallery from './components/Gallery'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar */}
      <nav className="h-16 bg-white border-b border-gray-100 flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="font-bold text-xl text-gray-900 tracking-tight">Celebrare</span>
          </div>
          <div className="flex gap-4">
             <span className="text-sm font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded-full">Frontend Assignment</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <Gallery />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400 text-xs font-medium uppercase tracking-widest">
            React Internship Assignment • Photo Gallery Web App
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
