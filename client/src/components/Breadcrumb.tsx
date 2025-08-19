import { Link, useLocation } from "wouter";
import { ChevronRight, Home } from "lucide-react";

type BreadcrumbItem = {
  label: string;
  href: string;
};

export function getBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const paths = pathname.split('/').filter(Boolean);
  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Home', href: '/' }
  ];
  
  let currentPath = '';
  paths.forEach((path) => {
    currentPath += `/${path}`;
    // Handle dynamic routes
    if (path.match(/^\d+$/)) {
      breadcrumbs.push({ label: 'Product Details', href: currentPath });
    } else {
      // Capitalize and format the path
      const label = path
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      breadcrumbs.push({ label, href: currentPath });
    }
  });
  
  return breadcrumbs;
}

export default function Breadcrumb() {
  const [location] = useLocation();
  const breadcrumbs = getBreadcrumbs(location);
  
  if (location === '/') return null;
  
  return (
    <nav aria-label="Breadcrumb" className="flex items-center space-x-1 text-sm text-muted-foreground py-4 px-4 md:px-6">
      {breadcrumbs.map((crumb, index) => {
        const isLast = index === breadcrumbs.length - 1;
        
        return (
          <div key={crumb.href} className="flex items-center">
            {index === 0 ? (
              <Link href={crumb.href} className="flex items-center hover:text-foreground">
                <Home className="h-4 w-4" />
                <span className="sr-only">Home</span>
              </Link>
            ) : (
              <Link 
                href={crumb.href}
                className={`hover:text-foreground ${isLast ? 'text-foreground font-medium' : ''}`}
              >
                {crumb.label}
              </Link>
            )}
            
            {!isLast && (
              <ChevronRight className="h-4 w-4 mx-1" />
            )}
          </div>
        );
      })}
    </nav>
  );
}
