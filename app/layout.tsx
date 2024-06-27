import { ReactNode } from 'react';
import './globals.css';

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="ja">
      <head>
        <title>OtePal</title>
        <meta name="description" content="OtePal Application" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
