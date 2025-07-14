
import { ProfileHeader } from "./profile/ProfileHeader";
import { ContactInfo } from "./profile/ContactInfo";
import { SkillsSection } from "./profile/SkillsSection";
import { SocialLinks } from "./profile/SocialLinks";
import { ExperienceSection } from "./profile/ExperienceSection";
import { ServicesSection } from "./profile/ServicesSection";

export const DigitalBusinessCard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-4xl">
        <div className="space-y-8 animate-fade-in">
          <ProfileHeader />
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-8">
              <ContactInfo />
              <SocialLinks />
            </div>
            <div className="space-y-8">
              {/* <SkillsSection /> */}
              <ServicesSection />
            </div>
          </div>
          {/* <ExperienceSection /> */}
        </div>
      </div>
    </div>
  );
};
