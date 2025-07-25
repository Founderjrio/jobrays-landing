import { FaBrain, FaGlobeAsia, FaShieldAlt, FaChartLine } from 'react-icons/fa';

export default function TrustSection() {
  const features = [
    {
      icon: <FaBrain size={28} />,
      title: 'GPT-Powered Intelligence',
      description: 'Ray uses GPT-4o to guide you with clarity, accuracy, and personalization — not guesswork.',
    },
    {
      icon: <FaGlobeAsia size={28} />,
      title: 'Global Intelligence, Region-Specific Precision',
      description: 'JobRays supports users worldwide — with smart career plans, salaries, and courses tailored to your location.',
    },
    {
      icon: <FaChartLine size={28} />,
      title: 'Weekly Progress Tracking',
      description: 'Ray keeps you on course with nudges, reminders, and real-time insights into your milestones.',
    },
    {
      icon: <FaShieldAlt size={28} />,
      title: 'Privacy & Data Protection',
      description: 'Your career data is private, secure, and never shared — Ray is your personal career ally.',
    },
  ];

  return (
    <section className="bg-[var(--background)] py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-12">
          Why Professionals Trust Ray
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-box flex items-start gap-4 text-left transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-[var(--highlight)] mt-1">{feature.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--foreground)]">{feature.title}</h3>
                <p className="text-sm text-[var(--muted)] mt-1">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
