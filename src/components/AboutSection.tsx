import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, MapPin, Calendar, Target } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A dedicated Computer Science student with a passion for creating innovative 
            solutions and building meaningful digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="shadow-elegant">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Objective</h3>
                    <p className="text-muted-foreground">
                      Computer Science student with solid foundations in programming, database systems, 
                      and networking. Seeking opportunities to apply my skills in full stack web and 
                      mobile development, contribute to real-world projects, and grow in a challenging 
                      technical environment.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Education</h3>
                    <div className="space-y-2">
                      <p className="font-medium">Bachelor of Science in Computer Science</p>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>AUCE, Beirut, Lebanon</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>Expected 2026</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Relevant Coursework</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Data Structures',
                'Object-Oriented Programming',
                'Web Development',
                'Database Systems',
                'Computer Networks',
                'Java Programming',
                'Python Development',
                'Circuit Analysis',
                'Logic Circuits',
                'Data Communication',
                'IT Project Management',
                'Mobile App Development'
              ].map((course, index) => (
                <div 
                  key={index}
                  className="p-3 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
                >
                  <span className="text-sm font-medium">{course}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-primary rounded-lg text-primary-foreground">
              <h4 className="text-lg font-semibold mb-2">Currently Learning</h4>
              <p>
                Completed intensive Full Stack Web Development training at SE Factory, 
                focusing on modern technologies and clean coding practices with real-world 
                project experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};