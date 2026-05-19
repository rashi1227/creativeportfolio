import rashiimg2 from '../assets/rashiimg2.JPG';

const Footer = () => {
  return (
    <footer className="w-full border-t border-charcoal bg-taupe grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-charcoal">
      {/* Left Block */}
      <div className="p-8 md:p-12">
        <h4 className="font-mono text-xs uppercase tracking-widest mb-8">Editor's Last Word</h4>
        <p className="font-mono text-xs leading-relaxed mb-8 max-w-md">
          This digital newspaper is more than a curated collection of pixels; it is an editorial exploration of how we interact with information. The brutally crisp borders, the structured typography, and the absence of superfluous decoration are intentional choices meant to echo the discipline of print media while embracing the fluidity of the web.
        </p>
        <div className="flex gap-4 items-start">
          <div className="w-20 h-24 border border-charcoal shrink-0">
            <img src={rashiimg2} alt="Profile" className="w-full h-full object-cover opacity-80" />
          </div>
          <p className="font-mono text-xs leading-relaxed max-w-[250px] mt-2 italic opacity-80">
            "If you've made it this far, your patience deserves a medal, or at least a coffee on me."
          </p>
        </div>
        <div className="mt-12">
          <h2 className="font-serif text-3xl mb-1 tracking-tight">Rashi Aggarwal</h2>
          <span className="font-mono text-[10px] uppercase tracking-widest">[LE FOLIO]</span>
        </div>
      </div>

      {/* Right Block */}
      <div className="p-8 md:p-12 flex flex-col justify-between">
        <div>
          <h4 className="font-mono text-xs uppercase tracking-widest mb-8">Enjoyed This Issue?</h4>
          <div className="border-t border-charcoal text-xs font-mono">
            <div className="grid grid-cols-[120px_1fr] py-4 border-b border-charcoal">
              <span className="opacity-60">ROUTE TO:</span>
              <a href="mailto:rashiaggarwalofficial680@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:bg-charcoal hover:text-newsprint px-2 py-1 transition-colors -ml-2 w-max">rashiaggarwalofficial680@gmail.com</a>
            </div>
            <div className="grid grid-cols-[120px_1fr] py-4 border-b border-charcoal">
              <span className="opacity-60">BASED IN:</span>
              <span>DELHI / INDIA</span>
            </div>
            <div className="grid grid-cols-[120px_1fr] py-4 border-b border-charcoal">
              <span className="opacity-60">NOTICE:</span>
              <span>CURRENTLY OPEN TO ROLES IN INDIA.</span>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          {[
            { name: 'LINKEDIN', url: 'https://www.linkedin.com/in/rashi-aggarwal-uiuxdesign/' },
            { name: 'GITHUB', url: 'https://github.com/rashi1227' }
          ].map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-charcoal px-4 py-3 font-mono text-[10px] uppercase tracking-widest hover:bg-charcoal hover:text-newsprint transition-colors"
            >
              {social.name}
            </a>
          ))}
        </div>

        <div className="mt-12 text-[9px] font-mono opacity-50 uppercase tracking-widest text-right">
          ALL ARTIFACTS SCRAPED, RESERVED & ARCHIVED.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
