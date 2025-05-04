
const FeaturesDetails = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            KULABRA <span className="text-primary">-আপনার মহল্লার</span>
          </h2>
          <p className="text-lg text-gray-700">প্রয়োজনীয় ফিচার</p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <div className="phone-mockup mx-auto">
              <div className="phone-screen">
                <img 
                  src="/public/lovable-uploads/d9db84df-f3da-419c-8618-a8363b6f8a22.png" 
                  alt="Kulabra App Interface"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-primary mb-4">২৪ ঘন্টা এক অ্যাপলিকেশন</h3>
              <p className="text-gray-700 mb-6">
                যোগাযোগের সকল মাধ্যম এখানে পাবেন। যেকোনো প্রয়োজনে এক অ্যাপেই সব সমাধান।
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-2 mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#1e7e34" className="w-4 h-4">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">কমিউনিটি নোটিফিকেশন</h4>
                    <p className="text-sm text-gray-600">সকল গুরুত্বপূর্ণ তথ্য এবং নোটিশ সরাসরি পান</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-2 mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#1e7e34" className="w-4 h-4">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">ইউটিলিটি সার্ভিস</h4>
                    <p className="text-sm text-gray-600">বিদ্যুৎ, পানি এবং গ্যাস বিল পেমেন্ট</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-2 mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#1e7e34" className="w-4 h-4">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">নিরাপত্তা সিস্টেম</h4>
                    <p className="text-sm text-gray-600">জরুরি অবস্থায় সাহায্য পাবার বিশেষ সিস্টেম</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-2 mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#1e7e34" className="w-4 h-4">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">ডিজিটাল মার্কেটপ্লেস</h4>
                    <p className="text-sm text-gray-600">স্থানীয় পণ্য এবং সেবা সহজেই কিনুন</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-2 mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#1e7e34" className="w-4 h-4">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">ইভেন্ট ম্যানেজমেন্ট</h4>
                    <p className="text-sm text-gray-600">কমিউনিটি ইভেন্ট অর্গানাইজ এবং ম্যানেজ করুন</p>
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

export default FeaturesDetails;
