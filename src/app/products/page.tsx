'use client';

import { useState, useMemo } from 'react';
import { getProducts } from '@/lib/mock-data';
import ProductCard from '@/components/product-card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search } from 'lucide-react';

export default function ProductsPage() {
  const allProducts = useMemo(() => getProducts(), []);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  const filteredAndSortedProducts = useMemo(() => {
    let products = allProducts;

    if (searchQuery) {
      products = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory !== 'all') {
      products = products.filter(product => product.category === selectedCategory);
    }

    switch (sortBy) {
      case 'price-asc':
        products.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        products.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
      default:
        // The mock data is already sorted by newest, so we can just reverse it if we want oldest first
        // Or do nothing for "newest" as it's the default order.
        break;
    }

    return products;
  }, [allProducts, searchQuery, selectedCategory, sortBy]);

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground">Nuestra Colección</h1>
        <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
          Explora nuestra cuidada selección de moda de segunda mano de alta calidad.
        </p>
      </div>

      <div className="mb-8 flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input 
            placeholder="Buscar artículos..." 
            className="pl-10" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-4">
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Filtrar por categoría" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas las Categorías</SelectItem>
              <SelectItem value="Tops">Tops</SelectItem>
              <SelectItem value="Pantalones">Pantalones</SelectItem>
              <SelectItem value="Vestidos">Vestidos</SelectItem>
              <SelectItem value="Abrigos">Abrigos</SelectItem>
              <SelectItem value="Accesorios">Accesorios</SelectItem>
            </SelectContent>
          </Select>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Ordenar por" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Más nuevo</SelectItem>
              <SelectItem value="price-asc">Precio: de menor a mayor</SelectItem>
              <SelectItem value="price-desc">Precio: de mayor a menor</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredAndSortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
