
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Kulabra App</h3>
            <p className="text-gray-400 mb-4">
              আপনার মহল্লার সকল সুবিধা এবং তথ্য এখন আপনার হাতের মুঠোয়। ডাউনলোড করুন আমাদের অ্যাপ!
            </p>
            <div className="flex space-x-3">
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">কুইক লিংক</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-primary transition-colors">হোম</a>
              </li>
              <li>
                <a href="#features" className="text-gray-400 hover:text-primary transition-colors">ফিচারস</a>
              </li>
              <li>
                <a href="#team" className="text-gray-400 hover:text-primary transition-colors">টিম</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-primary transition-colors">যোগাযোগ</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">সাপোর্ট</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">টিউটোরিয়াল</a>
              </li>
              <li>
                <a href="https://sites.google.com/view/privacy-policy-kulaurahub/home" 
                   className="text-gray-400 hover:text-primary transition-colors" 
                   target="_blank" 
                   rel="noopener noreferrer">
                  প্রাইভেসি পলিসি
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">টার্মস অ্যান্ড কন্ডিশন</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-500">
            &copy; {new Date().getFullYear()} Kulabra App. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
