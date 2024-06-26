import type { Metadata } from "next";
import "./globals.css";

// layout
import AppLayout from "@/components/Layout/AppLayout";

// styled
import StyledComponentsRegistry from "@/lib/registry";

// metadata
export const metadata: Metadata = {
  title: "ForumAI",
  description: "Generated by Kazuma512",
  icons: "icon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <AppLayout>{children}</AppLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
