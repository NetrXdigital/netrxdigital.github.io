// components/blog/BlogLayout.tsx
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export type TocItem = { id: string; label: string };

export type BlogLayoutProps = {
  slug: string;
  title: string;
  description: string;
  publishDate: string; // ISO
  updatedDate?: string; // ISO
  imageUrl?: string; // /images/blog/slug.jpg
  toc?: TocItem[];
  children: React.ReactNode;
};

export default function BlogLayout({
  slug,
  title,
  description,
  publishDate,
  updatedDate,
  imageUrl = `/images/blog/${slug}.jpg`,
  toc = [],
  children,
}: BlogLayoutProps) {
  const PUBLISH_DATE = publishDate;
  const UPDATED_DATE = updatedDate ?? publishDate;

  return (
    <>
      {/* JSON-LD */}
      <Script id={`ld-article-${slug}`} type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: title,
          description,
          datePublished: PUBLISH_DATE,
          dateModified: UPDATED_DATE,
          author: { '@type': 'Organization', name: 'NetrX Digital' },
          publisher: {
            '@type': 'Organization',
            name: 'NetrX Digital',
            logo: { '@type': 'ImageObject', url: '/logo/logo.webp' },
          },
          image: [imageUrl],
          mainEntityOfPage: { '@type': 'WebPage', '@id': `/blog/${slug}` },
        })}
      </Script>
      <Script id={`ld-breadcrumb-${slug}`} type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Blog', item: '/blog' },
            { '@type': 'ListItem', position: 2, name: title, item: `/blog/${slug}` },
          ],
        })}
      </Script>

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="px-6 md:px-0 md:mx-auto xl:w-4/5 2xl:w-[68%] mt-6">
        <ol className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
          <li>
            <Link href="/" className="hover:underline">Home</Link>
          </li>
          <li className="opacity-60">/</li>
          <li>
            <Link href="/blogs" className="hover:underline">Blogs</Link>
          </li>
          <li className="opacity-60">/</li>
          <li aria-current="page" className="font-medium">{title}</li>
        </ol>
      </nav>

      {/* Hero */}
      <header className="relative overflow-hidden isolate mt-6">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-fuchsia-200/60 via-white to-transparent dark:from-fuchsia-400/10 dark:via-gray-900 dark:to-gray-900" />
        <div className="px-6 md:px-0 md:mx-auto xl:w-4/5 2xl:w-[68%] py-14">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">{title}</h1>
          <p className="mt-3 max-w-2xl text-base md:text-lg text-gray-700 dark:text-gray-300">
            {description}
          </p>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            <time dateTime={PUBLISH_DATE}>{new Date(PUBLISH_DATE).toLocaleDateString()}</time>
            {UPDATED_DATE && (
              <>
                <span className="mx-2">•</span>
                Updated <time dateTime={UPDATED_DATE}>{new Date(UPDATED_DATE).toLocaleDateString()}</time>
              </>
            )}
          </p>
        </div>
      </header>

      {/* Featured Image */}
      <figure className="px-6 md:px-0 md:mx-auto xl:w-4/5 2xl:w-[68%]">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl shadow">
          <Image src={imageUrl} alt={`${title} – header image`} fill priority className="object-cover" />
        </div>
        <figcaption className="mt-2 text-center text-sm text-gray-500 dark:text-gray-400">
          Clear positioning makes every touchpoint more memorable.
        </figcaption>
      </figure>

      {/* Main Layout: TOC + Article */}
      <main className="px-6 md:px-0 md:mx-auto xl:w-4/5 2xl:w-[68%] py-12 grid grid-cols-1 lg:grid-cols-[260px_minmax(0,1fr)] gap-8">
        {/* TOC */}
        <aside className="lg:sticky lg:top-24 h-max order-last lg:order-first">
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-4">
            <p className="text-sm font-semibold mb-3">On this page</p>
            <ul className="space-y-2 text-sm">
              {toc.map((t) => (
                <li key={t.id}><a href={`#${t.id}`} className="hover:underline">{t.label}</a></li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Article */}
        <article className="prose dark:prose-invert max-w-none">
          {children}
          <hr />
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-6">
            Written by <strong>NetrX Digital</strong>
          </p>
        </article>
      </main>
    </>
  );
}

