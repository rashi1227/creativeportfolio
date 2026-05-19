import { Trophy, Target, CheckCircle2, GraduationCap, AtSign, Code, ExternalLink } from 'lucide-react';
import rashiimg2 from '../assets/rashiimg2.jpg';

const Resume = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12 pb-24">
      {/* Masthead */}
      <header className="w-full flex flex-col pt-6">
        <div className="flex justify-between items-center text-[10px] font-bold uppercase pb-4">
          <span>ISSUE #7251</span>
          <span className="text-sm tracking-widest">SPECIAL DISPATCH</span>
          <span>18/05/2026</span>
        </div>
        <div className="border-t-4 border-charcoal py-8 flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-black uppercase tracking-tight text-center leading-none mb-4">
            THE PROFESSIONAL PROFILE
          </h1>
          <p className="text-xs md:text-sm font-mono uppercase tracking-widest text-center italic text-charcoal/60">
            Rashi Aggarwal's Journey in Tech & Design
          </p>
        </div>
        <div className="border-t border-b border-charcoal h-2 w-full mb-12"></div>
      </header>

      {/* Curriculum Vitae Section */}
      <section className="flex flex-col lg:flex-row w-full gap-12 lg:gap-16 mb-24 px-4 lg:px-0">
        {/* Left Column: Portrait & Meta */}
        <div className="w-full lg:w-1/3 flex flex-col">
          <div className="relative border border-charcoal p-2 bg-newsprint shadow-sm mb-6 w-full max-w-[320px] mx-auto lg:mx-0">
            <div className="absolute top-4 right-4 bg-charcoal text-newsprint text-[8px] font-bold px-2 py-1 z-10">
              ED. NO. 01
            </div>
            <div className="aspect-[3/4] bg-taupe overflow-hidden border border-charcoal">
              <img
                src={rashiimg2}
                alt="Rashi Aggarwal Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 text-xs font-mono font-bold uppercase mb-6 pl-2">
            <div>LOCATION: DELHI, IN</div>
            <div className="lowercase">Email: rashiaggarwalofficial680@gmail.com</div>
          </div>
        </div>

        {/* Right Column: CV Body & Lexicon */}
        <div className="w-full lg:w-2/3 flex flex-col">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-4xl md:text-5xl font-serif font-black uppercase whitespace-nowrap">CURRICULUM VITAE</h2>
            <div className="h-px bg-charcoal flex-grow"></div>
            <span className="text-terracotta text-xs font-bold whitespace-nowrap">EST. 2021</span>
          </div>

          <div className="mb-12 text-sm leading-relaxed text-justify relative">
            <span className="float-left text-7xl font-serif font-black leading-[0.8] pr-3 pt-2">D</span>
            <p className="font-mono">
              riven and detail-oriented software developer and UI/UX designer with a passion for creating seamless digital experiences. Specializing in full-stack Java development and human-centered design, Rashi combines technical rigor with aesthetic precision. This dossier outlines a trajectory of rapid growth across cloud systems, algorithmic problem solving, and community leadership in the Delhi tech ecosystem.
            </p>
          </div>

          <div className="bg-taupe border border-charcoal p-6">
            <div className="flex justify-between items-center mb-6 border-b border-charcoal pb-2">
              <h3 className="text-xs font-bold uppercase tracking-widest">TECHNICAL LEXICON</h3>
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 bg-charcoal"></div>
                <div className="w-1.5 h-1.5 bg-charcoal"></div>
                <div className="w-1.5 h-1.5 bg-charcoal"></div>
              </div>
            </div>

            <table className="w-full text-xs font-mono text-left table-fixed">
              <thead>
                <tr>
                  <th className="pb-3 w-1/3">LANGUAGES</th>
                  <th className="pb-3 w-1/3">FRAMEWORKS</th>
                  <th className="pb-3 w-1/3">TOOLS</th>
                </tr>
              </thead>
              <tbody>
                <tr className="align-top">
                  <td className="pr-4 leading-relaxed">Java, JavaScript, SQL</td>
                  <td className="pr-4 leading-relaxed">Spring Boot, React, Next.js, Node.js</td>
                  <td className="pr-4 leading-relaxed">Figma, Git, MongoDB</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Visual Break */}
      <div className="flex justify-center items-center gap-4 text-3xl mb-24">
        <span>•</span><span>•</span><span>•</span>
      </div>

      {/* Main CV Body (Divided Columns) */}
      <section className="flex flex-col lg:flex-row w-full gap-12 lg:gap-16 mb-32 px-4 lg:px-0">

        {/* Left Column: Experience */}
        <div className="w-full lg:w-1/2 flex flex-col pr-0 lg:pr-8 lg:border-r border-charcoal">
          <h2 className="text-3xl md:text-4xl font-serif font-black uppercase mb-12">EDITORIAL EXPERIENCE</h2>

          <article className="mb-12">
            <div className="flex justify-between items-end mb-2">
              <h3 className="text-xl font-serif font-bold uppercase">MPC CLOUD CONSULTING</h3>
              <span className="text-xs font-mono italic">Summer Intern</span>
            </div>
            <div className="text-[10px] text-terracotta font-bold uppercase mb-4 tracking-wider">JUNE 2023 — AUGUST 2023 | HYBRID</div>
            <ul className="list-square pl-4 flex flex-col gap-3 text-xs font-mono leading-relaxed">
              <li className="pl-2 relative before:content-['■'] before:absolute before:-left-4 before:text-[8px] before:top-1">Developed scalable microservices using Spring Boot, enhancing backend efficiency for enterprise-level cloud migrations by 15%.</li>
              <li className="pl-2 relative before:content-['■'] before:absolute before:-left-4 before:text-[8px] before:top-1">Collaborated with the UI team to refactor internal dashboards using React, focusing on accessibility and performance.</li>
              <li className="pl-2 relative before:content-['■'] before:absolute before:-left-4 before:text-[8px] before:top-1">Utilized AWS Lambda functions to automate reporting tasks, reducing manual overhead for the cloud architects.</li>
            </ul>
          </article>
        </div>

        {/* Right Column: Positions of Responsibility */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <h2 className="text-3xl md:text-4xl font-serif font-black uppercase mb-12">POSITIONS OF RESPONSIBILITY</h2>

          <div className="flex flex-col gap-0">
            {/* Block 01 */}
            <article className="border-t border-b border-dashed border-neutral-900/30 p-4 hover:bg-taupe transition-colors cursor-default">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] text-charcoal/60 font-mono uppercase">SERIAL NO. 101</span>
                <span className="text-[10px] font-bold font-mono uppercase">LEADERSHIP & UI/UX</span>
              </div>
              <div className="flex flex-col xl:flex-row xl:justify-between xl:items-baseline mb-4">
                <h3 className="text-xl md:text-2xl font-serif font-bold uppercase mb-1 xl:mb-0">UI/UX Executive @ GDSC BVP</h3>
                <span className="text-[10px] md:text-xs font-mono text-charcoal/60 uppercase xl:ml-4 whitespace-nowrap">SEPT 2023 — JULY 2024 | NEW DELHI, IN</span>
              </div>
              <p className="text-xs font-mono leading-relaxed text-justify tracking-tight md:max-w-md">
                &gt; Orchestrated cross-functional operations for CodeClash, a 24-hour hackathon, directing a team of 50+ members to deliver a seamless, high-impact experience for 100+ competing teams. Defined technical evaluation frameworks and judging criteria, establishing rigorous quality benchmarks to ensure high-standard assessments of technical innovation. Synthesized complex event objectives into a unified digital brand identity, utilizing high-fidelity visual assets to drive community engagement and ensure stakeholder alignment.
              </p>
            </article>

            {/* Block 02 */}
            <article className="border-b border-dashed border-neutral-900/30 p-4 hover:bg-taupe transition-colors cursor-default">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] text-charcoal/60 font-mono uppercase">SERIAL NO. 102</span>
                <span className="text-[10px] font-bold font-mono uppercase">EVENT OPERATIONS</span>
              </div>
              <div className="flex flex-col xl:flex-row xl:justify-between xl:items-baseline mb-4">
                <h3 className="text-xl md:text-2xl font-serif font-bold uppercase mb-1 xl:mb-0">Technical Fest Organizer @ BVEST, BVCOE</h3>
                <span className="text-[10px] md:text-xs font-mono text-charcoal/60 uppercase xl:ml-4 whitespace-nowrap">MARCH 2022 — MAY 2022 | NEW DELHI, IN</span>
              </div>
              <p className="text-xs font-mono leading-relaxed text-justify tracking-tight md:max-w-md">
                &gt; Spearheaded the organizational roadmap for a large-scale technical festival, managing multi-channel promotional strategies and logistical execution to support a 100+ team participation rate. Collaborated with internal technical teams to design and implement structured coding competitions, focusing on providing a seamless and high-value experience for over 4,000 attendees. Demonstrated advanced problem-solving by directing real-time event execution and troubleshooting operational bottlenecks to ensure a frictionless participant journey.
              </p>
            </article>

            {/* Block 03 */}
            <article className="border-b border-dashed border-neutral-900/30 p-4 hover:bg-taupe transition-colors cursor-default">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] text-charcoal/60 font-mono uppercase">SERIAL NO. 103</span>
                <span className="text-[10px] font-bold font-mono uppercase">LOGISTICS & BRAND</span>
              </div>
              <div className="flex flex-col xl:flex-row xl:justify-between xl:items-baseline mb-4">
                <h3 className="text-xl md:text-2xl font-serif font-bold uppercase mb-1 xl:mb-0">Executive Organizer @ XTasy, BVCOE</h3>
                <span className="text-[10px] md:text-xs font-mono text-charcoal/60 uppercase xl:ml-4 whitespace-nowrap">FEB 2023 — APR 2023 | NEW DELHI, IN</span>
              </div>
              <p className="text-xs font-mono leading-relaxed text-justify tracking-tight md:max-w-md">
                &gt; Collaborated within a cross-functional collective of 70+ members to orchestrate XTasy'23, managing end-to-end execution for 10,000+ stakeholders to deliver high-impact results. Directed high-pressure on-site logistics and attendee workflows, utilizing analytical problem-solving to ensure seamless operational execution and maintain organizational brand integrity.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Honors & Dispatches Footer Grid */}
      <section className="w-full px-4 lg:px-0">
        <h2 className="text-3xl md:text-5xl font-serif font-black uppercase text-center mb-12">HONORS & DISPATCHES</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-max mx-auto">
          <div className="border border-charcoal p-8 flex flex-col items-center text-center hover:bg-taupe transition-colors group cursor-default">
            <Trophy size={32} className="mb-4 text-charcoal group-hover:scale-110 transition-transform" />
            <h3 className="text-xs font-bold font-mono uppercase mb-2">Smart India Hackathon</h3>
            <p className="text-[10px] font-mono text-charcoal/60 uppercase">AI DIETARY CHATBOT DEVELOPER</p>
          </div>

          <div className="border border-charcoal p-8 flex flex-col items-center text-center hover:bg-taupe transition-colors group cursor-default">
            <Target size={32} className="mb-4 text-charcoal group-hover:scale-110 transition-transform" />
            <h3 className="text-xs font-bold font-mono uppercase mb-2">Mentorship</h3>
            <p className="text-[10px] font-mono text-charcoal/60 uppercase">MENTORED 2000+ COHORT STUDENTS</p>
          </div>

          <div className="border border-charcoal p-8 flex flex-col items-center text-center hover:bg-taupe transition-colors group cursor-default">
            <GraduationCap size={32} className="mb-4 text-charcoal group-hover:scale-110 transition-transform" />
            <h3 className="text-xs font-bold font-mono uppercase mb-2">B.Tech (IT)</h3>
            <p className="text-[10px] font-mono text-charcoal/60 uppercase">COMPLETED IN 2025</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;
