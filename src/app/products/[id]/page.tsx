import { getProductById } from '@/lib/mock-data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Star, ShoppingCart } from 'lucide-react';
import StyleRecommender from '@/components/style-recommender';

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
        <div>
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg shadow-lg">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover"
              data-ai-hint={product.dataAiHint}
            />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4">
            {product.images.slice(1).map((img, index) => (
              <div key={index} className="relative aspect-square w-full overflow-hidden rounded-lg shadow-md">
                <Image 
                  src={img} 
                  alt={`${product.name} vista ${index + 2}`} 
                  fill 
                  className="object-cover"
                  data-ai-hint={product.dataAiHint}
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-medium text-primary">{product.category}</p>
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground mt-1">
            {product.name}
          </h1>
          <p className="text-3xl font-semibold text-primary mt-4">${product.price.toFixed(2)}</p>
          
          <div className="flex items-center mt-4">
              <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-amber-400 fill-amber-400" />
                  ))}
              </div>
              <p className="ml-2 text-sm text-muted-foreground">(12 reseñas)</p>
          </div>
          
          <div className="mt-6 text-foreground/80 space-y-4">
            <p>{product.description}</p>
          </div>

          <div className="mt-8">
            <Button size="lg" className="w-full md:w-auto font-bold">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Añadir al Carrito
            </Button>
          </div>

          <StyleRecommender productDescription={product.description} />
        </div>
      </div>
    </div>
  );
}
