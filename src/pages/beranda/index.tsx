import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Saran from '@/components/organism/Saran';
import Testimonial from '@/components/organism/Testimonial';
import BerandaFix from '@/components/organism/BerandaFix';
import Quotes from '@/components/molekul/Quotes';
import BerandaFix2 from '@/components/organism/BerandaFix2';
import Sponsor from '@/components/molekul/Sponsor';
import Guide from '@/components/molekul/Guide';

const Beranda = () => {
  return (
    <div data-theme="light" className="absolute -z-0 w-screen">
      <Header />
      <div className="font-lato">
        <BerandaFix />
        <Quotes />
        <Saran />
        <BerandaFix2 />
        <div className="pt-60">
          <Sponsor />
        </div>
        <div className="container mx-auto pt-80 pl-[102px]  pr-[106px]">
          <Guide />
        </div>
        <div className="container mx-auto">
          <Testimonial />
        </div>
      </div>
      <Footer />
    </div>
  );
};


export default Beranda;