import { FaUserCheck, FaMapSigns, FaRocket } from 'react-icons/fa';

export default function HowRayWorks() {
  const steps = [
    {
      icon: <FaUserCheck size={36} />,
      title: 'Upload Your Resume',
      description: 'Ray reads your resume, extracts your skills, and builds a starting profile — you just fill in the blanks.',
    },
    {
      icon: <FaMapSigns size={36} />,
      title: 'Set Your Dream Role',
      description: 'Choose your target role, salary, and location. Ray maps the journey with skills, certs, and milestones.',
    },
    {
      icon: <FaRocket size={36} />,
      title: 'Track Progress Weekly',
      description: 'Get nudges, motivation, and updates every week as you complete steps toward your goal.',
    },
  ];

  return (
    <section className="bg-[var(--background-light)] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-12">
          How JobRays Work
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="glass-box transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="text-[var(--highlight)] mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">
                {step.title}
              </h3>
              <p className="text-[var(--muted)] text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
