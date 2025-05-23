
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';

const TeamSection = () => {
  return <section id="team" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">আমাদের <span className="text-primary">টিম</span></h2>
          <p className="text-lg text-gray-700">কুলাউড়া হাব অ্যাপের পেছনে থাকা  টিম সদস্য</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Team Member 1 */}
          <div className="flex flex-col items-center">
            <div className="mb-6">
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary">
                <img src="/lovable-uploads/109486a0-a134-4a30-b4ca-5edc14f33b2e.png" alt="Emon Das" className="w-full h-full object-cover" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-1">Emon Das</h3>
            <p className="text-gray-600 mb-4">Creative Designer</p>
            
            <p className="text-center text-gray-700 mb-4 max-w-xs">My Name is Emon. I'm 18 year old from Bangladesh, and Iam a UI/UX
&amp; Graphics Designer</p>
            
            <a 
              href="https://www.behance.net/emondas29" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-primary text-white rounded-md py-2 px-6 mb-4 inline-block hover:bg-primary/90 transition-colors"
            >
              Protfollio
            </a>
            
            <div className="flex space-x-3">
              <a href="https://www.facebook.com/profile.php?id=100037052358181&mibextid=JRoKGi" className="social-icon hover:bg-gray-200 transition-colors">
                <Facebook size={16} />
              </a>
              <a href="https://www.twitter.com/@EmonDas29" className="social-icon hover:bg-gray-200 transition-colors">
                <Twitter size={16} />
              </a>
              <a href="https://www.instagram.com/emontrd29" className="social-icon hover:bg-gray-200 transition-colors">
                <Instagram size={16} />
              </a>
              <a href="https://www.linkedin.com/in/emon-designer-921a7a308" className="social-icon hover:bg-gray-200 transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="scenecomedy258@gmail.com" className="social-icon hover:bg-gray-200 transition-colors">
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="flex flex-col items-center">
            <div className="mb-6">
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary">
                <img src="/lovable-uploads/b5cefa95-2599-40a6-959b-9198b2fb44dd.png" alt="Shuvo Sarkar" className="w-full h-full object-cover" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-1">Shuvo Sorkar</h3>
            <p className="text-gray-600 mb-4">Android App Developer</p>
            
            <p className="text-center text-gray-700 mb-4 max-w-xs">My Name is Shuvo. I'm from Bangladesh, and Iam a
Android App Developer</p>
            
            <a 
              href="https://shuvosorkarprotfolio.netlify.app" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-primary text-white rounded-md py-2 px-6 mb-4 inline-block hover:bg-primary/90 transition-colors"
            >
              Portfollio
            </a>
            
            <div className="flex space-x-3">
              <a href="https://www.facebook.com/shuvo.sorkar.758" className="social-icon hover:bg-gray-200 transition-colors">
                <Facebook size={16} />
              </a>
              
              
              <a href="https://www.linkedin.com/in/shuvo-sorkar-1840ab30a" className="social-icon hover:bg-gray-200 transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="shuvosorkar45@gmail.com" className="social-icon hover:bg-gray-200 transition-colors">
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default TeamSection;
