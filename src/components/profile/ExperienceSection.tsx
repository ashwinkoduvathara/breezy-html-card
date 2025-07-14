
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";

export const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovations Inc.',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Leading development of scalable web applications using React, Node.js, and AWS. Mentoring junior developers and architecting system solutions.',
      achievements: ['Led team of 5 developers', 'Improved app performance by 40%', 'Deployed 15+ successful projects']
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Solutions Co.',
      location: 'San Francisco, CA',
      period: '2020 - 2022',
      description: 'Developed responsive web applications and RESTful APIs. Collaborated with designers and product managers to deliver user-centric solutions.',
      achievements: ['Built 20+ web applications', 'Reduced loading time by 60%', 'Integrated 10+ third-party APIs']
    },
    {
      title: 'Frontend Developer',
      company: 'StartupXYZ',
      location: 'San Francisco, CA',
      period: '2019 - 2020',
      description: 'Created interactive user interfaces using React and modern CSS frameworks. Focused on responsive design and user experience optimization.',
      achievements: ['Increased user engagement by 35%', 'Delivered pixel-perfect designs', 'Optimized for mobile-first approach']
    }
  ];

  return (
    <Card className="backdrop-blur-md bg-white/10 border-white/20 text-white hover:bg-white/15 transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Professional Experience</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-6 border-l-2 border-white/20 last:border-l-0">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-2 border-white/30"></div>
              
              <div className="space-y-3">
                <div>
                  <h3 className="text-lg font-semibold text-white">{exp.title}</h3>
                  <h4 className="text-blue-200 font-medium">{exp.company}</h4>
                  
                  <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-white/70">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-white/80 leading-relaxed">{exp.description}</p>
                
                <div className="space-y-1">
                  <h5 className="text-sm font-medium text-white/90">Key Achievements:</h5>
                  <ul className="text-sm text-white/70 space-y-1">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
