'use client';

import { useState, useEffect, useTransition } from 'react';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { getRatingSummaryAction, submitRatingAction } from '@/app/actions/rating-actions';
import { Skeleton } from './ui/skeleton';

export default function RatingForm() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [summary, setSummary] = useState<{ totalReviews: number; averageRating: number } | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, startSubmitTransition] = useTransition();
  
  const { toast } = useToast();

  useEffect(() => {
    const fetchSummary = async () => {
      setIsLoading(true);
      try {
        const data = await getRatingSummaryAction();
        setSummary(data);
      } catch (error) {
        console.error("Failed to fetch rating summary:", error);
        toast({
          variant: 'destructive',
          title: 'Error de Carga',
          description: 'No se pudo cargar la calificación de la tienda.',
        });
      } finally {
        setIsLoading(false);
      }
    };
    fetchSummary();
  }, [toast]);

  const handleSubmit = () => {
    if (rating === 0) {
      toast({
        variant: 'destructive',
        title: 'Calificación Incompleta',
        description: 'Por favor, selecciona una calificación de estrellas antes de enviar.',
      });
      return;
    }
    
    startSubmitTransition(async () => {
      try {
        const newSummary = await submitRatingAction(rating);
        setSummary(newSummary);
        toast({
          title: '¡Gracias por tu Calificación!',
          description: `Has calificado la tienda con ${rating} de 5 estrellas.`,
        });
        setRating(0);
        setHover(0);
      } catch (error) {
        toast({
          variant: 'destructive',
          title: 'Error al Enviar',
          description: 'No se pudo enviar tu calificación. Inténtalo de nuevo.',
        });
      }
    });
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 text-center">
        {isLoading ? (
            <>
                <Skeleton className="h-7 w-48 mx-auto" />
                <Skeleton className="h-5 w-36 mx-auto mt-2" />
            </>
        ) : (
            <>
                <p className="text-lg font-semibold text-foreground">
                Calificación Promedio: {summary ? summary.averageRating.toFixed(1) : '0.0'} / 5
                </p>
                <p className="text-sm text-muted-foreground">
                Basado en {summary ? summary.totalReviews : 0} reseñas
                </p>
            </>
        )}
      </div>
      <div className="flex space-x-2 mb-6">
        {[...Array(5)].map((_, index) => {
          const ratingValue = index + 1;
          return (
            <button
              key={ratingValue}
              onClick={() => setRating(ratingValue)}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(0)}
              className="transition-transform duration-200 ease-in-out hover:scale-125 focus:outline-none"
              disabled={isSubmitting || isLoading}
            >
              <Star
                className={cn(
                  'h-10 w-10 cursor-pointer transition-colors duration-200',
                  ratingValue <= (hover || rating)
                    ? 'text-amber-400 fill-amber-400'
                    : 'text-muted-foreground/50'
                )}
              />
            </button>
          );
        })}
      </div>
      <Button onClick={handleSubmit} size="lg" className="font-bold" disabled={isSubmitting || isLoading}>
        {isSubmitting ? 'Enviando...' : 'Enviar Calificación'}
      </Button>
    </div>
  );
}
