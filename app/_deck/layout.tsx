export const metadata = {
  title: "Warmpawz — Pitch Deck",
  robots: { index: false, follow: false },
};

// Bypass ClientLayout (navbar/footer) entirely for the deck route
export default function DeckLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
