"use client";

import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { AppLink } from "@/components/shared/AppLink";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import Image from "next/image";
import { BlogArticle } from "@/data/blogArticles";

interface BlogArticleWrapperProps {
  article: BlogArticle;
  articleNumber: number;
  children: React.ReactNode;
}

export function BlogArticleWrapper({
  article,
  articleNumber,
  children,
}: BlogArticleWrapperProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: article.title, url: `/blog/${articleNumber}` },
  ];

  return (
    <main
      className="min-h-screen pt-32 px-4 sm:px-6 lg:px-8 pb-16"
      style={{
        backgroundImage:
          "linear-gradient(180deg, #F69052 0%, #FAD3B5 60%, #FFF2E6 100%)",
      }}
    >
      <article className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg p-8 sm:p-12 border-2 border-[#F5A855]">
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} />

        {/* Back Button */}
        <AppLink
          href="/blog"
          className="flex items-center gap-2 text-gray-600 hover:text-[#f69052] transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-baloo">Back to Blog</span>
        </AppLink>

        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 font-baloo">
            {article.title}
          </h1>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-600 mb-6">
            <span>{article.author}</span>
            <span>•</span>
            <time dateTime={new Date(article.date).toISOString()}>
              {article.date}
            </time>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>
          <div className="w-24 h-1 bg-[#F5A855] mx-auto rounded-full mb-8"></div>
        </header>

        {/* Featured Image */}
        <div className="aspect-video relative shrink-0 w-full h-full bg-gray-100 rounded-2xl overflow-hidden mb-12 border-2 border-[#F5A855]">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            style={{ objectPosition: "center 25%" }}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 896px"
            priority
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none font-baloo">{children}</div>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t-2 border-[#F5A855]">
          <div className="flex items-center justify-center">
            <AppLink
              href="/blog"
              className="bg-[#F5A855] text-white px-8 py-3 rounded-full font-bold font-baloo hover:bg-[#E09642] transition-colors shadow-md hover:shadow-lg"
            >
              ← Back to All Articles
            </AppLink>
          </div>
        </footer>
      </article>
    </main>
  );
}
