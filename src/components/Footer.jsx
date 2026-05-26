export default function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-heading font-bold text-lg">GNL<span className="text-primary">.</span>Digital</span>
        <p className="text-sm text-muted-foreground">© 2024 GNL Digital. All rights reserved.</p>
        <div className="flex gap-6">
          {['Twitter', 'LinkedIn', 'Dribbble'].map(s => (
            <a key={s} href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{s}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}