export default function Home() {
  const faqs = [
    {
      q: 'How does timezone detection work?',
      a: 'We pull timezone data directly from each recipient\'s Slack profile and cross-reference with their recent activity patterns to determine optimal delivery windows.'
    },
    {
      q: 'Will messages send during weekends or holidays?',
      a: 'No. You can configure workday preferences per recipient or team. Messages are held and delivered at the next available working hour automatically.'
    },
    {
      q: 'What happens if a recipient is in a meeting?',
      a: 'The scheduler checks Slack status and calendar availability. If someone is busy, delivery is deferred to the next free slot within your configured window.'
    }
  ]

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-sm font-medium px-3 py-1 rounded-full mb-6">
          For Remote Teams & Distributed Managers
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Schedule Slack Messages<br />Across Timezones Intelligently
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Stop waking people up at 2am. Automatically deliver Slack messages when recipients are actually available — respecting their timezone, workday, and meeting schedule.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
        >
          Get Started — $10/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. No contracts.</p>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="border border-[#58a6ff] rounded-xl p-8 max-w-sm mx-auto bg-[#161b22]">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro</div>
          <div className="text-4xl font-bold text-white mb-1">$10<span className="text-lg font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need for smart scheduling</p>
          <ul className="space-y-3 mb-8">
            {[
              'Unlimited scheduled messages',
              'Timezone-aware delivery',
              'Workday & holiday rules',
              'Meeting schedule detection',
              'Slack status awareness',
              'Team scheduling dashboard'
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block text-center bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
          >
            Start Scheduling Smarter
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map(({ q, a }) => (
            <div key={q} className="border border-[#30363d] rounded-lg p-6 bg-[#161b22]">
              <h3 className="text-white font-semibold mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
