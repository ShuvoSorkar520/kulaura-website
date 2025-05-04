
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-lg font-bold text-primary flex items-center">
            Kulabra.io
          </a>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <a href="#home" className="text-gray-600 hover:text-primary transition-colors">Home</a>
          <a href="#features" className="text-gray-600 hover:text-primary transition-colors">Features</a>
          <a href="#login" className="text-gray-600 hover:text-primary transition-colors">Login</a>
          <a href="#team" className="text-gray-600 hover:text-primary transition-colors">Team</a>
          <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Contact</a>
          <Button className="bg-primary hover:bg-primary/90">Download</Button>
        </div>
        
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-md">
          <nav className="flex flex-col space-y-4">
            <a href="#home" className="text-gray-600 hover:text-primary transition-colors">Home</a>
            <a href="#features" className="text-gray-600 hover:text-primary transition-colors">Features</a>
            <a href="#login" className="text-gray-600 hover:text-primary transition-colors">Login</a>
            <a href="#team" className="text-gray-600 hover:text-primary transition-colors">Team</a>
            <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Contact</a>
            <Button className="bg-primary hover:bg-primary/90 w-full">Download</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
