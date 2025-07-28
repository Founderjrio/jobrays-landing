import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendWelcomeEmail(email: string, isEarlyBonus: boolean) {
  const bonusBlock = isEarlyBonus
    ? `
      <p style="background: #f9f9f9; padding: 12px 16px; border-left: 4px solid #00B894;">
        🎁 <strong>Extra Perk:</strong> You’re among the first 400 to join!  
        You’ll receive an exclusive bonus on your first month when we go live.  
        Just our way of saying thanks for believing in us early.
      </p>
    `
    : '';

  const result = await resend.emails.send({
    from: 'JobRays Team <hello@jobrays.io>',
    to: email,
    subject: 'Welcome to JobRays — You’re In!',
    html: `
      <h2 style="margin-bottom: 0;">Hey there,</h2>
      <p style="margin-top: 5px;">
        We just saw your name pop up — and we couldn’t be more excited. 🙌  
        Thanks for joining the JobRays waitlist. You’ve taken the first real step toward building a career you truly deserve.
      </p>

      <p>
        At JobRays, we’re not just building software — we’re building a <strong>career companion</strong> that listens, guides, and grows with you.  
        In a world where career choices can feel overwhelming, we’re here to help you move with clarity, confidence, and purpose.
      </p>

      <p>
        Here’s what you can expect when we launch:
        <ul>
          <li>🎯 AI-powered gap analysis that highlights exactly what you're missing</li>
          <li>📈 6-month career roadmaps tailored to your goals</li>
          <li>📚 Curated skill, project & course recommendations</li>
          <li>🧠 Smart nudges and motivation to help you stay consistent</li>
        </ul>
      </p>

      <p>
        Whether you're aiming for a promotion, pivoting careers, or chasing a dream role — <strong>we’ll walk with you all the way</strong>.
      </p>

      <p>
        Oh — and you won’t be doing this alone.  
        <br />
        You’ll have <strong>Ray</strong> by your side — your personal AI career mentor.  
        Ray isn’t just smart — he’s friendly, intuitive, and knows when to push and when to pause.  
        He’ll help you make sense of the chaos, stay on track, and keep moving toward what matters.
      </p>

      ${bonusBlock}

      <p>
        We believe your ambition deserves structure, support, and soul. That’s what we’re building.
      </p>

      <p style="margin-top: 25px;">
        We’ll reach out as soon as we launch. And hey — this is just the beginning. 🚀
      </p>

      <p style="margin-top: 30px;">
        With heart,<br />
        — The JobRays Team
      </p>

      <p style="font-size: 0.9em; color: #555; margin-top: 40px;">
        Please don’t reply directly to this email — it’s not monitored.  
        If you have thoughts, feedback, or just want to say hi, reach out anytime at  
        <a href="mailto:founder@jobrays.io">founder@jobrays.io</a>.
      </p>
    `,
  });

  return result;
}
