import Header from '@/components/shared/DashboardLayout/Header';
import Sidebar from '@/components/shared/DashboardLayout/Sidebar';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#E3E6E8] flex gap-4 h-screen overflow-y-hidden pt-3">
      <Sidebar />
      <div className="flex flex-col h-full w-full mr-4">
        <Header />
        <main className="flex-1 h-full overflow-x-hidden p-6 pb-20 no-scrollbar mt-4">
          {children}
        </main>
      </div>
    </div>
  );
}
