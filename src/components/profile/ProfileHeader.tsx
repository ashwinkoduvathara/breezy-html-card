
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MapPin, Briefcase } from "lucide-react";

export const ProfileHeader = () => {
  return (
    <div className="text-center space-y-6 backdrop-blur-md bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-300">
      <div className="relative inline-block">
        <Avatar className="w-32 h-32 mx-auto border-4 border-white/30 shadow-2xl hover:scale-105 transition-transform duration-300">
          <AvatarImage src="../IMG_50723.jpg" alt="Profile" />
          <AvatarFallback className="text-2xl bg-gradient-to-br from-purple-400 to-blue-400 text-white">JD</AvatarFallback>
        </Avatar>
        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-4 border-white animate-pulse"></div>
      </div>
      
      <div className="space-y-4">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Rahul PR
          </h1>
          <p className="text-xl text-blue-200 font-medium">Senior Network Engineer</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 text-white/80">
          <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20">
            <MapPin className="w-4 h-4" />
            <span>Synnefo Solutions</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20">
            <Briefcase className="w-4 h-4" />
            <span>20+ Years Experience</span>
          </div>
        </div>
        
        <p className="text-white/90 max-w-2xl mx-auto leading-relaxed">
        Senior Network Engineer with extensive experience in designing, securing, and managing enterprise networks. Skilled in routing, switching, and troubleshooting across multi-vendor environments.
        </p>
        
        {/* <div className="flex flex-wrap justify-center gap-2">
          <Badge variant="secondary" className="bg-gradient-to-r from-purple-500 to-blue-500 text-white border-0 hover:scale-105 transition-transform">
            React Expert
          </Badge>
          <Badge variant="secondary" className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white border-0 hover:scale-105 transition-transform">
            TypeScript
          </Badge>
          <Badge variant="secondary" className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-0 hover:scale-105 transition-transform">
            Node.js
          </Badge>
        </div> */}
      </div>
    </div>
  );
};
