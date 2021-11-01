import Globals from '../abstracts/Globals';
import { AppProvider } from '../context/context';
import Navbar from '../components/shared/Navbar';
import MobileMenu from '../components/shared/MobileMenu';
import Footer from '../components/shared/Footer';

export default function App({ Component, pageProps }) {
  return (
    <>
      <AppProvider>
        <Globals />
        <Navbar />
        <MobileMenu />
        <Component {...pageProps} />
        <Footer />
      </AppProvider>
    </>
  );
}
