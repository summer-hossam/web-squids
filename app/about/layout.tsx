/* eslint-disable prettier/prettier */
import "@/styles/globals.css";

export default function AboutLayout({
children,
}: {
children: React.ReactNode;
}) {
return ( 
    <div className="relative flex flex-col  w-full  font-sans  fontSans.variable">
     {children}
     </div>
    )}
