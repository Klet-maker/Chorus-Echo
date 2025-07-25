import Link from 'next/link';
import { Twitter, Instagram, Facebook, Store } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Store className="h-6 w-6 mr-2" />
            <span className="font-bold font-headline text-lg">Chorus Echo</span>
          </div>
          <p className="text-muted-foreground text-center md:text-left text-sm max-w-md mb-4 md:mb-0">
            Dando a las prendas hermosas una segunda canción. Calidad, comodidad y estilo, de forma sostenible.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-4 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Chorus Echo. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
