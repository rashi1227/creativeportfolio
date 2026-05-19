import { Link } from 'react-router-dom';
import rashiimg from '../assets/rashiimg.jpg';
import flutterForward from '../assets/Flutter Forward.png';
import express from '../assets/Express.webp';
import cloudJam from '../assets/CloudJam.webp';
import joinGDSC from '../assets/JoinGDSC.jpg';
import ecommerce from '../assets/ecommerce.png';

const Home = () => {
  return (
    <div className="flex flex-col w-full bg-newsprint">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row w-full border-b border-charcoal">
        {/* Left Column */}
        <div className="w-full lg:w-[55%] flex flex-col justify-center px-6 md:px-12 py-16 md:py-24 border-b lg:border-b-0 lg:border-r border-charcoal">
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.9] text-terracotta font-serif mb-12 tracking-tighter">
            THE HYBRID ENGINEER<br />REWIRING THE TECH-CREATIVE FRONTIER<br />IN PROGRESS
          </h1>
          <div className="columns-1 md:columns-2 gap-8 text-xs font-mono leading-relaxed">
            <p className="first-letter:text-5xl first-letter:font-serif first-letter:float-left first-letter:mr-2 first-letter:-mt-2">
              In a tech landscape dominated by dense codebases, New Delhi-based IT engineer Rashi Aggarwal is forging a different path. A B.Tech Information Technology graduate from BVCOE, Aggarwal has built a reputation for transforming complex backend data into elegant, human-centric user experiences.
              Her career strikes a deliberate balance between core engineering and product design. As a software intern at MPC Cloud Consulting, she optimized enterprise data management pipelines to drive a 20% boost in operational efficiency. Transitioning to the frontend, she engineered Cloud-FileHub—a mobile-first, enterprise-grade cloud management layout—and designed an AI Interview Coach that seamlessly maps complex performance metrics into intuitive user dashboards.
            </p>
            <p className="mt-4 md:mt-0">
              Aggarwal's impact extends heavily into design operations and community leadership. As the UI/UX Executive for GDSC BVP, she unified the digital brand identity and visual assets for CodeClash, a high-velocity 24-hour hackathon. Furthermore, at the Smart India Hackathon, she engineered a scalable AI chatbot for real-time health assessments while providing hands-on technical mentorship to a massive cohort of over 2,000 student developers.
              Equipped with an agile development stack spanning Java, React, Next.js, and Figma, Aggarwal consistently proves that software scaling is inherently design-driven. For modern engineering teams, she represents the vital, dual-threat talent needed to bridge the gap between abstract logic and frictionless user interfaces.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-[45%] h-[60vh] lg:h-auto relative bg-charcoal p-4 md:p-8 flex items-center justify-center">
          <div className="absolute top-8 right-8 z-10 w-24 h-24 rounded-full bg-newsprint text-terracotta border border-terracotta flex items-center justify-center text-center transform rotate-12 text-[10px] font-mono leading-tight hover:scale-105 hover:-rotate-12 transition-transform cursor-pointer">
            <a href="https://docs.google.com/document/d/1dd1oWsh4XPbrz3S-FNoRKiQvY4G_FjQh1hRmnAGsJlw/edit?usp=sharing" target="_blank">DOWNLOAD<br />RESUME<br />PDF</a>
          </div>
          <img
            src={rashiimg}
            alt="Portrait"
            className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-90 p-1"
          />
        </div>
      </section>

      {/* Featured Section */}
      <section className="flex flex-col w-full border-b border-charcoal py-16 md:py-24">
        <div className="px-6 md:px-12 mb-16 text-center">
          <span className="font-mono text-[10px] tracking-widest uppercase block mb-4">FEATURED</span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif tracking-tight max-w-5xl mx-auto leading-none">
            <span className="text-terracotta">3-Step Checkout, 40% Growth:</span> How an E-Commerce Overhaul Turned Transaction Friction into a Conversion Machine
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row px-6 md:px-12 gap-8 lg:gap-16 items-center lg:items-start max-w-7xl mx-auto w-full">
          {/* Left Mockup */}
          <div className="w-full lg:w-1/2 bg-taupe p-8 border border-charcoal flex justify-center">
            <img
              src={ecommerce}
              alt="App Mockup"
              className=" h-auto grayscale contrast-125 shadow-2xl"
            />
          </div>
          {/* Right Text */}
          <div className="w-full lg:w-1/2 flex flex-col pt-8 lg:pt-16">
            <h3 className="font-serif text-5xl md:text-7xl mb-8 tracking-tighter uppercase">CHECKOUT FUNNEL</h3>
            <div className="flex flex-col md:flex-row gap-6 border-l border-charcoal/30 pl-6">
              <div className="w-full md:w-1/2 font-mono text-xs leading-relaxed">
                <p>
                  The checkout sequence, historically a major drop-off point with high friction, was hiding a clear user experience trap: rigid, multi-screen forms were exhausting mobile shoppers. Re-architecting the checkout flow into an intuitive, responsive system proved that minimizing layout step counts yields immediate business returns. Users completed transactions faster, reducing cart abandonment and scaling conversion metrics across all devices.
                </p>
                <div className="mt-8">
                  <Link to="/works/checkout-funnel" className="border border-charcoal px-6 py-3 font-mono text-[10px] uppercase tracking-widest hover:bg-charcoal hover:text-newsprint transition-colors inline-block">
                    [VIEW CASE STUDY]
                  </Link>
                </div>
              </div>
              <div className="w-full md:w-1/2 font-mono text-xs leading-relaxed text-terracotta mt-4 md:mt-0">
                "THIS WASN'T JUST A VISUAL OVERHAUL; IT WAS A STRATEGIC FOCUS ON DRIVING USER CONVERSION AT EVERY SINGLE TOUCHPOINT."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editor's Picks */}
      <section className="py-16 md:py-24 border-b border-charcoal">
        <div className="px-6 md:px-12 flex justify-between items-center mb-16 border-b border-charcoal pb-4">
          <h2 className="font-mono text-xs uppercase tracking-widest">Editor's Picks</h2>
          <span className="font-mono text-[10px] uppercase opacity-50">CURATED SELECTION // 04</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-12">
          {/* Pick 1 */}
          <div className="flex flex-col border border-charcoal group">
            <div className="bg-terracotta text-newsprint p-4 font-serif text-xl leading-tight border-b border-charcoal">
              One Codebase, Unified Experience: How GDSC BVP Scaled Cross-Platform Technical Literacy via Flutter Forward
            </div>
            <div className="p-4 bg-taupe border-b border-charcoal h-64 overflow-hidden relative flex items-center justify-center">
              <img src={flutterForward} className=" grayscale mix-blend-multiply transition-transform duration-700 group-hover:scale-105 opacity-80" />
            </div>
            <div className="p-4 font-mono text-[10px] leading-relaxed flex-grow flex flex-col justify-between">
              <p className="mb-8">
                How multi-channel promotional roadmaps and structured technical workflows for student workshops revealed key insights - widespread friction for developers entering cross-platform deployment, single-codebase parity as a visual asset catalyst, and collaborative hands-on mentorship as critical to deliver.
              </p>
              <div className="mt-auto">
                <a href={flutterForward} target='_blank' rel='noreferrer' className="uppercase tracking-widest border-b border-charcoal hover:text-terracotta transition-colors pb-1">
                  [VIEW PROJECT]
                </a>
              </div>
            </div>
          </div>

          {/* Pick 2 */}
          <div className="flex flex-col border border-charcoal group">
            <div className="bg-terracotta text-newsprint p-4 font-serif text-xl leading-tight border-b border-charcoal">
              Cross-Committee Alignment, Seamless Execution: How EXPRESS’22 Intersected Technical and Cultural Networks for an Optimized Student Experience
            </div>
            <div className="p-4 bg-charcoal border-b border-charcoal h-64 overflow-hidden relative flex items-center justify-center">
              <img src={express} className=" grayscale mix-blend-multiply transition-transform duration-700 group-hover:scale-105 opacity-80" />
            </div>
            <div className="p-4 font-mono text-[10px] leading-relaxed flex-grow flex flex-col justify-between">
              <p className="mb-8">
                In a world where trust is paramount, Truecaller's verified campaigns act as a new standard for business communication. This initiative introduced a seamless, authoritative design.
              </p>
              <div className="mt-auto">
                <a href={express} target='_blank' rel='noreferrer' className="uppercase tracking-widest border-b border-charcoal hover:text-terracotta transition-colors pb-1">
                  [VIEW PROJECT]
                </a>
              </div>
            </div>
          </div>

          {/* Pick 3 */}
          <div className="flex flex-col border border-charcoal group">
            <div className="bg-terracotta text-newsprint p-4 font-serif text-xl leading-tight border-b border-charcoal">
              Democratizing Cloud & AI: How GDSC BVP Designed a Scaled Learning Campaign for the Google Cloud Study Jam
            </div>
            <div className="p-4 bg-charcoal border-b border-charcoal h-64 overflow-hidden relative flex items-center justify-center">
              <img src={cloudJam} className="w-2/3 grayscale contrast-125 transition-transform duration-700 group-hover:scale-105 opacity-80" />
            </div>
            <div className="p-4 font-mono text-[10px] leading-relaxed flex-grow flex flex-col justify-between">
              <p className="mb-8">
                How multi-week digital education roadmaps and gamified progress tracking for Cloud and Generative AI foundational tracks revealed key insights — initial technical friction in cloud sandbox environments, milestone-based skill badges as a major driver for sustained student retention, and continuous community-led troubleshooting frameworks being critical to deliver.
              </p>
              <div className="mt-auto">
                <a href={cloudJam} target='_blank' rel='noreferrer' className="uppercase tracking-widest border-b border-charcoal hover:text-terracotta transition-colors pb-1">
                  [VIEW PROJECT]
                </a>
              </div>
            </div>
          </div>

          {/* Pick 4 */}
          <div className="flex flex-col border border-charcoal group">
            <div className="bg-terracotta text-newsprint p-4 font-serif text-xl leading-tight border-b border-charcoal">
              Scaling the Creative Ecosystem: How GDSC BVP Designed a Unified Visual Campaign for the Annual Community Recruitment Drive
            </div>
            <div className="p-4 bg-charcoal border-b border-charcoal h-64 overflow-hidden relative flex items-center justify-center">
              <img src={joinGDSC} className="w-2/3 grayscale contrast-125 transition-transform duration-700 group-hover:scale-105 opacity-80" />
            </div>
            <div className="p-4 font-mono text-[10px] leading-relaxed flex-grow flex flex-col justify-between">
              <p className="mb-8">
                How system-wide talent acquisition roadmaps and structured brand-led outreach for annual student onboarding revealed key insights — cognitive friction for applicants navigating diverse technical and creative divisions, high-contrast visual layouts and single-point digital entry (QR execution) as primary drivers for scaling application submission volumes, and a clear, highly responsive candidate funnel being critical to deliver.
              </p>
              <div className="mt-auto">
                <a href={joinGDSC} target='_blank' rel='noreferrer' className="uppercase tracking-widest border-b border-charcoal hover:text-terracotta transition-colors pb-1">
                  [VIEW PROJECT]
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
