import React from 'react';

export const Cta = () => {
  return (
    <div className="w-full bg-gradient-to-b from-black to-gray-900 py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto rounded-2xl bg-gradient-to-b from-gray-900 to-black p-16 border border-gray-800 shadow-xl relative overflow-hidden">
          {/* X Logo */}
          <div className="flex justify-center mb-16">
            <div className="relative w-24 h-24">
              <div className="absolute inset-0 rounded-2xl bg-gray-800 opacity-20"></div>
              <div className="absolute inset-2 rounded-xl bg-gray-800 opacity-40"></div>
              <div className="absolute inset-4 rounded-lg bg-gray-800 opacity-60"></div>
              <div className="absolute inset-6 rounded-md bg-gray-800 opacity-80"></div>
              <div className="absolute inset-8 rounded bg-black flex items-center justify-center">
                <span className="text-white text-3xl font-bold">X</span>
              </div>
            </div>
          </div>
          
          {/* CTA Text Content */}
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Ready to make your vision a reality?
            </h2>
            
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Join over 800+ happy site owners boosting productivity 
              and efficiency!
            </p>
            
            <div className="flex justify-center">
              <button className="bg-white text-black hover:bg-gray-100 transition-colors py-3 px-8 rounded-full font-medium">
                Start a Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;