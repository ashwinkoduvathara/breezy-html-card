
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export const SkillsSection = () => {
  const skills = [
    { name: 'React/Next.js', level: 95, color: 'bg-blue-500' },
    { name: 'TypeScript', level: 90, color: 'bg-indigo-500' },
    { name: 'Node.js', level: 88, color: 'bg-green-500' },
    { name: 'Python', level: 85, color: 'bg-yellow-500' },
    { name: 'AWS/Cloud', level: 82, color: 'bg-orange-500' },
    { name: 'MongoDB', level: 80, color: 'bg-purple-500' },
  ];

  const technologies = [
    'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'AWS', 
    'MongoDB', 'PostgreSQL', 'Docker', 'Kubernetes', 'GraphQL', 'REST APIs'
  ];

  return (
    <Card className="backdrop-blur-md bg-white/10 border-white/20 text-white hover:bg-white/15 transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Skills & Expertise</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">{skill.name}</span>
                <span className="text-sm text-white/70">{skill.level}%</span>
              </div>
              <Progress 
                value={skill.level} 
                className="h-2 bg-white/20" 
                style={{ 
                  '--progress-background': `linear-gradient(to right, ${skill.color.replace('bg-', '')}, ${skill.color.replace('bg-', '').replace('-500', '-600')})` 
                } as any}
              />
            </div>
          ))}
        </div>
        
        <div>
          <h4 className="text-sm font-medium mb-3 text-white/90">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <Badge 
                key={tech} 
                variant="secondary" 
                className="bg-white/20 text-white border-white/30 hover:bg-white/30 transition-colors hover:scale-105 transition-transform"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
