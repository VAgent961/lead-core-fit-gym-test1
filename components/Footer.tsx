import React from 'react';
import { Camera } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <span className="text-2xl font-bold tracking-tighter">
              CORE FIT<span className="text-primary"> GYM</span>
            </span>
            <p className="text-gray-400 mt-2">Your Community Fitness Center in Chouf</p>
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href="https://instagram.com/corefit.lb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors"
            >
              <Camera size={20} />
              <span>@corefit.lb</span>
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>© 2025 Core Fit Gym. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
