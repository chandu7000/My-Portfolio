import { useState } from "react";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Container from "../components/ui/Container";
import ExternalLink from "../components/ui/ExternalLink";
import SectionHeading from "../components/ui/SectionHeading";
import { socialLinks } from "../data/socialLinks";

const CONTACT_EMAIL = "nadimintichandu700@gmail.com";
const initialForm = { name: "", email: "", message: "" };

const professionalLinks = socialLinks.filter(({ name }) => ["LinkedIn", "GitHub"].includes(name));

function validateForm(values) {
  const errors = {};
  const name = values.name.trim();
  const email = values.email.trim();
  const message = values.message.trim();

  if (!name) errors.name = "Please enter your name.";
  if (!email) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!message) errors.message = "Please enter a message.";

  return errors;
}

function FieldError({ id, message }) {
  if (!message) return null;

  return (
    <p id={id} className="mt-2 text-sm font-medium text-red-300" role="alert">
      {message}
    </p>
  );
}

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));

    if (errors[name]) {
      setErrors((current) => ({ ...current, [name]: undefined }));
    }
    if (status !== "idle") setStatus("idle");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = validateForm(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length) {
      setStatus("error");
      const firstInvalidField = Object.keys(nextErrors)[0];
      event.currentTarget.elements[firstInvalidField]?.focus();
      return;
    }

    setStatus("preparing");

    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setStatus("ready");
  };

  return (
    <section id="contact" className="section-shell contact-section bg-canvas pb-14 sm:pb-16 lg:pb-20">
      <div aria-hidden="true" className="contact-grid absolute inset-0 opacity-30" />
      <div aria-hidden="true" className="contact-glow contact-glow-left" />
      <div aria-hidden="true" className="contact-glow contact-glow-right" />

      <Container className="relative z-10">
        <SectionHeading
          eyebrow="Let&apos;s Work Together"
          title="Have an opportunity or project in mind? Let&apos;s connect."
          description="I&apos;m open to professional conversations around full-stack development opportunities, collaboration, and practical web application work."
        />

        <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:gap-8">
          <Card className="relative overflow-hidden p-6 sm:p-8 lg:p-9">
            <div aria-hidden="true" className="absolute -left-16 -top-16 h-44 w-44 rounded-full bg-accent-cyan/10 blur-3xl" />

            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-cyan">Get In Touch</p>
              <h3 className="mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl">Professional conversations are welcome.</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                The fastest ways to reach me are email, LinkedIn, or GitHub. Use the form to prepare a structured email with your message.
              </p>

              <div className="mt-7 space-y-3">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="group flex min-h-14 items-center gap-4 rounded-2xl border border-line/80 bg-canvas/40 px-4 py-3 hover:border-accent-cyan/35 hover:bg-surface-soft/65"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-accent-cyan/20 bg-accent-cyan/10 text-accent-cyan">
                    <i className="fa-solid fa-envelope" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-muted">Email</span>
                    <span className="mt-1 block truncate text-sm font-semibold text-slate-200 group-hover:text-accent-cyan">{CONTACT_EMAIL}</span>
                  </span>
                </a>

                {professionalLinks.map(({ name, icon, url }) => (
                  <ExternalLink
                    key={name}
                    href={url}
                    label={`Open ${name}`}
                    className="group flex min-h-14 w-full items-center gap-4 rounded-2xl border border-line/80 bg-canvas/40 px-4 py-3 text-slate-200 hover:border-accent-cyan/35 hover:bg-surface-soft/65 hover:text-accent-cyan"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-accent-blue/20 bg-accent-blue/10 text-accent-cyan">
                      <i className={`${icon} text-lg`} aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-muted">Professional Profile</span>
                      <span className="mt-1 block text-sm font-semibold">{name}</span>
                    </span>
                    <i className="fa-solid fa-arrow-up-right-from-square ml-auto text-xs text-muted transition group-hover:text-accent-cyan" aria-hidden="true" />
                  </ExternalLink>
                ))}
              </div>

              <div className="mt-7 rounded-2xl border border-accent-cyan/20 bg-accent-cyan/5 p-4">
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-accent-cyan shadow-[0_0_16px_rgba(34,211,238,0.6)]" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold text-ink">Open to relevant opportunities</p>
                    <p className="mt-1 text-sm leading-6 text-muted">Feel free to reach out with a role, project, or professional collaboration that matches my development background.</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 sm:p-8 lg:p-9">
            <div className="mb-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-cyan">Send A Message</p>
              <h3 className="mt-3 text-2xl font-bold tracking-tight text-ink">Prepare your message.</h3>
              <p className="mt-2 text-sm leading-6 text-muted">Submitting this form opens your default email application with the message prepared. You remain in control of the final send.</p>
            </div>

            <form onSubmit={handleSubmit} noValidate aria-label="Contact form" className="space-y-5">
              <label className="block" htmlFor="contact-name">
                <span className="mb-2 block text-sm font-semibold text-slate-200">Name</span>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  autoComplete="name"
                  placeholder="Your name"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "contact-name-error" : undefined}
                  className="min-h-12 w-full rounded-xl border border-line bg-surface-soft px-4 py-3 text-ink placeholder:text-slate-500 transition focus:border-accent-cyan focus:outline-none focus:ring-2 focus:ring-accent-cyan/15"
                />
                <FieldError id="contact-name-error" message={errors.name} />
              </label>

              <label className="block" htmlFor="contact-email">
                <span className="mb-2 block text-sm font-semibold text-slate-200">Email</span>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="email"
                  placeholder="you@example.com"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "contact-email-error" : undefined}
                  className="min-h-12 w-full rounded-xl border border-line bg-surface-soft px-4 py-3 text-ink placeholder:text-slate-500 transition focus:border-accent-cyan focus:outline-none focus:ring-2 focus:ring-accent-cyan/15"
                />
                <FieldError id="contact-email-error" message={errors.email} />
              </label>

              <label className="block" htmlFor="contact-message">
                <span className="mb-2 block text-sm font-semibold text-slate-200">Message</span>
                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about the opportunity or project..."
                  rows="6"
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "contact-message-error" : undefined}
                  className="w-full resize-y rounded-xl border border-line bg-surface-soft px-4 py-3 text-ink placeholder:text-slate-500 transition focus:border-accent-cyan focus:outline-none focus:ring-2 focus:ring-accent-cyan/15"
                />
                <FieldError id="contact-message-error" message={errors.message} />
              </label>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <Button type="submit" disabled={status === "preparing"} className="w-full disabled:cursor-not-allowed disabled:opacity-65 sm:w-auto">
                  {status === "preparing" ? "Preparing..." : "Send Message"}
                  <i className="fa-solid fa-arrow-right text-xs" aria-hidden="true" />
                </Button>
                <p className="text-xs leading-5 text-muted sm:max-w-[18rem] sm:text-right">No browser alerts and no fake delivery confirmation.</p>
              </div>

              {status === "ready" ? (
                <div className="rounded-xl border border-accent-cyan/25 bg-accent-cyan/5 px-4 py-3 text-sm leading-6 text-slate-200" role="status" aria-live="polite">
                  Your email application should now be open with the message prepared. Review it there and send when ready.
                </div>
              ) : null}

              {status === "error" ? (
                <div className="rounded-xl border border-red-400/25 bg-red-400/5 px-4 py-3 text-sm leading-6 text-red-200" role="alert">
                  Please correct the highlighted fields before continuing.
                </div>
              ) : null}
            </form>
          </Card>
        </div>
      </Container>
    </section>
  );
}
