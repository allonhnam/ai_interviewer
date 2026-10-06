import Agent from "@/components/Agent";
import { getCurrentUser } from "@/lib/actions/auth.action";
import { redirect } from "next/navigation";

const Page = async () => {
  const user = await getCurrentUser();
  if (!user) redirect("/sign-in");

  return (
    <>
      <div className="mb-2">
        <p className="mb-1 text-sm font-semibold uppercase tracking-[0.12em] text-sky-800">Interview setup</p>
        <h2>Create your next practice session</h2>
        <p className="mt-2">Tell the interviewer what you want to prepare for. Your session will be tailored around your goals.</p>
      </div>

      <Agent
        userName={user.name}
        userId={user.id}
        // profileImage={user?.profileURL}
        type="generate"
      />
    </>
  );
};

export default Page;
