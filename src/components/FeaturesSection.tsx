
import React from 'react';
import { Heart, Award, ThumbsUp, Smile } from 'lucide-react';

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">KULABRA <span className="text-primary">-আপনার মহল্লার</span></h2>
          <p className="text-lg text-gray-700">এক স্মার্ট লিভিং</p>
        </div>

        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mt-12 md:mt-0">
            <div className="phone-mockup mx-auto rounded-3xl overflow-hidden border-8 border-gray-800 shadow-2xl" style={{ maxWidth: '300px' }}>
              <div className="phone-screen w-full h-full">
                <img 
                  src="/lovable-uploads/4bd78a8a-d0f8-4bc2-90aa-9ac947f9f09a.png" 
                  alt="Kulabra App Interface"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 md:pl-12">
            <div className="max-w-md mx-auto md:mx-0">
              <h3 className="text-2xl font-bold mb-6 text-center md:text-left">আপনার জীবনযাত্রা আরও সহজ করুন</h3>
              <p className="text-gray-700 mb-8 text-center md:text-left">
                KULABRA অ্যাপে স্বাগতম - আপনার মহল্লার সবকিছু এখন আপনার হাতের মুঠোয়। আমাদের অ্যাপ দিয়ে আপনার প্রয়োজনীয় সমস্ত সেবা সহজেই পেতে পারেন।
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-green-50 p-3 rounded-full mr-4">
                    <Heart size={24} className="text-red-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">আপনার সুবিধার্থে তৈরি</h4>
                    <p className="text-gray-600">
                      আমাদের অ্যাপ আপনার প্রতিদিনের জীবনযাপন সহজ করার জন্য বানানো হয়েছে। এটি ব্যবহার করা সহজ এবং দ্রুত।
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-50 p-3 rounded-full mr-4">
                    <ThumbsUp size={24} className="text-blue-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">সর্বদা আপনার পাশে</h4>
                    <p className="text-gray-600">
                      জরুরি প্রয়োজনে হোক বা নিত্যদিনের সেবার জন্য, KULABRA আপনাকে সাহায্য করতে সর্বদা প্রস্তুত।
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-yellow-50 p-3 rounded-full mr-4">
                    <Award size={24} className="text-yellow-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">সেরা পরিষেবা নিশ্চিত</h4>
                    <p className="text-gray-600">
                      আমরা শুধু সেবা নয়, আমরা সেরা পরিষেবা দেওয়ার প্রতিশ্রুতি দেই। আপনার সন্তুষ্টিই আমাদের লক্ষ্য।
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-50 p-3 rounded-full mr-4">
                    <Smile size={24} className="text-green-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">সুখী ব্যবহারকারী</h4>
                    <p className="text-gray-600">
                      হাজার হাজার সন্তুষ্ট ব্যবহারকারী ইতিমধ্যেই আমাদের অ্যাপকে বেছে নিয়েছেন। আপনিও আমাদের পরিবারের একজন হয়ে উঠুন।
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
