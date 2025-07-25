import ContactForm from '@/components/contact-form';
import { Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';
import RatingForm from '@/components/rating-form';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground">Ponte en Contacto</h1>
        <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
          Nos encantaría saber de ti. Envíanos un mensaje y te responderemos en breve.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-card p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-headline font-bold mb-6">Información de Contacto</h2>
            <div className="space-y-6 text-foreground">
                <div className="flex items-start">
                    <MapPin className="h-6 w-6 mr-4 text-primary mt-1 flex-shrink-0"/>
                    <div>
                        <h3 className="font-semibold">Nuestra Tienda</h3>
                        <p className="text-muted-foreground">123 Fashion Ave, Style City, 90210</p>
                    </div>
                </div>
                <div className="flex items-start">
                    <Mail className="h-6 w-6 mr-4 text-primary mt-1 flex-shrink-0"/>
                    <div>
                        <h3 className="font-semibold">Escríbenos</h3>
                        <a href="mailto:hola@chorusecho.com" className="text-muted-foreground hover:text-primary">hola@chorusecho.com</a>
                    </div>
                </div>
                <div className="flex items-start">
                    <Phone className="h-6 w-6 mr-4 text-primary mt-1 flex-shrink-0"/>
                    <div>
                        <h3 className="font-semibold">Llámanos</h3>
                        <p className="text-muted-foreground">(123) 456-7890</p>
                    </div>
                </div>
            </div>
            <div className="mt-8 h-64 bg-muted rounded-lg overflow-hidden">
              <Image
                src="/Ubicacion.png"
                alt="Mapa de la ubicación de la tienda"
                width={600}
                height={400}
                className="w-full h-full object-cover"
                data-ai-hint="store map"
              />
            </div>
        </div>
        <div className="bg-card p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-headline font-bold mb-6">Envía un Mensaje</h2>
          <ContactForm />
        </div>
      </div>
      <div className="mt-16 text-center">
        <div className="bg-card p-8 rounded-lg shadow-md max-w-2xl mx-auto">
            <h2 className="text-2xl font-headline font-bold mb-6">¡Valora Nuestra Tienda!</h2>
            <p className="text-muted-foreground mb-6">Tu opinión nos ayuda a mejorar. Por favor, déjanos saber cómo fue tu experiencia.</p>
            <RatingForm />
        </div>
      </div>
    </div>
  );
}
