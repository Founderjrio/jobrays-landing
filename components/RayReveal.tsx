export default function RayReveal() {
  return (
    <section className="text-center px-6 py-24 bg-[var(--background)]">
      <h2 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] leading-tight mb-12">
        What You Can Achieve with Ray
      </h2>

      <div
        className="max-w-4xl mx-auto bg-[var(--card)] rounded-2xl p-10 md:p-12 border border-yellow-100 shadow-lg"
        style={{
          backgroundColor: "rgba(255, 251, 235, 0.9)", // matches cream card tone
          boxShadow: "0 10px 40px rgba(252, 211, 77, 0.3)", // warm golden glow
        }}
      >
        <p className="text-lg md:text-xl text-[var(--foreground)] leading-relaxed mb-6">
          Imagine switching from accounting to entrepreneurship. <br />
          From marketing to DevOps. From college student to global product leader.
        </p>

        <p className="text-lg md:text-xl text-[var(--foreground)] leading-relaxed mb-6">
          No matter your dream — <strong>JobRays</strong> gives you the blueprint to make it real.
          Ray breaks down your entire path — <em>what to learn, when to switch, and how to grow</em>.
        </p>

        <p className="text-lg md:text-xl text-[var(--foreground)] leading-relaxed">
          Wherever you start, and whatever you aspire to — <strong>Ray is your guide</strong> every step of the way.
        </p>
      </div>
    </section>
  );
}
