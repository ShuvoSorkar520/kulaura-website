
import { Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">যোগাযোগ <span className="text-primary">করুন</span></h2>
          <p className="text-lg text-gray-700">আমাদের সাথে যোগাযোগ করতে নিচের ফর্মটি পূরণ করুন</p>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <form className="bg-white rounded-xl shadow-md p-8">
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 mb-2">আপনার নাম</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 mb-2">ইমেইল</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-700 mb-2">বিষয়</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">মেসেজ</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                ></textarea>
              </div>
              
              <Button className="w-full bg-primary hover:bg-primary/90">
                মেসেজ পাঠান
              </Button>
            </form>
          </div>

          <div className="md:w-1/2">
            <div className="bg-white rounded-xl shadow-md p-8 h-full">
              <h3 className="text-2xl font-bold mb-6 text-primary">যোগাযোগের ঠিকানা</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2">অফিস</h4>
                  <p className="text-gray-700">
                    ১২৩, গ্রীন রোড, ঢাকা-১২০৫, বাংলাদেশ
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-2">যোগাযোগ</h4>
                  <div className="flex items-center space-x-2 mb-2">
                    <Phone size={18} className="text-primary" />
                    <span className="text-gray-700">+৮৮০ ১৮৫৪৮৭৯৫৭৪</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail size={18} className="text-primary" />
                    <span className="text-gray-700">info@kulabra.io</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-2">কার্যক্রম</h4>
                  <p className="text-gray-700">
                    সোম - শুক্র: সকাল ৯টা - সন্ধ্যা ৬টা
                  </p>
                  <p className="text-gray-700">
                    শনি - রবি: সকাল ১০টা - দুপুর ১টা
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <div className="h-40 bg-gray-200 rounded-md flex items-center justify-center">
                  <p className="text-gray-500">মানচিত্র এখানে দেখানো হবে</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
