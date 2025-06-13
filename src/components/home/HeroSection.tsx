import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Shield, ChevronRight, Sparkles, MapPin, DollarSign, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

interface HeroSectionProps {
  onRequestShowing: () => void;
}

const HeroSection = ({ onRequestShowing }: HeroSectionProps) => {
  const scrollToHowItWorks = () => {
    const element = document.getElementById('how-it-works');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="py-20 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <span className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-8 block">
            FirstLook
          </span>
          
          <h2 className="text-3xl md:text-4xl font-light text-gray-600 mb-8 leading-relaxed">
            Tour the home you want on your own terms
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed font-light">
            The modern home buying experience for today's homebuyer. Navigate real estate with <span className="font-medium text-gray-900">confidence and clarity.</span>
          </p>

          {/* Enhanced Value Props */}
          <div className="bg-gray-50 rounded-3xl p-8 mb-10 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group">
                <Shield className="w-8 h-8 text-gray-600 mx-auto mb-3 group-hover:scale-110 transition-transform duration-200" />
                <h3 className="font-medium text-gray-900 mb-2">Licensed DC Pros</h3>
                <p className="text-gray-600 text-sm font-light">Verified agents, no binding contracts</p>
              </div>
              <div className="text-center group">
                <Clock className="w-8 h-8 text-gray-600 mx-auto mb-3 group-hover:scale-110 transition-transform duration-200" />
                <h3 className="font-medium text-gray-900 mb-2">Book Instantly</h3>
                <p className="text-gray-600 text-sm font-light">Schedule tours on your timeline</p>
              </div>
              <div className="text-center group">
                <DollarSign className="w-8 h-8 text-gray-600 mx-auto mb-3 group-hover:scale-110 transition-transform duration-200" />
                <h3 className="font-medium text-gray-900 mb-2">Save Thousands</h3>
                <p className="text-gray-600 text-sm font-light">Pay only for what you need</p>
              </div>
            </div>
          </div>

          {/* Key Benefits Row */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="flex items-center gap-2 bg-white text-gray-600 px-4 py-2 rounded-full border border-gray-200 font-medium">
              <Sparkles className="w-4 h-4" />
              <span>First Tour Free</span>
            </div>
            <div className="flex items-center gap-2 bg-white text-gray-600 px-4 py-2 rounded-full border border-gray-200 font-medium">
              <Calendar className="w-4 h-4" />
              <span>Same-Day Booking</span>
            </div>
            <div className="flex items-center gap-2 bg-white text-gray-600 px-4 py-2 rounded-full border border-gray-200 font-medium">
              <Shield className="w-4 h-4" />
              <span>No Hidden Fees</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-10">
            <Button 
              size="lg" 
              className="bg-gray-900 hover:bg-gray-800 text-white px-12 py-6 text-xl font-medium shadow-none transform hover:scale-105 transition-all duration-300 rounded-2xl"
              onClick={onRequestShowing}
            >
              <span>Start Your Free Tour</span>
              <ChevronRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-12 py-6 text-xl border-2 border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 hover:scale-105 transition-all duration-300 font-medium rounded-2xl shadow-none"
              onClick={scrollToHowItWorks}
            >
              How It Works
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/subscriptions">
              <Button 
                variant="ghost" 
                className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 underline font-medium hover:scale-105 transition-all duration-200 shadow-none"
              >
                💰 See Transparent Pricing →
              </Button>
            </Link>
            <Link to="/agents">
              <Button 
                variant="ghost" 
                className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 underline font-medium hover:scale-105 transition-all duration-200 shadow-none"
              >
                Join as DC Showing Partner →
              </Button>
            </Link>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8 max-w-3xl mx-auto">
            <p className="text-gray-600 text-lg leading-relaxed font-light">
              <strong className="font-medium text-gray-900">🎯 What happens next?</strong> Pick your properties, choose your time, and we'll connect you with a licensed DC professional. <span className="font-medium text-gray-900">No pressure, complete transparency, total control.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
