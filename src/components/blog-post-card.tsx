import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { type BlogPost } from '@/lib/mock-data';
import { ArrowRight, Calendar, User } from 'lucide-react';

type BlogPostCardProps = {
  post: BlogPost;
};

export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="group">
      <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1">
        <CardHeader className="p-0">
            <div className="relative w-full aspect-video overflow-hidden">
            <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                data-ai-hint={post.dataAiHint}
            />
            </div>
        </CardHeader>
        <CardContent className="p-6 flex-grow">
          <CardTitle className="font-headline text-xl leading-snug">
            {post.title}
          </CardTitle>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-4">
              <div className="flex items-center">
                <Calendar className="mr-1.5 h-4 w-4" />
                {post.date}
              </div>
              <div className="flex items-center">
                <User className="mr-1.5 h-4 w-4" />
                {post.author}
              </div>
          </div>
          <p className="mt-4 text-muted-foreground text-base line-clamp-3">
            {post.excerpt}
          </p>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <div className="text-primary font-semibold flex items-center group-hover:text-accent transition-colors">
            Leer Más <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
