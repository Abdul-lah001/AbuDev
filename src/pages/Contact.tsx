
import React from 'react';
import { Mail, Phone, MapPin, Github, Twitter, Linkedin } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import AnimatedText from '@/components/AnimatedText';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  const contactInfo = [
    { 
      icon: <Mail className="w-5 h-5" />, 
      label: 'Email', 
      value: 'abdulieadecky@gmail.com',
      href: 'mailto:abdulieadecky@gmail.com' 
    },
    { 
      icon: <Phone className="w-5 h-5" />, 
      label: 'Phone', 
      value: '+234 8153 518 873',
      href: 'tel:+234 8153 518 873' 
    },
    { 
      icon: <MapPin className="w-5 h-5" />, 
      label: 'Location', 
      value: 'Lagos, Nigeria',
      href: null
    }
  ];
  
  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, label: 'GitHub', href: 'https://github.com/Abdul-lah001' },
    { icon: <Twitter className="w-5 h-5" />, label: 'Twitter', href: 'https://x.com/AbuDev4you' },
    { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn', href: 'https://linkedin.com/in/abdullah-adekilekun-b69a24246' }
  ];

  return (
    <PageTransition>
      <div className="pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-16">
            <AnimatedText 
              text="Let's work together"
              element="h1"
              className="text-4xl md:text-5xl font-display font-bold"
            />
            <p className="text-lg text-muted-foreground mt-4">
              I'm currently available for freelance projects and job opportunities. 
              Feel free to reach out if you'd like to discuss how we can work together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl font-bold mb-6">Send me a message</h2>
              <ContactForm />
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-2xl font-bold mb-6">Contact information</h2>
              <div className="space-y-6 mb-10">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-medium">{item.label}</p>
                      {item.href ? (
                        <a 
                          href={item.href} 
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold mb-6">Connect with me</h2>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((item, index) => (
                  <a 
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-lg text-secondary-foreground hover:bg-secondary/70 transition-colors"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;
