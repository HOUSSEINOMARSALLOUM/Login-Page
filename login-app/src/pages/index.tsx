import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    router.push("/auth/login");
  }, [router]); // Add router to dependency array

  return null;
}
