import '@/app/ui/global.css';
import { ubuntu300 } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${ubuntu300.className} antialiased`}>{children}</body>
    </html>
  );
}
