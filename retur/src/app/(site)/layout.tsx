import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ".././globals.css";
import Script from 'next/script';
import { CookieBanner } from '../../components/CookieBanner';
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Retur Expedições | Atacama e Uyuni",
  description: "Especialistas em vivências autênticas nos desertos mais altos do mundo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning className="antialiased font-manrope">
        
        {/* --- GOOGLE TAG MANAGER (Noscript) --- */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-WLLLMGW9"
            height="0" 
            width="0" 
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* --- GOOGLE TAG MANAGER (Script principal) --- */}
        <Script id="google-tag-manager" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WLLLMGW9');
          `
        }} />

        {/* --- TAG DO GOOGLE ADS --- */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17692064973"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17692064973');
          `
        }} />

        {/* --- PIXEL DA META (FACEBOOK) --- */}
        <Script id="meta-pixel" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            
            fbq('init', '1241331310301456'); 
            fbq('track', 'PageView');
          `
        }} />

        {/* --- CALLBELL (Botão Flutuante de Chat) --- */}
        {/* Utilizamos lazyOnload para que o chat só carregue DEPOIS que o site inteiro já estiver pronto e rápido para o usuário */}
        <Script id="callbell-chat" strategy="lazyOnload" dangerouslySetInnerHTML={{
          __html: `
            window.callbellSettings = window.callbellSettings || {};
            window.callbellSettings["uuid"] = "e9d9e3af-ae5e-4768-8679-d40d28dbd3cd";
            window.callbellSettings["script_token"] = "E9iv8tGcezpE91pMzbHvadnX";
            (function(){var w=window;var d=document;var l=function(){var s=d.createElement('script');s.async=true;s.src='https://dash.callbell.eu/include/livechat/'+window.callbellSettings.script_token+'/'+window.callbellSettings.uuid+'.js';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};w.addEventListener('load',l,false);})();
          `
        }} />

        <Header />
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}