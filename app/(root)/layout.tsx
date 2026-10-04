import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import { redirect } from "next/navigation";

import { isAuthenticated } from "@/lib/actions/auth.action";

const Layout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();
  if (!isUserAuthenticated) redirect("/sign-in");

  return (
    <div className="root-layout">
      <nav>
        <Link href="/" className="flex items-center gap-2">
          <Image src="/brand-mark.svg" alt="Intervue logo" width={40} height={40} priority />
          <h2>Intervue</h2>
        </Link>
      </nav>

      <main>{children}</main>
    </div>
  );
};

export default Layout;
