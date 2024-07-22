"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormEvent, useState } from "react";
import ContinueWithGoogle from "@/components/auth/continue-with-google";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { signIn } from "next-auth/react";
import * as z from "zod";
import BackButton from "@/components/auth/back-button";

const signupSchema = z
  .object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z
      .string()
      .min(6, "Confirm Password must be at least 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export default function SignupPage() {
  const [status, setStatus] = useState<"loading" | "idle">("idle");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const msg = searchParams.get("msg");
  const cb = searchParams.get("callback");

  const signup = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "loading") return;

    const form = new FormData(e.currentTarget);
    const name = form.get("name") as string;
    const email = form.get("email") as string;
    const password = form.get("password") as string;
    const confirmPassword = form.get("confirm-password") as string;

    const result = signupSchema.safeParse({
      name,
      email,
      password,
      confirmPassword,
    });

    if (!result.success) {
      const validationErrors = result.error.flatten().fieldErrors;
      setError(Object.values(validationErrors).flat().join(", "));
      return;
    }

    setStatus("loading");
    setError(null);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-connection-key": "mossodor",
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "An error occurred during signup.");
      }

      const data = await res.json();

      if (data.error) {
        setError(data.error);
      } else {
        await signIn("credentials", {
          email,
          password,
          callbackUrl: cb ?? "/",
        });
        setStatus("idle");
      }
    } catch (error: any) {
      setError(error.message);
      if (error.message === "User already exists") {
        toast.error("A user already exists with this email address.", {
          action: (
            <Button
              onClick={() => router.push("/login?email=" + email)}
              variant={"destructive"}
              size={"sm"}
            >
              Login instead
            </Button>
          ),
        });
      }
    } finally {
      setStatus("idle");
    }
  };

  return (
    <div className="w-full items-center h-screen grid lg:grid-cols-2">
      <BackButton href={cb} />
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-2  sm:gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Create Account</h1>
            {error ? (
              <p className="text-xs font-medium text-red-500">{error}</p>
            ) : (
              <p className="text-balance text-muted-foreground">
                {msg && msg.replace("login", "signup")}
              </p>
            )}
          </div>
          <form onSubmit={signup} className="grid gap-4 p-4 sm:-0">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                autoFocus
                name="name"
                id="name"
                type="text"
                placeholder="David Smith"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input name="password" id="password" type="password" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input
                id="confirm-password"
                name="confirm-password"
                type="password"
                required
              />
            </div>
            <Button
              disabled={status === "loading"}
              type="submit"
              className="w-full"
            >
              {status === "loading" ? (
                <Loader2 className="animate-spin" />
              ) : (
                "Sign Up"
              )}
            </Button>
            <ContinueWithGoogle />
          </form>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href={`/login${msg && "?msg=" + msg}`} className="underline">
              Login
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          priority
          src="/auth/mos-main-img.jpg"
          alt="Image"
          width="800"
          height="700"
          className="object-cover w-full h-screen "
        />
      </div>
    </div>
  );
}
