import { StructuredData } from '@/components/shared/StructuredData';
import { generateOrganizationSchema, generateWebSiteSchema } from '@/lib/structured-data';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebSiteSchema();

  return (
    <>
      <StructuredData data={organizationSchema} />
      <StructuredData data={websiteSchema} />
      {children}
    </>
  );
}
