import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Header */}
      <header className="pt-16 pb-24 px-6 md:px-12 border-b border-onyx-neutral">
        <span className="font-mono text-[10px] text-slate-gray mb-6 block uppercase">Inquiry Phase</span>
        <h1 className="text-5xl lg:text-7xl font-geist leading-[0.9] text-primary-black uppercase">
          Start a conversation
        </h1>
      </header>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row w-full flex-grow">
        {/* Left Column */}
        <div className="w-full lg:w-5/12 p-6 md:p-12 lg:border-r border-onyx-neutral flex flex-col">
          <span className="font-mono text-[10px] text-slate-gray mb-8 block">(availability)</span>
          <p className="text-base text-primary-black font-light leading-relaxed mb-16 max-w-sm">
            Whether you have a specific brief or just want to explore a potential partnership, I'd love to hear from you. My focus remains on high-craft digital products and editorial design.
          </p>

          <div className="mt-auto">
            <div className="w-full aspect-[4/3] bg-onyx-neutral mb-4 overflow-hidden">
              <img src="./src/assets/heroProfile.png" alt="Studio" className=" h-full object-cover opacity-90" />
            </div>
          </div>
        </div>

        {/* Right Column (Success Message) */}
        <div className="w-full lg:w-7/12 p-6 md:p-12 border-t lg:border-t-0 border-onyx-neutral flex flex-col pt-12 lg:pt-24">
          <h2 className="text-4xl lg:text-5xl font-geist text-primary-black mb-8">MESSAGE RECEIVED</h2>
          <p className="text-sm md:text-base text-primary-black font-light leading-relaxed max-w-lg mb-16">
            Thank you for reaching out. Your inquiry has been logged successfully. I typically respond within 48-72 hours.
          </p>
          <Link to="/contact" className="font-mono text-[10px] text-primary-black hover:opacity-70 transition-opacity">
            (return to works)
          </Link>
        </div>
      </div>

      {/* Pre-footer Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-onyx-neutral bg-canvas-white">
        <div className="p-8 border-b sm:border-b-0 sm:border-r border-onyx-neutral flex flex-col gap-2">
          <span className="font-mono text-[9px] text-slate-gray uppercase">DIRECT</span>
          <a href="#" className="font-mono text-[10px] text-primary-black hover:underline">(email)</a>
        </div>
        <div className="p-8 border-b sm:border-b-0 lg:border-r border-onyx-neutral flex flex-col gap-2">
          <span className="font-mono text-[9px] text-slate-gray uppercase">PROFESSIONAL</span>
          <a href="#" className="font-mono text-[10px] text-primary-black hover:underline">(linkedin)</a>
        </div>
        <div className="p-8 border-b sm:border-b-0 sm:border-r border-onyx-neutral flex flex-col gap-2">
          <span className="font-mono text-[9px] text-slate-gray uppercase">VISUALS</span>
          <a href="#" className="font-mono text-[10px] text-primary-black hover:underline">(instagram)</a>
        </div>
        <div className="p-8 flex flex-col gap-2">
          <span className="font-mono text-[9px] text-slate-gray uppercase">PORTFOLIO</span>
          <a href="#" className="font-mono text-[10px] text-primary-black hover:underline">(read.cv)</a>
        </div>
      </div>
    </div>
  );
};

export default Success;
