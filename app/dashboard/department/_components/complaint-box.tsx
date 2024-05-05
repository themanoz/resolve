"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { Card, CardTitle } from "@/components/ui/card";
import { Paperclip } from "lucide-react";

const FormSchema = z.object({
  bio: z.string().min(10, {
    message: "Enter at least 10 characters.",
  }),
});

export function ComplaintBox() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Card className="p-7">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <CardTitle>Post Complaints</CardTitle>
          <FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Write your complaints here....."
                    className="resize-none min-h-[200px] "
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-end gap-3">
            <Button type="submit" variant={"outline"} className="px-6">
              <Paperclip className="w-5 " />
            </Button>
            <Button type="submit" className="px-8 ">
              Post
            </Button>
          </div>
        </form>
      </Form>
      <section className="pt-12">
        <h1 className="text-red-400">Note:</h1>
        <ol type="1" className="list-decimal px-5 py-2">
          <li>Your complaint should be valid.</li>
          <li>Your can attach files while posting compliants </li>
          <li>
            {" "}
            After receiving the complaint we will try to resolve your complaint
            as soon as possible.
          </li>
        </ol>
      </section>
    </Card>
  );
}