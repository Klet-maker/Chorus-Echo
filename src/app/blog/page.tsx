import { getBlogPosts } from '@/lib/mock-data';
import BlogPostCard from '@/components/blog-post-card';

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground">De Nuestro Blog</h1>
        <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
          Ideas sobre moda sostenible, consejos de estilo y tesoros de segunda mano.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <BlogPostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
