
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Eye, EyeOff } from 'lucide-react';

const FeaturesSection = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

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
                  alt="Kulabra App Registration"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 md:pl-12">
            <div className="max-w-md mx-auto md:mx-0">
              <h3 className="text-2xl font-bold mb-6 text-center md:text-left">Welcome to Kulaura Hub</h3>
              <p className="text-gray-700 mb-8 text-center md:text-left">
                Please enter the information below to register with Kulaura Hub and access all services in your neighborhood
              </p>

              <div className="space-y-4">
                <div>
                  <Input type="text" placeholder="Your Name" className="w-full" />
                  <p className="text-xs text-gray-500 mt-1 ml-1">Enter your name</p>
                </div>
                
                <div>
                  <Input type="email" placeholder="Email" className="w-full" />
                  <p className="text-xs text-gray-500 mt-1 ml-1">Enter your email</p>
                </div>
                
                <div className="relative">
                  <Input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="Password" 
                    className="w-full pr-10" 
                  />
                  <button 
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center px-3"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                  <p className="text-xs text-gray-500 mt-1 ml-1">Enter a Password</p>
                </div>
                
                <div className="relative">
                  <Input 
                    type={showConfirmPassword ? "text" : "password"} 
                    placeholder="Confirm password" 
                    className="w-full pr-10" 
                  />
                  <button 
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center px-3"
                    onClick={toggleConfirmPasswordVisibility}
                  >
                    {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                  <p className="text-xs text-gray-500 mt-1 ml-1">Enter confirm password</p>
                </div>
                
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="privacy-policy" 
                    className="rounded text-primary mr-2 h-4 w-4" 
                  />
                  <label htmlFor="privacy-policy" className="text-sm">
                    I agree with <span className="text-primary font-medium">Privacy and Policy ?</span>
                  </label>
                </div>
                
                <Button className="w-full bg-green-600 hover:bg-green-700">Register</Button>
                
                <div className="text-center text-sm mt-4">
                  Already have an account? <span className="text-primary cursor-pointer font-medium">Login</span>
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
