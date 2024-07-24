"use client";
import CareersPage from "./pages/landing/careersPage";
import JobDetailsPage from "./pages/jobDetails";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <>
        <CareersPage />
        <JobDetailsPage />
      </>
    </main>
  );
}
