import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/10" />
      
      {/* Animated Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      
      {/* Main Content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
        <div className="animate-fade-in">
          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Coming Soon
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            We're working on something amazing. Our website will be back soon.
          </p>
          
          {/* Instagram CTA */}
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <p className="text-lg text-foreground/80 mb-8">
              Meanwhile, check out our latest updates
            </p>
            
            <Button 
              variant="glow" 
              size="lg" 
              className="animate-pulse-glow group"
              onClick={() => window.open('https://instagram.com/iiooio.io', '_blank')}
            >
              <Instagram className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              Follow on Instagram
            </Button>
          </div>
          
          {/* Decorative Elements */}
          <div className="mt-16 flex justify-center space-x-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <div className="w-2 h-2 bg-primary-glow rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
      
      {/* Bottom Text */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in" style={{ animationDelay: '0.8s' }}>
        <p className="text-sm text-muted-foreground">
          Thank you for your patience
        </p>
      </div>
    </div>
  );
};

export default Index;