import { createPost, getPost } from "@/actions/index";
import { PostList } from "@/components/PostList";

export default async function Home() {
  const posts = await getPost();

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/10 selection:text-primary">
      <div className="mx-auto max-w-2xl px-6 py-12 md:py-24 space-y-16">
        <header className="space-y-4">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase">
            Prisma + Next.js
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-balance">
            Modern Data Management
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
            A minimalist demonstration of Prisma ORM integrated with Next.js Server Actions for seamless database operations.
          </p>
        </header>

        <section className="space-y-8 p-8 rounded-2xl border border-border bg-card shadow-sm">
          <div className="space-y-1">
            <h2 className="text-xl font-semibold">Create a new entry</h2>
            <p className="text-sm text-muted-foreground">Share your thoughts with the world instantly.</p>
          </div>
          
          <form action={createPost} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="title" className="text-sm font-medium leading-none">Title</label>
              <input 
                id="title"
                name="title" 
                placeholder="The perfect headline..." 
                className="flex h-10 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="description" className="text-sm font-medium leading-none">Description</label>
              <textarea 
                id="description"
                name="description" 
                placeholder="What's on your mind?" 
                rows={3}
                className="flex w-full rounded-xl border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
              />
            </div>
            <button 
              type="submit"
              className="inline-flex items-center justify-center rounded-xl text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-8 py-2 w-full sm:w-auto shadow-sm"
            >
              Publish Post
            </button>
          </form>
        </section>

        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">Recent Feed</h3>
            <span className="text-xs font-medium text-muted-foreground px-2 py-1 bg-muted rounded-md">{posts.length} posts</span>
          </div>
          <PostList posts={posts} />
        </section>
      </div>

      <footer className="border-t border-border mt-24 py-8">
        <div className="mx-auto max-w-2xl px-6 flex justify-between items-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Next + Prisma Demo</p>
          <div className="flex gap-4">
            <span className="hover:text-foreground cursor-pointer transition-colors">Documentation</span>
            <span className="hover:text-foreground cursor-pointer transition-colors">GitHub</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
