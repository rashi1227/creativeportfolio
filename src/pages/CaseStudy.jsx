import { Link } from 'react-router-dom';
import ecommerce from '../assets/ecommerce.png';

const CaseStudy = () => {
  return (
    <div className="flex flex-col w-full bg-newsprint">

      {/* Top Banner Image */}
      <section className="px-6 md:px-12 py-8 md:py-16">
        <div className="w-full aspect-[21/9] md:aspect-[2.5/1] border border-charcoal bg-charcoal overflow-hidden relative flex items-center justify-center p-8">
          <a href="https://www.figma.com/design/z6sqkqYN8W2SLQ6IrG3avM/E-commerce-Website-Desktop?node-id=0%3A1&t=uAB0LSYmCRWDDP5O-1" target='_blank'>
            <img
              src={ecommerce}
              alt="Hero Mockup"
              className="h-full grayscale contrast-125 mix-blend-screen opacity-90 shadow-2xl"
            />
          </a>
        </div>
      </section>

      {/* Hero Header & Intel Sidebar */}
      <section className="flex flex-col lg:flex-row px-6 md:px-12 pb-16 md:pb-24 border-b border-charcoal gap-12 lg:gap-24">
        <div className="w-full lg:w-2/3">
          <div className="flex items-center gap-4 mb-6 font-mono text-[10px] uppercase tracking-widest">
            <span className="bg-terracotta text-newsprint px-2 py-1 font-semibold">SPECIAL REPORT</span>
            <span>VOL. IV - ISSUE III</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-[5rem] leading-[0.9] tracking-tighter text-charcoal">
            <span className="text-terracotta">3-Step Checkout, 40% Growth:</span><br />Rebuilding the E-Commerce Funnel
          </h1>
          <p className="mt-8 font-mono text-xs md:text-sm leading-relaxed max-w-2xl">
            A multi-screen checkout sequence, once a major drop-off point with high friction, was hiding a clear user experience trap: rigid, tedious forms were exhausting mobile shoppers. Re-architecting this funnel into an intuitive, responsive system proved that minimizing step counts yields massive business returns.
          </p>
        </div>

        <div className="w-full lg:w-1/3 flex flex-col">
          <h3 className="font-mono text-xs uppercase tracking-widest mb-6">PROJECT INTEL</h3>
          <div className="flex flex-col gap-4 font-mono text-[10px] uppercase tracking-widest border-b border-charcoal pb-8 mb-8">
            <div className="grid grid-cols-[80px_1fr]">
              <span className="font-semibold">CLIENT:</span>
              <span>Stealth Retail Platform</span>
            </div>
            <div className="grid grid-cols-[80px_1fr]">
              <span className="font-semibold">ROLE:</span>
              <span>Product Designer</span>
            </div>
            <div className="grid grid-cols-[80px_1fr]">
              <span className="font-semibold">FOCUS:</span>
              <span>Checkout Optimization & Conversion</span>
            </div>
            <div className="grid grid-cols-[80px_1fr]">
              <span className="font-semibold">TIMELINE:</span>
              <span>April 2024</span>
            </div>
          </div>

          <div className="border border-charcoal p-6 bg-newsprint relative mt-4">
            <span className="absolute -top-3 left-4 bg-charcoal text-newsprint px-2 py-1 font-mono text-[8px] uppercase tracking-widest">FILE: NOTES</span>
            <h4 className="font-mono text-xs uppercase tracking-widest mb-4">Editors Notes</h4>
            <p className="font-mono text-xs leading-relaxed italic opacity-80">
              "What seemed like a standard drop-off problem was actually an interface structural flaw. This study demonstrates how a conversion-first mindset can transform baseline transaction flows into an optimized revenue engine."
            </p>
          </div>
        </div>
      </section>

      {/* The Three-Column Executive Summary */}
      <section className="px-6 md:px-12 py-16 md:py-24 border-b border-charcoal bg-newsprint">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 divide-y md:divide-y-0 md:divide-x divide-charcoal">

          {/* Column 1 */}
          <div className="md:pr-8">
            <h2 className="font-serif text-3xl mb-8 uppercase tracking-tight">The Broken Pulse</h2>
            <div className="font-mono text-xs leading-relaxed">
              <p className="first-letter:text-4xl first-letter:font-serif first-letter:float-left first-letter:mr-2 first-letter:-mt-1 mb-6">
                Transaction completion rates were historically treated as a secondary priority to homepage aesthetics. The existing interface was a patchwork of multi-step forms, unoptimized input fields, and rigid layouts that broke completely on mobile viewports.
              </p>
              <p>
                Users who added items to their carts demonstrated a clear intent to buy, but the checkout experience was highly inconsistent across different device states. Slow user progression, heavy input fatigue, and a cluttered visual hierarchy meant a large portion of the mobile user base was abandoning carts at the final gate—ignoring a pathway that directly correlated with macro business profit.
              </p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="pt-8 md:pt-0 md:px-8">
            <h2 className="font-serif text-3xl mb-8 uppercase tracking-tight">Data As A Compass</h2>
            <div className="flex flex-col gap-6">
              <div className="border border-dashed border-charcoal p-6 flex flex-col justify-center">
                <span className="font-serif text-5xl text-terracotta tracking-tighter mb-2">40%</span>
                <span className="font-mono text-[9px] uppercase tracking-widest opacity-70">CONVERSION RATE GROWTH</span>
              </div>
              <div className="border border-dashed border-charcoal p-6 flex flex-col justify-center">
                <span className="font-serif text-5xl text-terracotta tracking-tighter mb-2">3-Step</span>
                <span className="font-mono text-[9px] uppercase tracking-widest opacity-70">STREAMLINED CHECKOUT FUNNEL</span>
              </div>
              <div className="border border-dashed border-charcoal p-6 flex flex-col justify-center">
                <span className="font-serif text-5xl text-terracotta tracking-tighter mb-2">100%</span>
                <span className="font-mono text-[9px] uppercase tracking-widest opacity-70">CROSS-DEVICE UI PARITY</span>
              </div>
            </div>
            <p className="font-mono text-[10px] italic opacity-80 mt-8">
              "The friction was obvious. We were letting highly motivated users walk away at the very last step of their customer journey."
            </p>
          </div>

          {/* Column 3 */}
          <div className="pt-8 md:pt-0 md:pl-8">
            <h2 className="font-serif text-3xl mb-8 uppercase tracking-tight">The Strategy</h2>
            <div className="bg-taupe border border-charcoal p-6 mb-8">
              <p className="font-mono text-xs leading-relaxed">
                Re-architecting the transaction engine while maintaining active daily store traffic. We unified complex backend business rules into a singular, frictionless 'Fluid Checkout' standard.
              </p>
            </div>
            <ol className="font-mono text-xs leading-relaxed flex flex-col gap-6">
              <li className="flex gap-4">
                <span className="font-semibold">01.</span>
                <div>
                  <span className="font-semibold">Figma Auto-Layout:</span> Building comprehensive design components with advanced responsive resizing rules to adapt instantly to any viewport.
                </div>
              </li>
              <li className="flex gap-4">
                <span className="font-semibold">02.</span>
                <div>
                  <span className="font-semibold">Friction Stripping:</span> Optimizing user checkout flows to eliminate redundant forms, reducing checkout friction entirely.
                </div>
              </li>
              <li className="flex gap-4">
                <span className="font-semibold">03.</span>
                <div>
                  <span className="font-semibold">Device-Agnostic UI:</span> Creating intuitive mobile-first architectures to ensure seamless deployment and clarity across varying screen scales.
                </div>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Visual Break */}
      <section className="w-full h-48 md:h-64 border-b border-charcoal overflow-hidden">
        <img src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1600&auto=format&fit=crop" alt="Texture" className="w-full h-full object-cover grayscale mix-blend-multiply opacity-50" />
      </section>

      {/* Conclusion */}
      <section className="py-24 px-6 md:px-12 border-t border-charcoal flex flex-col items-center justify-center text-center bg-taupe/30">
        <span className="font-mono text-[10px] uppercase tracking-widest mb-8">CONCLUSION</span>
        <h3 className="font-serif text-3xl md:text-4xl leading-snug max-w-3xl mb-8">
          "Design is not about adding visual layers, but removing the friction that stands between a user and their destination."
        </h3>
        <p className="font-mono text-xs leading-relaxed max-w-2xl opacity-80">
          By focusing on the micro-interactions within the checkout sequence, we didn’t just build a streamlined 3-step transaction path; we engineered a scalable framework for mobile conversion that drastically reduced cart abandonment across the entire platform.
        </p>
      </section>

    </div>
  );
};

export default CaseStudy;
