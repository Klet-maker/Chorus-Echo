'use client';
import { useState } from 'react';
import { recommendSimilarStyles } from '@/ai/flows/style-recommendation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Wand2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function StyleRecommender({ productDescription }: { productDescription: string }) {
  const [recommendations, setRecommendations] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGetRecommendations = async () => {
    setIsLoading(true);
    setRecommendations([]);
    try {
      const result = await recommendSimilarStyles({ 
        productDescription, 
        userPreferences: 'Prefiero artículos modernos, cómodos y de alta calidad.' 
      });
      setRecommendations(result.recommendations);
    } catch (e) {
      console.error(e);
      toast({
        variant: "destructive",
        title: "Error de IA",
        description: "No se pudieron obtener recomendaciones de estilo en este momento. Por favor, inténtalo de nuevo más tarde.",
      })
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="mt-8 bg-card/50 border-primary/20 border-dashed">
      <CardHeader>
        <div className="flex items-center gap-3">
            <div className="flex-shrink-0 bg-primary text-primary-foreground p-2 rounded-lg">
                <Wand2 className="h-6 w-6" />
            </div>
            <div>
                <CardTitle className="font-headline">Asistente de Estilo IA</CardTitle>
                <CardDescription>Obtén recomendaciones de estilos similares con IA.</CardDescription>
            </div>
        </div>
      </CardHeader>
      <CardContent>
        <Button onClick={handleGetRecommendations} disabled={isLoading}>
          {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
          Sugerir Estilos Similares
        </Button>
        
        {isLoading && (
          <div className="mt-6 space-y-2">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center space-x-2">
                <div className="h-2 w-2 rounded-full bg-muted-foreground animate-pulse" style={{animationDelay: `${i * 150}ms`}}></div>
                <div className="h-4 bg-muted rounded-md w-3/4 animate-pulse" style={{animationDelay: `${i * 150}ms`}}></div>
              </div>
            ))}
          </div>
        )}

        {recommendations.length > 0 && !isLoading && (
          <div className="mt-6">
            <h4 className="font-semibold text-lg mb-2 font-headline">También creemos que te encantará:</h4>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              {recommendations.map((rec, index) => (
                <li key={index} className="transition-opacity duration-500" style={{animationDelay: `${index * 100}ms`}}>{rec}</li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
