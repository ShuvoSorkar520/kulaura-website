import React from 'react';

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">KULABRA <span className="text-primary">-আপনার মহল্লার</span></h2>
          <p className="text-lg text-gray-700">এক স্মার্ট লিভিং</p>
        </div>

        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
          <div className="md:w-1/2 mt-12 md:mt-0">
            <div className="phone-mockup mx-auto">
              <div className="phone-screen">
                <img 
                  src="/public/lovable-uploads/d9db84df-f3da-419c-8618-a8363b6f8a22.png" 
                  alt="Kulabra App Features"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="md:w-1/2 md:pl-12">
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3 text-primary">স্মার্ট মহল্লা ম্যানেজমেন্ট</h3>
              <p className="text-gray-700">আপনার মহল্লার সকল গুরুত্বপূর্ণ তথ্য এবং সেবা এখন আপনার হাতের মুঠোয়।</p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3 text-primary">নোটিফিকেশন সিস্টেম</h3>
              <p className="text-gray-700">গুরুত্বপূর্ণ সকল ইভেন্ট এবং নোটিশ সরাসরি আপনার ফোনে পান।</p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3 text-primary">কমিউনিটি কানেকশন</h3>
              <p className="text-gray-700">আপনার প্রতিবেশীদের সাথে সহজেই যোগাযোগ করুন এবং মতামত শেয়ার করুন।</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary">বিল পেমেন্ট সিস্টেম</h3>
              <p className="text-gray-700">মাসিক বিল এবং অন্যান্য পেমেন্ট অনলাইনে সহজেই করুন।</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
