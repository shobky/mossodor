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
import { LockKeyhole, RotateCw, Trash2, TriangleAlert } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { DeleteAccountDialog } from "./delete-account";

const accountFormSchema = z.object({
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

type AccountFormValues = z.infer<typeof accountFormSchema>;

export function AccountForm({ user }: { user: any }) {
  // This can come from your database or API.
  const defaultValues: Partial<AccountFormValues> = user;

  const form = useForm<AccountFormValues>({
    resolver: zodResolver(accountFormSchema),
    defaultValues,
  });

  function onSubmit(data: AccountFormValues) {}

  console.log(user);
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          disabled
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormDescription>
                This is the email we&apos;ll use for contacting you.
              </FormDescription>
              <FormControl>
                <Input className="border-0 bg-muted/50" placeholder="Your email" {...field} />
              </FormControl>
           
              <FormMessage />
            </FormItem>
          )}
        />{" "}
        <div className="md:flex space-y-10 md:space-y-0 justify-between items-center">
          <Button disabled className="bg-foreground hover:bg-foreground/80" type="submit">
            Update account
          </Button>
          <div className="flex gap-2">
            <DeleteAccountDialog />
            <Button className="gap-2" type="button" variant={"outline"}>
              <RotateCw size={15} /> Reset password
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
