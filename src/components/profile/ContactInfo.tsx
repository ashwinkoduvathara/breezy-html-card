
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Download, MessageCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export const ContactInfo = () => {
  const handleContact = (type: string, value: string) => {
    if (type === 'email') {
      window.open(`mailto:${value}`);
    } else if (type === 'phone') {
      window.open(`tel:${value}`);
    } else if (type === 'whatsapp') {
      window.open(`https://wa.me/7736013411?text=Hi! I found your digital business card`);
    }
    toast({
      title: "Opening contact method",
      description: `Redirecting to ${type}...`,
    });
  };

  const handleDownloadVCard = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Rahul PR
ORG:Synnefo Solutions
TITLE:Senior Network Engineer
TEL:+91 7736013411
EMAIL:rahul@synnefo.in
ADR:2nd floor, Aswathi Building, Chittoor Rd, near Maharajas Metro Station, Iyyattil Junction, Ernakulam South, Kochi, Ernakulam, Kerala 682011`;

    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'rahul_synnefo.vcf';
    a.click();
    window.URL.revokeObjectURL(url);
    
    toast({
      title: "Contact downloaded!",
      description: "VCard has been saved to your device.",
    });
  };

  return (
    <Card className="backdrop-blur-md bg-white/10 border-white/20 text-white hover:bg-white/15 transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Get In Touch</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button
          onClick={() => handleContact('email', 'john.doe@example.com')}
          className="w-full justify-start bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 border-0 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          <Mail className="w-4 h-4 mr-3" />
          rahul@synnefo.in
        </Button>
        
        <Button
          onClick={() => handleContact('phone', '+91 7736013411')}
          className="w-full justify-start bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 border-0 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          <Phone className="w-4 h-4 mr-3" />
          +91 7736013411
        </Button>
        
        <Button
          onClick={() => handleContact('whatsapp', '')}
          className="w-full justify-start bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 border-0 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          <MessageCircle className="w-4 h-4 mr-3" />
          WhatsApp Chat
        </Button>
        
        <Button
          onClick={handleDownloadVCard}
          variant="outline"
          className="w-full justify-start border-white/30 text-black hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:scale-105"
        >
          <Download className="w-4 h-4 mr-3" />
          Save Contact
        </Button>
      </CardContent>
    </Card>
  );
};
