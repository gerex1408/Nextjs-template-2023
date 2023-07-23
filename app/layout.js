import "./global.css";

import { Roboto } from "next/font/google";
import { Providers } from "./components/providers";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <Providers>
          <nav>This is a layout nav</nav>
          {children}
        </Providers>
      </body>
    </html>
  );
}
