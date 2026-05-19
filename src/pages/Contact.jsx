import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const WEB3FORMS_ACCESS_KEY = "9d7b363a-23a5-4a01-9352-8a3f27fcba6f";

const Contact = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    data.access_key = WEB3FORMS_ACCESS_KEY;

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        navigate('/success');
      } else {
        console.error("Form submission error:", result);
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Network error:", error);
      alert("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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

        {/* Right Column (Form) */}
        <div className="w-full lg:w-7/12 p-6 md:p-12 border-t lg:border-t-0 border-onyx-neutral">
          <form onSubmit={handleSubmit} className="flex flex-col gap-12 max-w-xl">
            {/* Honeypot for spam prevention */}
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

            {/* Field 1 */}
            <div className="flex flex-col">
              <label className="font-mono text-[9px] text-slate-gray mb-4">01 / FULL NAME</label>
              <input type="text" name="name" placeholder="(your name)" required className="w-full border-b border-onyx-neutral pb-4 text-sm font-inter placeholder:text-slate-gray focus:outline-none focus:border-primary-black transition-colors" />
            </div>

            {/* Field 2 */}
            <div className="flex flex-col">
              <label className="font-mono text-[9px] text-slate-gray mb-4">02 / EMAIL ADDRESS</label>
              <input type="email" name="email" placeholder="(your@email.com)" required className="w-full border-b border-onyx-neutral pb-4 text-sm font-inter placeholder:text-slate-gray focus:outline-none focus:border-primary-black transition-colors" />
            </div>

            {/* Field 3 */}
            <div className="flex flex-col relative">
              <label className="font-mono text-[9px] text-slate-gray mb-4">03 / SUBJECT</label>
              <select name="subject" required className="w-full border-b border-onyx-neutral pb-4 text-sm font-inter text-primary-black bg-transparent appearance-none focus:outline-none focus:border-primary-black transition-colors cursor-pointer">
                <option value="" disabled selected className="text-slate-gray">(new project inquiry)</option>
                <option value="freelance">Freelance Collaboration</option>
                <option value="fulltime">Full-time Opportunity</option>
                <option value="other">Other</option>
              </select>
              <div className="absolute right-0 bottom-4 pointer-events-none">
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L5 5L9 1" stroke="#757575" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            {/* Field 4 */}
            <div className="flex flex-col">
              <label className="font-mono text-[9px] text-slate-gray mb-4">04 / MESSAGE</label>
              <textarea name="message" placeholder="(how can i help?)" required rows="4" className="w-full border-b border-onyx-neutral pb-4 text-sm font-inter placeholder:text-slate-gray focus:outline-none focus:border-primary-black transition-colors resize-none"></textarea>
            </div>

            <div className="mt-8">
              <button type="submit" disabled={isSubmitting} className="font-mono text-[10px] text-primary-black hover:opacity-70 transition-opacity disabled:opacity-40">
                {isSubmitting ? '(sending...)' : '(submit inquiry)'}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Pre-footer Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-onyx-neutral bg-canvas-white">
        <div className="p-8 border-b sm:border-b-0 sm:border-r border-onyx-neutral flex flex-col gap-2">
          <span className="font-mono text-[9px] text-slate-gray uppercase">DIRECT</span>
          <a href="mailto:rashiaggarwalofficial680@gmail.com" target="_blank" rel="noopener noreferrer" className="font-mono text-[10px] text-primary-black hover:underline">(email)</a>
        </div>
        <div className="p-8 border-b sm:border-b-0 lg:border-r border-onyx-neutral flex flex-col gap-2">
          <span className="font-mono text-[9px] text-slate-gray uppercase">PROFESSIONAL</span>
          <a href="https://www.linkedin.com/in/rashi-aggarwal-uiuxdesign/" target="_blank" rel="noopener noreferrer" className="font-mono text-[10px] text-primary-black hover:underline">(linkedin)</a>
        </div>
        <div className="p-8 border-b sm:border-b-0 sm:border-r border-onyx-neutral flex flex-col gap-2">
          <span className="font-mono text-[9px] text-slate-gray uppercase">TECHNICAL</span>
          <a href="https://github.com/rashi1227" target="_blank" rel="noopener noreferrer" className="font-mono text-[10px] text-primary-black hover:underline">(github)</a>
        </div>
        <div className="p-8 flex flex-col gap-2">
          <span className="font-mono text-[9px] text-slate-gray uppercase">PORTFOLIO</span>
          <a href="https://docs.google.com/document/d/1dd1oWsh4XPbrz3S-FNoRKiQvY4G_FjQh1hRmnAGsJlw/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="font-mono text-[10px] text-primary-black hover:underline">(resume.cv)</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
