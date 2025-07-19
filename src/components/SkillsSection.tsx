import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Smartphone, Globe, Network, Users } from 'lucide-react';

export const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['Java', 'Python', 'JavaScript', 'HTML', 'CSS','React', 'SQL', 'PHP'],
      color: 'bg-blue-500/10 text-blue-600'
    },
    {
      title: 'Web Development',
      icon: Globe,
      skills: ['Full Stack Development', 'HTML5', 'CSS3', 'JavaScript ES6+', 'MySQL', 'PHP'],
      color: 'bg-green-500/10 text-green-600'
    },
    {
      title: 'Mobile Development',
      icon: Smartphone,
      skills: ['Android Development', 'Java', 'Android Studio', 'UI/UX Design'],
      color: 'bg-purple-500/10 text-purple-600'
    },
    {
      title: 'Database & Tools',
      icon: Database,
      skills: ['MySQL', 'Git', 'GitHub', 'VS Code', 'Android Studio'],
      color: 'bg-orange-500/10 text-orange-600'
    },
    {
      title: 'Networking',
      icon: Network,
      skills: ['Cisco Packet Tracer', 'Network Configuration', 'Data Communication'],
      color: 'bg-red-500/10 text-red-600'
    },
    {
      title: 'Soft Skills',
      icon: Users,
      skills: ['Teamwork', 'Communication', 'Problem Solving', 'Agile Methodologies'],
      color: 'bg-indigo-500/10 text-indigo-600'
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit of technologies and methodologies I use to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="shadow-elegant hover:shadow-glow transition-all duration-300 group">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${category.color}`}>
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary"
                        className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto shadow-elegant">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-gradient">Professional Experience</h3>
              <div className="bg-muted/50 rounded-lg p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h4 className="text-xl font-semibold">Software Development Trainee</h4>
                  <span className="text-sm text-muted-foreground">March 2025 - June 2025</span>
                </div>
                <p className="text-primary font-medium mb-2">SE Factory - Beirut, Lebanon (Remote)</p>
                <ul className="text-muted-foreground space-y-2 text-left">
                  <li>• Completed intensive full-time training in Full Stack Web Development</li>
                  <li>• Built and deployed web applications using modern technologies and clean coding practices</li>
                  <li>• Collaborated with teams on real-world software projects under professional mentorship</li>
                  <li>• Applied Agile methodologies, Git version control, and team-based workflows</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};