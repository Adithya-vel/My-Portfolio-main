export function Footer() {
  return (
    <footer className="relative border-t border-border bg-background px-6 py-12 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <span className="text-lg font-bold text-foreground">AV</span>
          <span className="text-muted-foreground">&copy; {new Date().getFullYear()} Adithya Vel M. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
