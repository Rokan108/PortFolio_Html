
import Navbar from './components/Navbar'
import DarkVeil from './components/reactbit/DarkVeil'
import Footer from './components/Footer'
import ScrollToTopButton from './components/ScrollToTopButton'
import Contact from './sections/Contact'
import TechStackSection from './sections/TechStackSection'
import HeroSection from './sections/HeroSection'
const App = () => {
  return (
    <>


      <Navbar />
      <div className="relative min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fixed inset-0 -z-10">
          <DarkVeil />
        </div>
        <main className="relative z-10 flex flex-col justify-items-center justify-center py-24 space-y-6">
          <section id='hero'>
            <HeroSection/>
          </section>
          
          <button className="btn-primary">Explore Projects</button>
          <TechStackSection/>
          <section id='contact'>
          <Contact />
          </section>
        </main>
      </div>
      <ScrollToTopButton />
      <section id="footer">
        <Footer />
      </section>
    </>
  )
}

export default App
