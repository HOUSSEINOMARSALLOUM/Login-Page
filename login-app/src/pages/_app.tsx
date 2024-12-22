import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    if (token && router.pathname === "/auth/login") {
      router.push("/home");
    }
  }, [router, router.pathname]); // Add dependencies

  return <Component {...pageProps} />;
}
