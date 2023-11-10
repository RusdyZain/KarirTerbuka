import Header from '@/components/Header';
import HeroSection from '@/components/organism/HeroSection';
import Quote from '@/components/molekul/Quote';
import JobAdviceSection from '@/components/organism/JobAdviceSection';
import FindCommunity from '@/components/organism/FindCommunity';
import Image from 'next/image';
import GuideSection from '@/components/organism/Guide';
import Testimonial from '@/components/organism/Testimonial';
import Footer from '@/components/Footer';
import Partner from '@/components/molekul/Partner';
const Beranda = () => {
  return (
    <div>
      <main className="container mx-auto">
        <section>
          <div className="container mx-auto">
            <Header />
          </div>
        </section>
        <section className="container pt-20 overflow-hidden">
          <HeroSection />
        </section>
        <section className="quotes container mx-auto">
          <Quote />
        </section>
        <section className="container">
          <JobAdviceSection />
        </section>
        <section className="container">
          <FindCommunity />
        </section>
        <section className="container">
          <Partner/>
        </section>
        <section className="container">
          <GuideSection />
        </section>
        <section className="container">
          <Testimonial />
        </section>
        <section className="container pt-44">
          <Footer />
        </section>
      </main>
    </div>
  );
};

export default Beranda;
