import React from 'react';
import { Users, PlayCircle, TrendingUp, Shield, ExternalLink } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
            वीडियो देखकर कमाई करने का सुनहरा अवसर
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            हमारे टेलीग्राम चैनल से जुड़ें और रोज़ाना घर बैठे आमदनी करें। सीधी और विश्वसनीय कमाई का मौका।
          </p>
          <a
            href="https://t.me/+RhGzmfRlzGFhYjE1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-200"
          >
            टेलीग्राम चैनल से जुड़ें
            <ExternalLink className="ml-2 h-5 w-5" />
          </a>
        </div>

        {/* Feature Image */}
        <div className="mt-16 rounded-lg overflow-hidden shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=1200&q=80"
            alt="कमाई का अवसर"
            className="w-full h-[400px] object-cover"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <FeatureCard
              icon={<PlayCircle className="h-10 w-10 text-blue-600" />}
              title="आसान काम"
              description="सिर्फ वीडियो देखें और कमाई करें। कोई जटिल काम नहीं।"
            />
            <FeatureCard
              icon={<TrendingUp className="h-10 w-10 text-blue-600" />}
              title="नियमित भुगतान"
              description="समय पर और सुनिश्चित भुगतान की गारंटी।"
            />
            <FeatureCard
              icon={<Users className="h-10 w-10 text-blue-600" />}
              title="सक्रिय समुदाय"
              description="हजारों सदस्यों का विश्वसनीय नेटवर्क।"
            />
          </div>
        </div>
      </div>

      {/* Trust Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center mb-8">
            <Shield className="h-6 w-6 text-green-600 mr-2" />
            <span className="text-lg font-semibold text-green-600">100% सुरक्षित और विश्वसनीय</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            लाखों लोगों का विश्वास
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            हमारा प्लेटफॉर्म पूरी तरह से सुरक्षित और विश्वसनीय है। हजारों लोग रोज़ाना हमारे साथ जुड़कर कमाई कर रहे हैं।
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
          <p>© 2024 सर्वाधिकार सुरक्षित</p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="text-center p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-200">
      <div className="inline-flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default App;