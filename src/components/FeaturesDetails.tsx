
import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Police, 
  Hospital, 
  Ambulance, 
  ShoppingBag, 
  UserRound, 
  School,
  MapPin
} from 'lucide-react';

const FeaturesDetails = () => {
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
              <div className="relative">
                {/* Top train station image */}
                <img 
                  src="/lovable-uploads/09d5264d-f4e6-4ede-bfcd-629dfe9bf4c6.png" 
                  alt="Kulabra App Interface"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-primary mb-4">সকল সেবা একসাথে</h3>
              <p className="text-gray-700 mb-6">
                আপনার মহল্লায় উপলব্ধ সকল সেবা এক অ্যাপলিকেশনে। যেকোনো প্রয়োজনে এক টাচে সমাধান পান।
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#4285F4" className="w-4 h-4">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">পুলিশ স্টেশন</h4>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-pink-100 rounded-full p-2 mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#E91E63" className="w-4 h-4">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">হাসপাতাল</h4>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-orange-100 rounded-full p-2 mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#FF5722" className="w-4 h-4">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">ফায়ার সার্ভিস</h4>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-cyan-100 rounded-full p-2 mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#00BCD4" className="w-4 h-4">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">অ্যাম্বুলেন্স</h4>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-purple-100 rounded-full p-2 mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#9C27B0" className="w-4 h-4">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">ডাক্তার</h4>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-pink-100 rounded-full p-2 mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#E91E63" className="w-4 h-4">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">দোকান</h4>
                  </div>
                </div>
              </div>

              <div className="text-center md:text-left">
                <Button className="bg-primary hover:bg-primary/90">
                  সকল সেবা দেখুন
                </Button>
              </div>
            </div>
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
