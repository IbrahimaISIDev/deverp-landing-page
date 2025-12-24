import {
  Header,
  Hero,
  TrustedBy,
  ProblemSolution,
  Features,
  ProductDemo,
  Benefits,
  Testimonials,
  Contact,
  Footer
} from '@/components';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      <Hero />
      <TrustedBy />
      <ProblemSolution />
      <Features />
      <ProductDemo />
      <Benefits />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}