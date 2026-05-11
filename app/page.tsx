export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold uppercase tracking-widest">
          AI-Powered Career Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Find the Skills Costing You{" "}
          <span className="text-[#58a6ff]">Freelance Bookings</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Paste your profile. We scan real job postings and show exactly which skills you&apos;re missing — with a step-by-step plan to close the gap.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $8/mo
        </a>
        <p className="mt-3 text-xs text-[#484f58]">Cancel anytime. No contracts.</p>

        {/* Feature pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {["Live job post scanning", "AI gap analysis", "Actionable roadmap", "Weekly reports"].map((f) => (
            <span key={f} className="px-4 py-2 rounded-full bg-[#161b22] border border-[#30363d] text-sm text-[#c9d1d9]">
              {f}
            </span>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { step: "1", title: "Paste Your Profile", desc: "Add your bio, skills, and experience from any freelance platform." },
            { step: "2", title: "We Scan the Market", desc: "Our AI reads hundreds of live job postings in your niche." },
            { step: "3", title: "Get Your Gap Report", desc: "Receive a prioritized list of skills to learn and how to showcase them." }
          ].map((item) => (
            <div key={item.step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="w-8 h-8 rounded-full bg-[#58a6ff] text-[#0d1117] font-bold flex items-center justify-center text-sm mb-3">
                {item.step}
              </div>
              <h3 className="font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-[#8b949e]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-16" id="pricing">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$8</p>
          <p className="text-[#8b949e] text-sm mb-6">/month</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited profile analyses",
              "Real-time job post scanning",
              "AI skill gap reports",
              "Weekly market digest",
              "Priority email support"
            ].map((feat) => (
              <li key={feat} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">&#10003;</span>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24" id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "Which freelance platforms do you support?",
              a: "You can paste profiles from Upwork, Toptal, Fiverr, LinkedIn, or any plain-text bio. We analyze the content, not the platform."
            },
            {
              q: "How often is the job market data updated?",
              a: "We scan thousands of job postings daily so your gap report always reflects current market demand."
            },
            {
              q: "Can I cancel my subscription anytime?",
              a: "Yes. Cancel with one click from your billing portal. You keep access until the end of your billing period."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <p className="font-semibold text-white mb-2">{item.q}</p>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#21262d] py-6 text-center text-xs text-[#484f58]">
        &copy; {new Date().getFullYear()} Freelancer Skill Gap Analyzer. All rights reserved.
      </footer>
    </main>
  );
}
