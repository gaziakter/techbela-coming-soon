import "./globals.css";

export const metadata = {
  title: "Techbela — Coming Soon",
  description: "Techbela — Beyond technology towards excellence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
