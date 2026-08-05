export function Footer() {
  return (
    <footer className="relative border-t border-border bg-background px-6 py-12 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <img 
            src="/logo.png" 
            alt="AV Logo" 
            className="w-10 h-10 object-contain rounded-xl shadow-sm"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement!.insertAdjacentHTML('afterbegin', '<div class="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-950 to-indigo-950 text-white font-bold text-lg tracking-wider shadow-sm">AV</div>');
            }}
          />
          <span className="text-muted-foreground">&copy; {new Date().getFullYear()} Adithya Vel M. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
