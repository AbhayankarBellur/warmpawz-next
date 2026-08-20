import { Metadata } from "next";
import { generateMetadata } from "@/lib/metadata";
import { StructuredData } from "@/components/shared/StructuredData";
import { generateBreadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = generateMetadata({
  title: "Investor Overview",
  description:
    "Warmpawz investor deck — mission, insights, market opportunity, traction, team, and funding ask for India's trusted pet care platform.",
  url: "/investors",
});

export default function InvestorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Investors", url: "/investors" },
  ]);

  return (
    <>
      <StructuredData data={breadcrumb} />
      {children}
    </>
  );
}
