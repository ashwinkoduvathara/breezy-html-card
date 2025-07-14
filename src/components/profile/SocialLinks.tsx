
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Globe, Instagram } from "lucide-react";

export const SocialLinks = () => {
  const socialLinks = [
    { name: 'Website', icon: Globe, url: 'https://synnefo.in/', color: 'from-gray-500 to-gray-700' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/company/synnefo-solutions/posts/?feedView=all', color: 'from-blue-600 to-blue-800' },
    // { name: 'GitHub', icon: Github, url: 'https://github.com/johndoe', color: 'from-gray-700 to-black' },
    // { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/johndoe', color: 'from-blue-400 to-blue-600' },
    { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/synnefo.academy?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', color: 'from-pink-500 to-purple-600' },
  ];

  const handleSocialClick = (url: string, name: string) => {
    window.open(url, '_blank');
  };

  return (
    <Card className="backdrop-blur-md bg-white/10 border-white/20 text-white hover:bg-white/15 transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Connect With Me</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {socialLinks.map((social) => (
            <Button
              key={social.name}
              onClick={() => handleSocialClick(social.url, social.name)}
              className={`justify-start bg-gradient-to-r ${social.color} hover:scale-105 transition-all duration-300 border-0 text-white shadow-lg hover:shadow-xl`}
            >
              <social.icon className="w-4 h-4 mr-2" />
              {social.name}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
