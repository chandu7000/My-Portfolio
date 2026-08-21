import Card from "../components/ui/Card";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";

export default function About() {
  return (
    <section id="about" className="section-shell bg-surface/30">
      <Container>
        <SectionHeading eyebrow="About" title="About Me" />

        <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <div className="flex justify-center lg:justify-start">
            <img
              src="https://res.cloudinary.com/dmafwatx5/image/upload/w_300,c_fill,ar_1:1,g_auto,r_max/v1727951863/portfolio-pic_mwmr8i.jpg"
              alt="Chandra Sekhar profile"
              className="aspect-square w-52 rounded-full border-4 border-accent-blue/70 object-cover shadow-glow sm:w-60 lg:w-72"
            />
          </div>

          <div>
            <p className="text-base leading-8 text-slate-300 sm:text-lg">
              Hello, I&apos;m <strong className="text-ink">Chandra Sekhar</strong>, a software engineer passionate about building dynamic and scalable web applications. I&apos;m proficient in <strong className="text-ink">MERN Stack</strong> development, using frontend technologies like <strong className="text-ink">React.js</strong> and backend tools like <strong className="text-ink">Node.js, Express.js</strong>, along with <strong className="text-ink">MongoDB</strong> for database management.
            </p>

            <Card className="mt-8">
              <h3 className="text-lg font-semibold text-ink">Education</h3>
              <div className="mt-5 space-y-5">
                <div>
                  <p className="font-medium text-slate-200">B.Tech in Electronics &amp; Communication</p>
                  <p className="mt-1 text-sm text-muted">Lakireddy Balireddy College of Engineering, 2024</p>
                </div>
                <div>
                  <p className="font-medium text-slate-200">Board Of Intermediate</p>
                  <p className="mt-1 text-sm text-muted">Sri Chaitanya Junior College, 2020</p>
                </div>
                <div>
                  <p className="font-medium text-slate-200">Secondary Eduation</p>
                  <p className="mt-1 text-sm text-muted">Lakireddy Balireddy College of Engineering, 2024</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}
