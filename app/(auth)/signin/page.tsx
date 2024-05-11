"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

const formSchema = z.object({
  email: z.string().email({
    message: "Enter a valid email address.",
  }),
  password: z.string().min(8, {
    message: "Enter your password",
  }),
});

type FormValues = z.infer<typeof formSchema>;

function onSubmit(values: FormValues) {
  console.log(values);
}

export default function Signin() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <section className="flex py-10 justify-center">
      <Card className="py-8 px-6 space-y-6 w-fit">
        <div className="text-center">
          <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
            Signin
          </h2>
          <p className="text-neutral-600 text-sm max-w-sm  dark:text-neutral-300">
            Enter your credentials to login into your account
          </p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="johndoe@gmail.com"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="*********" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full">Signin</Button>
          </form>
          <p className="text-center">
            Don&apos;t have an account? <Link href="/signup">Signup</Link>
          </p>
        </Form>
      </Card>
    </section>
  );
}