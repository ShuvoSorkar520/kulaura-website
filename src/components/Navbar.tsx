
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, Download } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDownload = () => {
    // Replace this URL with your actual app download link
    const downloadUrl = '/public/lovable-uploads/d9db84df-f3da-419c-8618-a8363b6f8a22.png';
    
    // Create an anchor element and trigger the download
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'kulabra-app.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
          <Button onClick={handleDownload} className="bg-primary hover:bg-primary/90 flex items-center gap-2">
            <Download className="h-4 w-4" />
            Download
          </Button>
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
            <Button onClick={handleDownload} className="bg-primary hover:bg-primary/90 w-full flex items-center justify-center gap-2">
              <Download className="h-4 w-4" />
              Download
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
