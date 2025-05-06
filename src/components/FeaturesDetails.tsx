
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  CheckCircle,
  MapPin, 
  Building2, 
  Stethoscope, 
  Truck, 
  UserRound, 
  School,
  ShoppingBag
} from 'lucide-react';

const FeaturesDetails = () => {
  const [showAllServices, setShowAllServices] = React.useState(false);
  
  const services = [
    { icon: <Building2 className="text-blue-500" />, name: "পুলিশ স্টেশন" },
    { icon: <Stethoscope className="text-pink-500" />, name: "হাসপাতাল" },
    { icon: <Truck className="text-orange-500" />, name: "ফায়ার সার্ভিস" },
    { icon: <Truck className="text-cyan-500" />, name: "অ্যাম্বুলেন্স" },
    { icon: <UserRound className="text-purple-500" />, name: "ডাক্তার" },
    { icon: <ShoppingBag className="text-pink-500" />, name: "দোকান" },
    { icon: <School className="text-green-500" />, name: "স্কুল" },
    { icon: <MapPin className="text-red-500" />, name: "ট্যুরিস্ট স্পট" },
    { icon: <CheckCircle className="text-yellow-500" />, name: "পাবলিক টয়লেট" },
    { icon: <Building2 className="text-indigo-500" />, name: "সরকারি অফিস" },
    { icon: <ShoppingBag className="text-teal-500" />, name: "মার্কেট" },
    { icon: <Building2 className="text-gray-500" />, name: "বাস স্ট্যান্ড" }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            KULABRA <span className="text-primary">-আপনার মহল্লার</span>
          </h2>
          <p className="text-lg text-gray-700">প্রয়োজনীয় সেবাসমূহ</p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <div className="phone-mockup mx-auto rounded-3xl overflow-hidden border-8 border-gray-800 shadow-2xl">
              <div className="relative w-full h-full">
                <img 
                  src="/lovable-uploads/09d5264d-f4e6-4ede-bfcd-629dfe9bf4c6.png" 
                  alt="Kulabra App Interface"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <Card className="bg-white rounded-xl shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-4">সকল সেবা একসাথে</h3>
                <p className="text-gray-700 mb-6">
                  আপনার মহল্লায় উপলব্ধ সকল সেবা এক অ্যাপলিকেশনে। যেকোনো প্রয়োজনে এক টাচে সমাধান পান।
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {services.slice(0, showAllServices ? services.length : 6).map((service, index) => (
                    <div key={index} className="flex items-start">
                      <div className="rounded-full p-2 mr-3 mt-1 bg-gray-100">
                        {service.icon}
                      </div>
                      <div>
                        <h4 className="font-medium">{service.name}</h4>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center md:text-left">
                  <Button 
                    className="bg-primary hover:bg-primary/90"
                    onClick={() => setShowAllServices(!showAllServices)}
                  >
                    {showAllServices ? "সংক্ষিপ্ত দেখুন" : "সকল সেবা দেখুন"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="bg-primary bg-opacity-10 p-6 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold mb-2 text-primary">Finaly We Are Able!</h3>
              <p className="text-gray-700">আমরা আপনার মহল্লার সকল সেবা একসাথে উপস্থাপন করতে পেরে গর্বিত</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesDetails;
