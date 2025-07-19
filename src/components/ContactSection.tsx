import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github, MapPin, Phone } from 'lucide-react';

export const ContactSection = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'imadessam.alissa@gmail.com',
      action: () => window.open('mailto:imadessam.alissa@gmail.com'),
      description: 'Send me an email'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'Connect with me',
      action: () => window.open('https://www.linkedin.com/in/imad-al-issa-b6b422236', '_blank'),
      description: 'Professional networking'
    },
    {
      icon: Github,
      title: 'GitHub',
      value: 'View my repositories',
      action: () => window.open('https://github.com/Imadalissa', '_blank'),
      description: 'Check out my code'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Beirut, Lebanon',
      action: null,
      description: 'Currently based in'
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, 
            or just having a chat about technology and development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <Card 
                key={index} 
                className={`shadow-elegant hover:shadow-glow transition-all duration-300 group ${
                  method.action ? 'cursor-pointer' : ''
                }`}
                onClick={method.action || undefined}
              >
                <CardHeader className="text-center pb-3">
                  <div className="mx-auto p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors w-fit">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {method.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                  <p className="font-medium text-center break-words">{method.value}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="shadow-elegant">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-gradient">Let's Work Together</h3>
              <p className="text-muted-foreground mb-6">
                Whether you're looking for a dedicated developer for your team, 
                need help with a project, or want to discuss potential collaborations, 
                I'd love to hear from you.
              </p>
              
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Currently seeking opportunities in:
                </p>
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {['Full Stack Development', 'Mobile Development', 'Web Development', 'Software Engineering'].map((area, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {area}
                    </span>
                  ))}
                </div>
                
                <Button 
                  size="lg" 
                  className="shadow-elegant hover:shadow-glow transition-all duration-300"
                  onClick={() => window.open('mailto:imadalissa@gmail.com')}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Start a Conversation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};