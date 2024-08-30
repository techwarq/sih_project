// import { Toaster } from '@/components/ui/toaster';

import FarmerNavar from "@/components/FarmerNavar";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <FarmerNavar />
      {children}
      {/* <Toaster /> */}
    </div>
  );
}