import "./globals.css";

export const metadata = {
  title: "Rapid Rush",
  description: "Pembagian set quiz secara acak"
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
