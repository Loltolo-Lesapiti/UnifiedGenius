export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:flex-col md:w-72 md:fixed md:insec-y-0 z-[80] bg-gray-900">
        <h3>Side bar</h3>
      </div>
      <main className="md:pl-72">{children}</main>
    </div>
  );
}
