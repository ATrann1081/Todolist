import { ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div>Header Admin Layout</div>
      <>{children}</>
      <div>Footer Admin Layout</div>
    </div>
  );
}

