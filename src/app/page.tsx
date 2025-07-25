import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, RefreshCw, Smile } from 'lucide-react';
import ProductCard from '@/components/product-card';
import { getProducts } from '@/lib/mock-data';

export default function Home() {
  const featuredProducts = getProducts().slice(0, 4);

  return (
    <div className="flex flex-col">
      <section className="relative h-[60vh] md:h-[70vh] w-full flex items-center justify-center text-center text-white">
        <Image
          src="/mapa-tienda.png"
          alt="Mujer vistiendo ropa de segunda mano con estilo"
          layout="fill"
          objectFit="cover"
          className="z-0"
          data-ai-hint="fashion background"
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="relative z-10 p-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-white leading-tight drop-shadow-lg">
            Redescubre la Moda, Redefine el Estilo.
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
            Experimenta la alegría de piezas únicas de segunda mano y alta calidad que aportan comodidad y carácter a tu armario.
          </p>
          <Button asChild size="lg" className="mt-8 font-bold text-lg">
            <Link href="/products">Explora la Colección</Link>
          </Button>
        </div>
      </section>

      <section id="why-us" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground">¿Por qué Chorus Echo?</h2>
            <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
              Creemos en la moda que se siente bien y hace el bien.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <Card className="border-2 border-transparent hover:border-primary transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="mb-4 inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary">
                  <Heart className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold font-headline mb-2">Calidad Superior</h3>
                <p className="text-muted-foreground">
                  Cada artículo es cuidadosamente seleccionado e inspeccionado para asegurar que cumple nuestros altos estándares de calidad y manufactura.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-transparent hover:border-primary transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="mb-4 inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary">
                  <Smile className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold font-headline mb-2">Comodidad Inigualable</h3>
                <p className="text-muted-foreground">
                  Priorizamos ropa que no solo es hermosa, sino también cómoda para el uso diario, para que puedas sentirte en tu mejor momento.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-transparent hover:border-primary transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="mb-4 inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary">
                  <RefreshCw className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold font-headline mb-2">Sostenibilidad Moderna</h3>
                <p className="text-muted-foreground">
                  Elegir segunda mano es una forma moderna de ser sostenible. Únete a nosotros para crear una economía de la moda más circular.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <section id="featured-products" className="py-16 md:py-24 bg-background/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground">Hallazgos Destacados</h2>
            <p className="mt-2 text-lg text-muted-foreground">Estilos seleccionados a mano que creemos que te encantarán.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/products">Ver Todos los Productos</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
