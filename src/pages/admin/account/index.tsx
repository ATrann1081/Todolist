import AdminLayout from "@/layouts/admin";
import type { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";

const AdminAccountPage: NextPageWithLayout = () => {
  return <div>Admin Account Page</div>;
};

AdminAccountPage.getLayout = (page: ReactElement) => <AdminLayout>{page}</AdminLayout>;
AdminAccountPage.appTitle = "Admin - Account";

export default AdminAccountPage;
