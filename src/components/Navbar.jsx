import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const isCaseStudy = location.pathname.includes('/works/');

  const currentDate = new Date().toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric'
  }).toUpperCase();

  return (
    <header className="w-full flex flex-col bg-newsprint text-charcoal">
      {/* Masthead */}
      {!isCaseStudy && (
        <div className="w-full py-8 md:py-12 flex justify-center items-center">
          <Link to="/" className="font-serif text-5xl md:text-8xl tracking-tighter uppercase text-center leading-none">
            Rashi Le Folio
          </Link>
        </div>
      )}

      {/* Sub-header row */}
      <div className={`w-full flex justify-between items-center py-3 px-6 md:px-12 border-y border-charcoal font-mono text-[10px] tracking-widest uppercase ${isCaseStudy ? 'mt-8' : ''}`}>
        <div className="flex gap-6">
          {isCaseStudy ? (
            <span className="font-semibold text-terracotta">RASHI LE FOLIO / CASE STUDY</span>
          ) : (
            <>
              <span className="font-semibold">VOL. IV - ISSUE III</span>
              <span className="hidden md:inline">DATE: {currentDate}</span>
            </>
          )}
        </div>
        <nav className="flex gap-6">
          {isCaseStudy ? (
            <>
              <Link to="/" className="hover:text-terracotta transition-colors">ABOUT</Link>
              <Link to="/" className="hover:text-terracotta transition-colors">RESUME</Link>
              <Link to="/contact" className="hover:text-terracotta transition-colors">CONTACT</Link>
            </>
          ) : (
            <>
              <Link to="/" className="hover:text-terracotta transition-colors">ABOUT</Link>
              <Link to="/resume" className="hover:text-terracotta transition-colors">RESUME</Link>
              <Link to="/contact" className="hover:text-terracotta transition-colors">CONTACT</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
