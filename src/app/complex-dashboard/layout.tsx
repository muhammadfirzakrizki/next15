export default function ComplexDashboardLayout({
  children,
  notification,
  revenue,
  users,
}: {
  children: React.ReactNode,
  notification: React.ReactNode;
  revenue: React.ReactNode;
  users: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 overflow-hidden">{children}</div>
      <div className="flex flex-row">
        <div className="flex-1 overflow-hidden">
          {notification}
        </div>
        <div className="flex-1 overflow-hidden">
          {revenue}
        </div>
        <div className="flex-1 overflow-hidden">
          {users}
        </div>
      </div>
    </div>
  )
}
