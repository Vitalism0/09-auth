"use client";
import css from "@/app/Home.module.css";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
  sec?: number;
};

export default function NotFoundRedirect({ sec = 3 }: Props) {
  const router = useRouter();
  const [seconds, setSeconds] = useState(sec);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((s) => s - 1);
    }, 1000);
    const timer = setTimeout(() => router.push("/"), 3000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timer);
    };
  }, [router]);
  return (
    <div>
      <h1 className={css.title}>404 - Page not found</h1>
      <p className={css.description}>
        You will br redirected to home page in {seconds}
      </p>
    </div>
  );
}
