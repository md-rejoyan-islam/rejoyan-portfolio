import { Button } from "@/components/ui/button";
import { ArrowLeft, Code2, Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="text-center space-y-6 p-8 bg-white dark:bg-black/30 rounded-xl shadow-lg border border-indigo-100 dark:border-black/50 max-w-md w-full mx-4">
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-5">
            <Code2 className="w-64 h-64" />
          </div>
          <h1 className="text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-indigo-400">
            404
          </h1>
        </div>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
          Page Not Found
        </h2>
        <p className="text-gray-600 max-w-sm mx-auto dark:text-white/70">
          The page you&apos;re looking for doesn&apos;t exist or has been moved
          to a different location.
        </p>
        <div className="flex justify-center gap-3">
          <Button
            variant="outline"
            className="bg-white hover:bg-gray-50 text-gray-800 border-gray-200"
            asChild
          >
            <Link href="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Projects
            </Link>
          </Button>
          <Button
            className="bg-indigo-600 hover:bg-indigo-700 text-white"
            asChild
          >
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
