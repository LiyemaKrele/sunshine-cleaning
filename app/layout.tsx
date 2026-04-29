import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Sunshine Cleaning | Cape Town Cleaning Services",
  description:
    "Professional home and office cleaning services in Cape Town.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}