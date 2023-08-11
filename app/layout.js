import "../styles/app.global.css";

export const metadata = {
  title: "White Lion Solutions",
  description: "Artificial Intelligence for your business",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900">
        {children}
      </body>
    </html>
  );
}
