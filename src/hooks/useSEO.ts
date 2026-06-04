import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  structuredData?: Record<string, any> | Record<string, any>[];
}

export const useSEO = ({ title, description, canonicalUrl, structuredData }: SEOProps) => {
  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // 2. Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // 3. Update Canonical Link
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    const currentCanonical = canonicalUrl || window.location.origin + window.location.pathname;
    linkCanonical.setAttribute('href', currentCanonical);

    // 4. Update JSON-LD Structured Data
    // Remove any previously set JSON-LD dynamic elements
    const existingScripts = document.querySelectorAll('script[data-seo-jsonld]');
    existingScripts.forEach(el => el.remove());

    if (structuredData) {
      const dataArray = Array.isArray(structuredData) ? structuredData : [structuredData];
      dataArray.forEach(data => {
        const script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        script.setAttribute('data-seo-jsonld', '');
        script.textContent = JSON.stringify(data);
        document.head.appendChild(script);
      });
    }

    // Cleanup scripts on unmount
    return () => {
      const scripts = document.querySelectorAll('script[data-seo-jsonld]');
      scripts.forEach(el => el.remove());
    };
  }, [title, description, canonicalUrl, JSON.stringify(structuredData)]);
};
