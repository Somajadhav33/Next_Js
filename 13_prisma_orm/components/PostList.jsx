export function PostList({ posts }) {
  if (!posts?.length) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-center border-2 border-dashed border-border rounded-3xl bg-muted/30">
        <p className="text-muted-foreground">No posts have been published yet.</p>
        <p className="text-sm text-muted-foreground/60 mt-1">Be the first one to share something!</p>
      </div>
    );
  }

  return (
    <ul className="grid gap-6">
      {[...posts].reverse().map((p) => (
        <li
          key={p.id}
          className="group relative flex flex-col space-y-3 p-6 rounded-2xl border border-border bg-card transition-all hover:shadow-md hover:border-primary/20"
        >
          <div className="flex items-start justify-between gap-4">
            <h4 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors">
              {p.title}
            </h4>
            <time className="shrink-0 text-[10px] font-medium uppercase tracking-widest text-muted-foreground/70 bg-muted px-2 py-0.5 rounded">
              {new Date(p.createdAt).toLocaleDateString(undefined, {
                month: "short",
                day: "numeric",
              })}
            </time>
          </div>
          
          {p.description && (
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
              {p.description}
            </p>
          )}

          <div className="pt-2 flex items-center gap-2">
            <div className="h-1 w-1 rounded-full bg-primary/40" />
            <span className="text-[10px] font-semibold text-primary/60 uppercase">Post #{p.id}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}
