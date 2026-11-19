import type { Metadata } from 'next';
import { Charm, Dancing_Script, Be_Vietnam_Pro } from 'next/font/google';
import './globals.css';

const charm = Charm({
  weight: ['400', '700'],
  subsets: ['vietnamese', 'latin'],
  variable: '--font-charm',
  display: 'swap',
});

const dancingScript = Dancing_Script({
  weight: ['400', '600', '700'],
  subsets: ['vietnamese', 'latin'],
  variable: '--font-dancing',
  display: 'swap',
});

const beVietnamPro = Be_Vietnam_Pro({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['vietnamese', 'latin'],
  variable: '--font-be-vietnam-pro',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://trianthayco.duyduong.site'),
  title: 'Tri Ân Thầy Cô 20/11 | Tập thể lớp D26CNTT05 – ĐH Thủ Dầu Một',
  description:
    'Website tri ân Ngày Nhà giáo Việt Nam 20/11 của tập thể lớp D26CNTT05 – Viện Công nghệ số – Trường Đại học Thủ Dầu Một. Kính gửi ngàn lời tri ân sâu sắc đến những người lái đò thầm lặng.',
  keywords: [
    '20/11',
    'Ngày Nhà giáo Việt Nam',
    'D26CNTT05',
    'Viện Công nghệ số',
    'Đại học Thủ Dầu Một',
    'TDMU',
    'Tri ân thầy cô',
  ],
  authors: [{ name: 'Tập thể lớp D26CNTT05' }],
  openGraph: {
    title: 'Tri Ân Thầy Cô 20/11 – D26CNTT05 TDMU',
    description: 'Ươm mầm tri thức – Thắp sáng tương lai. Lời tri ân chân thành từ tập thể lớp D26CNTT05.',
    images: ['/images/anh-thay-co.jpg'],
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="vi"
      className={`${charm.variable} ${dancingScript.variable} ${beVietnamPro.variable}`}
    >
      <body className="antialiased min-h-screen relative flex flex-col selection:bg-academic/20 selection:text-navy">
        {children}
      </body>
    </html>
  );
}
