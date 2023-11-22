import { UserButton } from "@clerk/nextjs";
import React from "react";

const DashboardPage = () => {
  return (
    <div className="flex justify-between">
      <h3 className="text-2xl text-slate-500">DashboardPage(Protected)</h3>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default DashboardPage;
