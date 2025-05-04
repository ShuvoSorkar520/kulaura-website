
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const TeamSection = () => {
  return (
    <section id="team" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">আমাদের <span className="text-primary">টিম</span></h2>
          <p className="text-lg text-gray-700">কুলাবরা অ্যাপের পেছনে থাকা প্রতিভাবান টিম সদস্যরা</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Team Member 1 */}
          <div className="flex flex-col items-center">
            <div className="mb-6">
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary">
                <img 
                  src="/public/lovable-uploads/d9db84df-f3da-419c-8618-a8363b6f8a22.png" 
                  alt="Emon Das" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-1">Emon Das</h3>
            <p className="text-gray-600 mb-4">Creative Designer</p>
            
            <p className="text-center text-gray-700 mb-4 max-w-xs">
              My Name is Emon. I'm 29 years old from Bangladesh, and I am a Creative Designer.
            </p>
            
            <div className="bg-primary text-white rounded-md py-2 px-6 mb-4">
              App Developer
            </div>
            
            <div className="flex space-x-3">
              <a href="#" className="social-icon hover:bg-gray-200 transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="social-icon hover:bg-gray-200 transition-colors">
                <Twitter size={16} />
              </a>
              <a href="#" className="social-icon hover:bg-gray-200 transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" className="social-icon hover:bg-gray-200 transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="#" className="social-icon hover:bg-gray-200 transition-colors">
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="flex flex-col items-center">
            <div className="mb-6">
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary">
                <img 
                  src="/public/lovable-uploads/d9db84df-f3da-419c-8618-a8363b6f8a22.png" 
                  alt="Shuvo Sarkar" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-1">Shuvo Sarkar</h3>
            <p className="text-gray-600 mb-4">Android App Developer</p>
            
            <p className="text-center text-gray-700 mb-4 max-w-xs">
              My Name is Shuvo. I'm from Bangladesh, and I am a Android App Developer.
            </p>
            
            <div className="bg-primary text-white rounded-md py-2 px-6 mb-4">
              App Developer
            </div>
            
            <div className="flex space-x-3">
              <a href="#" className="social-icon hover:bg-gray-200 transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="social-icon hover:bg-gray-200 transition-colors">
                <Twitter size={16} />
              </a>
              <a href="#" className="social-icon hover:bg-gray-200 transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" className="social-icon hover:bg-gray-200 transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="#" className="social-icon hover:bg-gray-200 transition-colors">
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
