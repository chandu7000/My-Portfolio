import Button from "../components/ui/Button";
import Container from "../components/ui/Container";
import ExternalLink from "../components/ui/ExternalLink";
import SectionHeading from "../components/ui/SectionHeading";
import { socialLinks } from "../data/socialLinks";

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Thank you for reaching out! I will get back to you shortly.");
    event.currentTarget.reset();
  };

  return (
    <section id="contact" className="section-shell bg-canvas">
      <Container>
        <div className="surface-panel relative overflow-hidden px-5 py-10 sm:px-8 sm:py-12 lg:px-12">
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-accent-violet/10 blur-3xl" aria-hidden="true" />
          <SectionHeading
            eyebrow="Contact"
            title="Get In Touch"
            description="Feel free to contact me for collaboration or inquiries."
          />

          <form onSubmit={handleSubmit} className="relative mx-auto max-w-2xl space-y-4" aria-label="Contact form">
            <label className="block">
              <span className="sr-only">Your Name</span>
              <input
                type="text"
                name="name"
                autoComplete="name"
                placeholder="Your Name"
                required
                className="min-h-12 w-full rounded-xl border border-line bg-surface-soft px-4 py-3 text-ink placeholder:text-slate-500 focus:border-accent-cyan focus:outline-none"
              />
            </label>
            <label className="block">
              <span className="sr-only">Your Email</span>
              <input
                type="email"
                name="email"
                autoComplete="email"
                placeholder="Your Email"
                required
                className="min-h-12 w-full rounded-xl border border-line bg-surface-soft px-4 py-3 text-ink placeholder:text-slate-500 focus:border-accent-cyan focus:outline-none"
              />
            </label>
            <label className="block">
              <span className="sr-only">Your Message</span>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                required
                className="w-full resize-y rounded-xl border border-line bg-surface-soft px-4 py-3 text-ink placeholder:text-slate-500 focus:border-accent-cyan focus:outline-none"
              />
            </label>
            <Button type="submit" className="w-full sm:w-auto">
              Send Message
            </Button>
          </form>

          <div className="relative mt-8 flex flex-wrap justify-center gap-3" aria-label="Social links">
            {socialLinks.map(({ name, icon, url }) => (
              <ExternalLink
                key={name}
                href={url}
                label={`Visit ${name}`}
                className="min-h-11 min-w-11 justify-center rounded-xl border border-line bg-surface-soft px-3 text-slate-300 hover:-translate-y-0.5 hover:border-accent-cyan/40 hover:text-accent-cyan"
              >
                <i className={`${icon} text-xl`} aria-hidden="true" />
              </ExternalLink>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
