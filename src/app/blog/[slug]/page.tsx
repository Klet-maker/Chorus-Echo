import { getBlogPostBySlug } from '@/lib/mock-data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Calendar, User } from 'lucide-react';

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 py-8 md:py-12 max-w-4xl">
      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground text-center leading-tight">
          {post.title}
        </h1>
        <div className="flex justify-center items-center space-x-6 text-sm text-muted-foreground mt-4">
            <div className="flex items-center">
              <Calendar className="mr-1.5 h-4 w-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <User className="mr-1.5 h-4 w-4" />
              <span>Por {post.author}</span>
            </div>
        </div>
      </header>

      <div className="relative w-full aspect-video overflow-hidden rounded-lg shadow-lg mb-8">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          data-ai-hint={post.dataAiHint}
          priority
        />
      </div>

      <div
        className="prose prose-lg dark:prose-invert max-w-none prose-p:text-foreground/80 prose-headings:font-headline prose-headings:text-foreground prose-a:text-primary hover:prose-a:text-accent prose-strong:text-foreground"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
