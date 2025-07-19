import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-card border-t border-border/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gradient">Imad Al Issa</h3>
            <p className="text-muted-foreground">
              Computer Science student passionate about creating innovative 
              solutions through code.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              {[{
              label: 'About',
              href: '#about'
            }, {
              label: 'Skills',
              href: '#skills'
            }, {
              label: 'Projects',
              href: '#projects'
            }, {
              label: 'Contact',
              href: '#contact'
            }].map(link => <button key={link.href} onClick={() => {
              const element = document.getElementById(link.href.substring(1));
              if (element) {
                element.scrollIntoView({
                  behavior: 'smooth'
                });
              }
            }} className="text-muted-foreground hover:text-primary transition-colors text-left">
                  {link.label}
                </button>)}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Connect</h4>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" onClick={() => window.open('https://github.com/Imadalissa', '_blank')} className="hover:text-primary">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" onClick={() => window.open('https://www.linkedin.com/in/imad-al-issa-b6b422236', '_blank')} className="hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" onClick={() => window.open('mailto:imadessam.alissa@gmail.com')} className="hover:text-primary">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center space-x-1">
            <span>© {currentYear} Imad Al Issa. Built with</span>
            
            <span>using React & TypeScript</span>
          </p>
        </div>
      </div>
    </footer>;
};