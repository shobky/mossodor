"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import ChangeAvatar from "./change-avatar";
import { useState } from "react";
import { Fetch } from "@/lib/actions/fetch";
import { Loader2 } from "lucide-react";
import { useSession } from "next-auth/react";
import { toast } from "sonner";

const profileFormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .max(30, {
      message: "Name must not be longer than 30 characters.",
    }),
  email: z.string(),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

export function ProfileForm({ user }: { user: any }) {
  const [status, setStatus] = useState("idle");
  const [image, setImage] = useState(undefined);
  const defaultValues: Partial<ProfileFormValues> = user;
  const { data: session } = useSession();
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
  });

  async function onSubmit(data: ProfileFormValues) {
    try {
      setStatus("loading");
      await Fetch(
        // @ts-ignore
        `users/${session?.user?._id}`,
        {
          method: "PUT",
          body: JSON.stringify({
            ...data,
            image,
          }),
        },
        "secure"
      );
      toast.info("Please sign in again to see the changes.");
    } catch (error: any) {
      setStatus("error");
    } finally {
      setStatus("idle");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <ChangeAvatar handleGetUploadedImage={setImage} user={user} />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input autoComplete="off" placeholder="Your name" {...field} />
              </FormControl>
              <FormDescription>
                This is the name that will be displayed on your profile and in
                emails.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="gap-2 "
          disabled={status === "loading"}
        >
          {status === "loading" && (
            <Loader2 size={15} className="animate-spin" />
          )}{" "}
          Update profile
        </Button>
      </form>
    </Form>
  );
}
