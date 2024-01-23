import "./globals.css";

export const metadata = {
  title: "next crud",
  description: "crud application using next js v14",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
