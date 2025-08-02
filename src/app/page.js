import Banner from './components/Banner'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Gallery from './components/Gallery'
import Services from './components/Services'
import WhatsAppButton from './components/WhatsAppButton'

export default function Home () {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Banner />
      </div>
      <div>
        <Services />
      </div>
      <div>
        <Gallery />
      </div>
      <div>
        <ContactForm />
      </div>
      <div>
        <WhatsAppButton />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}
