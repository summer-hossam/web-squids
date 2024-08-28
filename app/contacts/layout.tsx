/* eslint-disable prettier/prettier */
import "@/styles/globals.css";

export default function ContactsLayout({
children,
}: {
children: React.ReactNode;
}) {
return ( 
    <div className="relative flex flex-col min-h-screen w-full font-sans antialiased fontSans.variable">
    {children}
    </div>
    )}
