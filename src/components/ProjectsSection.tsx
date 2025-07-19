import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Smartphone, Globe } from 'lucide-react';

export const ProjectsSection = () => {
  const projects = [
    {
      title: 'Mobile Shopping App',
      description: 'A comprehensive Android shopping application featuring categorized products, shopping cart functionality, and intuitive user interface. Built with Java and Android Studio, focusing on object-oriented design principles and local data handling.',
      technologies: ['Java', 'Android Studio', 'XML', 'SQLite'],
      type: 'Mobile App',
      icon: Smartphone,
      features: [
        'Product categorization and browsing',
        'Shopping cart management',
        'User-friendly interface design',
        'Local data storage and retrieval'
      ]
    },
    {
      title: 'Student Course Management System',
      description: 'A full-stack web application designed for managing student registrations and course administration. Features a responsive frontend and robust backend with database integration for seamless data management.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      type: 'Web Application',
      icon: Globe,
      features: [
        'Student registration and management',
        'Course creation and enrollment',
        'Administrative dashboard',
        'Responsive design for all devices'
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in web and mobile development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card key={index} className="shadow-elegant hover:shadow-glow transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                        <Badge variant="outline" className="mt-1">
                          {project.type}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">
                    {project.description}
                  </p>

                  <div>
                    <h4 className="font-semibold mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-muted-foreground flex items-start">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-3 pt-4">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.open('https://github.com/Imadalissa', '_blank')}
                      className="flex-1 dark:hover:bg-white dark:hover:text-black dark:hover:border-white transition-colors"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Source Code
                    </Button>
                    {project.type === 'Web Application' && (
                      <Button 
                        size="sm"
                        className="flex-1"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto shadow-elegant">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-4">More Projects Coming Soon</h3>
              <p className="text-muted-foreground mb-6">
                I'm constantly working on new projects and exploring cutting-edge technologies. 
                Check out my GitHub for the latest updates and contributions.
              </p>
              <Button 
                variant="outline"
                onClick={() => window.open('https://github.com/lmadalissa', '_blank')}
              >
                <Github className="mr-2 h-4 w-4" />
                View All Projects
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};