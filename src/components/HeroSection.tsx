
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const HeroSection = () => {
  const handleDownload = () => {
    // Path to the app file in the public folder
    const downloadUrl = '/kulabra-app.apk';
    
    // Create an anchor element and trigger the download
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'kulabra-app.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="bg-gradient-to-b from-white to-green-50 pt-24 md:pt-28 pb-12 md:pb-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              আপনার <span className="text-primary">মহল্লার</span> <br />
              সবকিছু <span className="text-primary">স্মার্ট অ্যাপ</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-md mx-auto md:mx-0">
              আপনার মহল্লার সকল সুবিধা এবং তথ্য এখন আপনার হাতের মুঠোয়। ডাউনলোড করুন আমাদের অ্যাপ!
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <Button onClick={handleDownload} className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 flex items-center gap-2">
                <Download className="h-5 w-5" />
                অ্যাপ ডাউনলোড
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 text-lg px-8 py-6">
                আরও জানুন
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative">
              <div className="phone-mockup animate-float">
                <div className="phone-screen">
                  <img 
                    src="/public/lovable-uploads/d9db84df-f3da-419c-8618-a8363b6f8a22.png" 
                    alt="Kulabra App Screenshot"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
