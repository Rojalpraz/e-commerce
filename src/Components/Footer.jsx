import React from 'react';
import { Twitter, Github, Linkedin, Mail } from 'lucide-react';

function Footer() {
  return (
    <footer className=" w-full  bg-slate-950 border-t border-gray-900 py-16 px-10 md:px-6 lg:px-8">
      
      <div className='max-w-7xl mx-auto'>
        <div className=" grid grid-cols-2 md:grid-cols-6 lg:grid-cols-12 gap-8 mb-16">
       
          <div className=" space-y-7 col-span-2 md:col-span-3 lg:col-span-4">
           
              
              <h3 className="text-xl font-bold text-white">MiniShop</h3>
        
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
             We bring you the latest in electronics, gadgets, and clothes in one place
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-800 text-gray-400 hover:text-sky-500 hover:bg-gray-700 transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-800 text-gray-400 hover:text-sky-500 hover:bg-gray-700 transition-colors"
              >
                <Github size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-800 text-gray-400 hover:text-sky-500 hover:bg-gray-700 transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-800 text-gray-400 hover:text-sky-500 hover:bg-gray-700 transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

        
          <div className="lg:col-span-3">
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              
              <li><a href="#" className="text-gray-400 hover:text-sky-500 text-sm transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-sky-500 text-sm transition-colors">Security</a></li>
              <li><a href="#" className="text-gray-400 hover:text-sky-500 text-sm transition-colors">HotDeals</a></li>
              <li><a href="#" className="text-gray-400 hover:text-sky-500 text-sm transition-colors">Brands</a></li>
            </ul>
          </div>

      
          <div className="lg:col-span-3">
            <h4 className="text-white font-semibold mb-4">Need Help?</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-sky-500 text-sm transition-colors">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-sky-500 text-sm transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-sky-500 text-sm transition-colors">Order tracking</a></li>
              <li><a href="#" className="text-gray-400 hover:text-sky-500 text-sm transition-colors">Return Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-sky-500 text-sm transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

    
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-sky-500 text-sm transition-colors">Privacy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-sky-500 text-sm transition-colors">Terms</a></li>
              <li><a href="#" className="text-gray-400 hover:text-sky-500 text-sm transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-sky-500 text-sm transition-colors">Licenses</a></li>
              <li><a href="#" className="text-gray-400 hover:text-sky-500 text-sm transition-colors">Compliance</a></li>
            </ul>
          </div>
        </div>

     
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} MiniShop. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-sky-500 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-sky-500 text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-sky-500 text-sm transition-colors">Cookie Settings</a>
          </div>
        </div>
   </div>
    </footer>
  );
}

export default Footer;