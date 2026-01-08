"use client";

import { useRouter } from "next/navigation";
import { useGoogleLogin, useCurrentUser } from "@/src/hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import Logo from "@/src/assets/images/Logo.png";
// import '@/app/global.css'


export default function LoginPage() {
  const router = useRouter();
  const { data: user, isLoading: meLoading } = useCurrentUser();
  const googleLogin = useGoogleLogin();

  if (user && !meLoading) {
    router.replace("/dashboard");
  }

  async function handleGoogle() {
    try {
      await googleLogin.mutateAsync();
      router.replace("/dashboard");
    } catch (err) {
      console.error(err);
      // Consider using toast notification instead
    }
  }

  return (
    <div className="relative top-0 left-0 flex items-center justify-center min-h-screen px-4 min-w-screen bg-linear-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 money-bg">
      <div className="w-full max-w-md rounded-2xl bg-white dark:bg-[#1e1f20] absolute top-1/6 z-100 p-8 shadow-xl ring-1 ring-slate-200/60 dark:ring-gray-700">
        <div className="mb-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="relative w-16 h-16">
              <Image
                src={Logo}
                alt="FinanceTracker Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          <h1 className="mb-2 text-2xl font-bold text-slate-900 dark:text-white">
            Welcome to FinanceTracker
          </h1>
          <p className="text-slate-600 dark:text-slate-300">
            Track your expenses, monitor investments, and achieve financial
            goals
          </p>
        </div>

        <div className="space-y-4">
          <button
            onClick={handleGoogle}
            disabled={googleLogin.isPending || meLoading}
            className="flex w-full items-center justify-center gap-3 rounded-lg border border-slate-300 bg-white dark:bg-[#121214] dark:text-white py-3.5 px-4 text-sm font-medium text-slate-700 transition-all hover:bg-slate-50 hover:border-slate-400 hover:shadow-sm active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100"
          >
            {googleLogin.isPending ? (
              <Loader2 className="w-5 h-5 animate-spin text-slate-500" />
            ) : (
              <FcGoogle className="w-5 h-5" />
            )}
            <span>
              {googleLogin.isPending ? "Signing in..." : "Continue with Google"}
            </span>
          </button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white dark:bg-[#1e1f20] text-slate-500">Or</span>
            </div>
          </div>

          {/* Future login methods placeholder */}
          <div className="text-sm text-center text-slate-500 dark:text-slate-400">
            <p>More login options coming soon</p>
          </div>
        </div>

        <div className="pt-6 mt-8 border-t border-slate-200 dark:border-gray-700">
          <p className="text-xs text-center text-slate-500 dark:text-slate-400">
            By continuing, you agree to our{" "}
            <a href="#" className="font-medium text-blue-600 hover:underline dark:text-blue-400">
              Terms
            </a>{" "}
            and{" "}
            <a href="#" className="font-medium text-blue-600 hover:underline dark:text-blue-400">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
