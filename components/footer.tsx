import Image from "next/image"

export function Footer() {
  return (
    <footer className="py-12 border-t border-border/50 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Image src="/mediwide-logo.png" alt="MediWide Logo" width={32} height={32} className="w-8 h-8" />
                <h3 className="text-2xl font-bold">MediWide</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Professional web development and software solutions for medical professionals. Transforming healthcare
                through technology.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-primary">Services</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="hover:text-primary transition-colors cursor-pointer">Medical Websites</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Patient Management</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Mobile Applications</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Custom Development</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-primary">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="hover:text-primary transition-colors cursor-pointer">About Us</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Portfolio</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Contact</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Privacy Policy</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border/50 text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} MediWide. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
