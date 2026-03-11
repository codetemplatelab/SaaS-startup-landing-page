import Navbar from "../sections/Navbar.jsx";
import Footer from "../sections/Footer.jsx";

const SiteLayout = ({ children }) => (
  <div id="top" className="min-h-screen bg-base-50 text-base-900">
    <Navbar />
    <main>{children}</main>
    <Footer />
  </div>
);

export default SiteLayout;
