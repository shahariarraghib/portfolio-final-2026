import Link from "next/link";
import { ArrowLeft, House } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.08),transparent_45%),linear-gradient(135deg,#ffffff_0%,#f3f3f3_100%)]" />
      <div className="absolute left-1/2 top-20 -z-10 h-64 w-64 -translate-x-1/2 rounded-full border border-black/10 bg-white/70 blur-3xl" />

      <div className="mx-auto flex min-h-[82.5vh] w-full max-w-6xl items-center px-6 py-20 sm:px-10 lg:px-16">
        <div className="">
          <div className="space-y-8">
            <div className="space-y-5">
              <p className="text-sm uppercase tracking-[0.4em] text-black/45">
                Error 404
              </p>
              <h1 className="max-w-3xl text-5xl font-medium tracking-[-0.04em] text-black sm:text-6xl lg:text-7xl">
                This page slipped outside the portfolio grid.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-black/65 sm:text-lg">
                The route you requested does not exist, may have moved, or was
                never published. Let&apos;s get you back to the work that
                matters.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-black/85"
              >
                <House className="h-4 w-4" />
                Back to home
              </Link>
            </div>
          </div>
          {/* 
          <div className="rounded-[2rem] border border-black/10 bg-white/75 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.08)] backdrop-blur">
            <div className="flex items-start justify-between border-b border-black/10 pb-6">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-black/45">
                  Route status
                </p>
                <p className="mt-3 text-4xl font-medium tracking-[-0.05em] text-black">
                  404
                </p>
              </div>
              <div className="rounded-full border border-black/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-black/55">
                Missing
              </div>
            </div>

            <div className="space-y-4 pt-6 text-sm leading-6 text-black/65">
              <p>
                Try the navigation above, head back to the landing page, or
                explore the featured work section from the shortcut button.
              </p>
              <p>
                If you followed an old bookmark or shared link, the destination
                may have changed during a refresh of the portfolio.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
