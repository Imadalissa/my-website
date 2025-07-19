import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import heroIllustration from '@/assets/hero-illustration.png';
import { useTypewriter } from '@/hooks/useTypewriter';

export const HeroSection = () => {
  const { displayText } = useTypewriter({ 
    text: "Imad Al Issa", 
    speed: 120,
    delay: 500 
  });

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center gradient-hero">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Hi, I'm{' '}
                <span className="text-gradient">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                A creative mind shaping the web with code and passion.
                <span className="text-primary font-semibold"> Software Engineer and Full Stack Development. </span>
              </p>
            </div>

            <p className="text-lg text-muted-foreground max-w-xl">
              Currently pursuing my Bachelor's in Computer Science at AUCE, Beirut. 
              I specialize in building modern web and mobile applications with clean, 
              efficient code and user-focused design.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="shadow-elegant hover:shadow-glow transition-all duration-300"
                onClick={() => window.open('mailto:imadessam.alissa@gmail.com')}
              >
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open('/cv/Imad_Al_Issa_CV.pdf', '_blank')}
                className="dark:hover:bg-white dark:hover:text-black dark:hover:border-white transition-colors"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open('#projects')}
                className="dark:hover:bg-white dark:hover:text-black dark:hover:border-white transition-colors"
              >
                View My Work
              </Button>
            </div>

            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => window.open('https://github.com/Imadalissa', '_blank')}
                className="hover:text-accent hover:bg-accent/10 transition-colors"
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => window.open('https://www.linkedin.com/in/imad-al-issa-b6b422236', '_blank')}
                className="hover:text-accent hover:bg-accent/10 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="flex justify-center animate-slide-up">
            <div className="relative">
              <img 
                src={heroIllustration} 
                alt="Developer illustration" 
                className="w-full max-w-lg h-auto animate-float"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12 animate-bounce">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={scrollToAbout}
            className="rounded-full"
          >
            <ArrowDown className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};