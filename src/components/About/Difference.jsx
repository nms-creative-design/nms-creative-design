import React from 'react';

const Difference = () => {
  return (
    <section className="bg-black py-12 w-full">
      {/* Main container */}
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Discover the Difference
            <br />
            of NMS Creative Design
          </h2>
        </div>
        
        {/* Stats Cards - Row on desktop, Column on mobile */}
        <div className="flex flex-col md:flex-row justify-center gap-8 mb-16">
          {/* 100+ Projects Card */}
          <div className="flex-1 max-w-md bg-gray-900 rounded-3xl border border-gray-800 p-8 text-center">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="items-center justify-center">
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M60.0763 79.7804C79.3124 79.7804 94.9064 64.1864 94.9064 44.9503C94.9064 25.7141 79.3124 10.1201 60.0763 10.1201C40.8401 10.1201 25.2461 25.7141 25.2461 44.9503C25.2461 64.1864 40.8401 79.7804 60.0763 79.7804ZM60.0763 30.0231C58.6629 30.0231 57.7175 31.719 55.8267 35.1108L55.3376 35.9883C54.8003 36.9522 54.5316 37.4341 54.1127 37.7521C53.6939 38.0701 53.1722 38.1881 52.1288 38.4242L51.1789 38.6391C47.5073 39.4698 45.6715 39.8852 45.2348 41.2897C44.798 42.6942 46.0495 44.1577 48.5526 47.0847L49.2002 47.842C49.9115 48.6738 50.2671 49.0896 50.4271 49.6041C50.5871 50.1186 50.5333 50.6735 50.4258 51.7833L50.3279 52.7936C49.9495 56.6989 49.7602 58.6515 50.9037 59.5195C52.0472 60.3876 53.766 59.5962 57.2038 58.0133L58.0932 57.6038C59.07 57.154 59.5585 56.9291 60.0763 56.9291C60.594 56.9291 61.0825 57.154 62.0594 57.6038L62.9487 58.0133C66.3865 59.5962 68.1053 60.3876 69.2488 59.5195C70.3923 58.6515 70.2031 56.6989 69.8246 52.7936L69.7267 51.7833C69.6192 50.6736 69.5654 50.1186 69.7254 49.6041C69.8854 49.0897 70.241 48.6738 70.9523 47.842L71.5999 47.0847C74.103 44.1578 75.3545 42.6942 74.9178 41.2897C74.481 39.8852 72.6452 39.4698 68.9736 38.6391L68.0237 38.4242C66.9803 38.1881 66.4586 38.0701 66.0398 37.7521C65.6209 37.4341 65.3522 36.9522 64.8149 35.9883L64.3258 35.1108C62.435 31.719 61.4897 30.0231 60.0763 30.0231Z" fill="white"/>
                <path d="M22.7344 64.826L15.2553 72.57C12.5678 75.3526 11.2241 76.7439 10.7591 77.9222C9.69949 80.6071 10.6063 83.5854 12.9133 84.9978C13.9258 85.6176 15.7519 85.8107 19.4042 86.197C21.4662 86.4151 22.4975 86.5241 23.361 86.8552C25.2944 87.5962 26.7983 89.1534 27.514 91.1552C27.8337 92.0493 27.939 93.1169 28.1497 95.252C28.5227 99.0337 28.7093 100.924 29.3079 101.973C30.6719 104.362 33.5484 105.3 36.1415 104.203C37.2795 103.722 38.6232 102.331 41.3107 99.5479L53.6606 86.7607C40.2385 84.7181 28.8898 76.3666 22.7344 64.826Z" fill="white"/>
                <path d="M66.4923 86.7607L78.8422 99.5479C81.5297 102.331 82.8734 103.722 84.0114 104.203C86.6045 105.3 89.481 104.362 90.845 101.973C91.4436 100.924 91.6302 99.0337 92.0033 95.252C92.2139 93.117 92.3192 92.0493 92.6389 91.1552C93.3546 89.1534 94.8586 87.5962 96.7919 86.8552C97.6555 86.5241 98.6866 86.4151 100.749 86.197C104.401 85.8107 106.227 85.6176 107.24 84.9978C109.547 83.5854 110.453 80.6071 109.394 77.9222C108.929 76.7439 107.585 75.3526 104.898 72.57L97.4185 64.8261C91.2631 76.3666 79.9144 84.7181 66.4923 86.7607Z" fill="white"/>
                </svg>
            </div>
            </div>
            {/* Stat */}

            <h3 className="text-6xl font-bold text-white mb-2">100+</h3>
            <p className="text-gray-400 text-lg">Projects completed</p>
          </div>
          
          {/* 200% Growth Card */}
          <div className="flex-1 max-w-md bg-gray-900 rounded-3xl border border-gray-800 p-8 text-center">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="items-center justify-center">
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.4533 17.4069C10.1665 24.6937 10.1665 36.4216 10.1665 59.8775C10.1665 83.3333 10.1665 95.0613 17.4533 102.348C24.7401 109.635 36.468 109.635 59.9239 109.635C83.3797 109.635 95.1076 109.635 102.394 102.348C109.681 95.0613 109.681 83.3333 109.681 59.8775C109.681 36.4216 109.681 24.6937 102.394 17.4069C95.1076 10.1201 83.3797 10.1201 59.9239 10.1201C36.468 10.1201 24.7401 10.1201 17.4533 17.4069ZM68.6314 49.926C68.6314 51.987 70.3022 53.6578 72.3632 53.6578H75.7932L65.7792 63.6718C65.2934 64.1576 64.5058 64.1576 64.02 63.6718L56.1296 55.7813C52.729 52.3808 47.2157 52.3808 43.8152 55.7813L32.4064 67.1902C30.949 68.6475 30.949 71.0104 32.4064 72.4677C33.8638 73.9251 36.2266 73.9251 37.684 72.4677L49.0928 61.0589C49.5786 60.5731 50.3662 60.5731 50.852 61.0589L58.7424 68.9494C62.1429 72.3499 67.6563 72.3499 71.0568 68.9494L81.0707 58.9354V62.3654C81.0707 64.4264 82.7415 66.0972 84.8026 66.0972C86.8636 66.0972 88.5344 64.4264 88.5344 62.3654V49.926C88.5344 47.865 86.8636 46.1942 84.8026 46.1942H72.3632C70.3022 46.1942 68.6314 47.865 68.6314 49.926Z" fill="white"/>
                </svg>

              </div>
            </div>
            {/* Stat */}
            <h3 className="text-6xl font-bold text-white mb-2">200%</h3>
            <p className="text-gray-400 text-lg">Year on year growth</p>
          </div>
        </div>
        
        {/* Description Text */}
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-gray-400 text-lg mb-8">
            At <span className="text-gray-300 font-medium">New Media Services - NMS Creative Design</span> we're not just a digital agency; we're the driving force behind your brand's digital transformation. What sets us apart is our unwavering commitment to pushing creative boundaries, our devotion to transforming ideas into results, and our profound understanding that your success is our success.
          </p>
          
          <p className="text-gray-400 text-lg">
            Our passionate team of web designers takes a unique approach to each project, fusing artistic finesse with data-driven strategies. We don't just build websites; we craft immersive digital experiences. We don't simply design; we create visual narratives that leave a lasting impact. We don't follow trends; we set new ones.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Difference;