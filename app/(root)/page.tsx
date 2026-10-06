import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";

import { Button } from "@/components/ui/button";
import InterviewCard from "@/components/InterviewCard";

import { getCurrentUser } from "@/lib/actions/auth.action";
import {
  getInterviewsByUserId,
  getLatestInterviews,
} from "@/lib/actions/general.action";

async function Home() {
  const user = await getCurrentUser();
  if (!user) redirect("/sign-in");

  const [userInterviews, allInterview] = await Promise.all([
    getInterviewsByUserId(user.id),
    getLatestInterviews({ userId: user.id }),
  ]);

  const hasPastInterviews = (userInterviews?.length ?? 0) > 0;
  const hasUpcomingInterviews = (allInterview?.length ?? 0) > 0;

  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <div className="w-fit rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-sky-800">AI-powered practice</div>
          <h2>Build confidence before the conversation.</h2>
          <p className="text-lg">Practice realistic interview questions and turn every answer into clear, actionable feedback.</p>

          <Button asChild className="btn-primary max-sm:w-full">
            <Link href="/interview">Start a practice interview</Link>
          </Button>
        </div>

        <Image
          src="/robot.png"
          alt="AI interview assistant"
          width={400}
          height={400}
          className="max-sm:hidden"
        />
      </section>

      <section className="flex flex-col gap-6 mt-12">
        <div><p className="mb-1 text-sm font-semibold uppercase tracking-[0.12em] text-sky-800">Your progress</p><h2>Recent interviews</h2></div>

        <div className="interviews-section">
          {hasPastInterviews ? (
            userInterviews?.map((interview) => (
              <InterviewCard
                key={interview.id}
                userId={user.id}
                interviewId={interview.id}
                role={interview.role}
                type={interview.type}
                techstack={interview.techstack}
                createdAt={interview.createdAt}
              />
            ))
          ) : (
            <p>You haven&apos;t completed an interview yet. Start one above when you&apos;re ready.</p>
          )}
        </div>
      </section>

      <section className="flex flex-col gap-6 mt-12">
        <div><p className="mb-1 text-sm font-semibold uppercase tracking-[0.12em] text-teal-700">Explore</p><h2>Practice library</h2></div>

        <div className="interviews-section">
          {hasUpcomingInterviews ? (
            allInterview?.map((interview) => (
              <InterviewCard
                key={interview.id}
                userId={user.id}
                interviewId={interview.id}
                role={interview.role}
                type={interview.type}
                techstack={interview.techstack}
                createdAt={interview.createdAt}
              />
            ))
          ) : (
            <p>There are no interviews available</p>
          )}
        </div>
      </section>
    </>
  );
}

export default Home;
