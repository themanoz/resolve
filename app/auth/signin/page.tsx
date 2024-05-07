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

const years = [
  { label: "P1", value: "p1" },
  { label: "P2", value: "p2" },
  { label: "E1", value: "e1" },
  { label: "E2", value: "e2" },
  { label: "E3", value: "e3" },
  { label: "E4", value: "e4" },
] as const;

const branches = [
  { label: "Computer Science", value: "com" },
  { label: "Electrical", value: "ele" },
  { label: "Chemical", value: "che" },
  { label: "Metallurgy", value: "met" },
  { label: "Mechanical", value: "mec" },
  { label: "Civil", value: "civ" },
] as const;

const scholarships = [
  { label: "Eligible", value: "eli" },
  { label: "Not-eligible", value: "not" },
];

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "Enter your first name.",
  }),
  lastName: z.string().min(2, {
    message: "Enter your last name.",
  }),
  email: z.string().email({
    message: "Enter a valid email address.",
  }),
  phoneNumber: z.string().min(10, {
    message: "Enter a valid phone number.",
  }),
  password: z.string().min(8, {
    message: "Enter your password",
  }),
  confirmPassword: z.string().min(8, {
    message: "Re-enter your password",
  }),
  gender: z.enum(["male", "female", "other"], {
    required_error: "You need to select a gender.",
  }),
  year: z.string({
    required_error: "Please select a year.",
  }),
  branch: z.string({
    required_error: "Please select a branch.",
  }),
  profileImage: z.union([z.string(), z.instanceof(Buffer)]).optional(),
  scholarships: z.string({
    required_error: "Please select your scholarship eligibility",
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
            Login
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
          </form>

          <Button className="w-full">Signin</Button>
            <p className="text-center">
              Don't have an account? <Link href="/auth/signup">Signup</Link>
            </p>
        </Form>
      </Card>
    </section>
  );
}
