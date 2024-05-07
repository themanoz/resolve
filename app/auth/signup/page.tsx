"use client";
import { useState } from "react";
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
// import { ArrowLeft } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { cn } from "@/app/utils/cn";
import { CommandList } from "cmdk";

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

export default function Signup() {
  const [step, setStep] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      year: "",
      branch: "",
      profileImage: "",
      scholarships: "",
    },
  });

  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   setSelectedImage(file);
  // };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  return (
    <section className="flex py-10 justify-center">
      <Card className="py-6 px-6 space-y-6 w-fit">
        <div className="text-center">
          <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
            Welcome to Resolve
          </h2>
          <p className="text-neutral-600 text-sm max-w-sm  dark:text-neutral-300">
            Enter your details to create an account
          </p>
        </div>
        {step === 1 && (
          <>
            <Card className="border-none">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <div className="flex gap-3">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John" type="text" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Doe" type="text" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
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
                          <Input
                            placeholder="*********"
                            type="password"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Comfirm Password</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="*********"
                            type="password"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="button" onClick={handleNext} className="w-full">
                    Next
                  </Button>
                </form>
              </Form>
            </Card>
            <p className="text-center">
              Already have an account? <Link href="/auth/signin">Signin</Link>
            </p>
          </>
        )}
        {step === 2 && (
          <>
            <Card className="border-none">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="gender"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel>Gender</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex space-x-1 gap-6 "
                          >
                            <FormItem className="flex items-center space-y-0 gap-2">
                              <FormControl>
                                <RadioGroupItem value="male" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Male
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center gap-2 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="female" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Female
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center gap-2 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="other" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Other
                              </FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="8973490234"
                            type="tel"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex gap-3 pt-2">
                    <FormField
                      control={form.control}
                      name="year"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Year</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant="outline"
                                  role="combobox"
                                  className={cn(
                                    "justify-between w-[180px]",
                                    !field.value && "text-muted-foreground"
                                  )}
                                >
                                  {field.value
                                    ? years.find(
                                        (year) => year.value === field.value
                                      )?.label
                                    : "Select year"}
                                  <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="p-0 w-[180px]">
                              <Command className="bg-black">
                                <CommandInput
                                  placeholder="Search year..."
                                  className="h-10"
                                />
                                <CommandEmpty>Not found</CommandEmpty>
                                <CommandList>
                                  {years.map((year) => (
                                    <CommandItem
                                      value={year.label}
                                      key={year.value}
                                      onSelect={() => {
                                        form.setValue("year", year.value);
                                      }}
                                    >
                                      {year.label}
                                      <CheckIcon
                                        className={cn(
                                          "ml-auto h-4 w-4",
                                          year.value === field.value
                                            ? "opacity-100"
                                            : "opacity-0"
                                        )}
                                      />
                                    </CommandItem>
                                  ))}
                                </CommandList>
                              </Command>
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="branch"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Branch</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant="outline"
                                  role="combobox"
                                  className={cn(
                                    "justify-between w-[180px]",
                                    !field.value && "text-muted-foreground"
                                  )}
                                >
                                  {field.value
                                    ? branches.find(
                                        (branch) => branch.value === field.value
                                      )?.label
                                    : "Select branch"}
                                  <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="p-0 w-[180px]">
                              <Command className="bg-black">
                                <CommandInput
                                  placeholder="Search branch..."
                                  className="h-10"
                                />
                                <CommandEmpty>Not found</CommandEmpty>
                                <CommandList>
                                  {branches.map((branch) => (
                                    <CommandItem
                                      value={branch.label}
                                      key={branch.value}
                                      onSelect={() => {
                                        form.setValue("branch", branch.value);
                                      }}
                                    >
                                      {branch.label}
                                      <CheckIcon
                                        className={cn(
                                          "ml-auto h-4 w-4",
                                          branch.value === field.value
                                            ? "opacity-100"
                                            : "opacity-0"
                                        )}
                                      />
                                    </CommandItem>
                                  ))}
                                </CommandList>
                              </Command>
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="scholarships"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Scholarship Eligibility</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant="outline"
                                role="combobox"
                                className={cn(
                                  "justify-between w-full",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value
                                  ? scholarships.find(
                                      (scholarship) =>
                                        scholarship.value === field.value
                                    )?.label
                                  : "Select eligibility"}
                                <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="p-0 w-[370px]">
                            <Command className="bg-black">
                              <CommandInput
                                placeholder="Search eligibility..."
                                className="h-10"
                              />
                              <CommandEmpty>Not found</CommandEmpty>
                              <CommandList>
                                {scholarships.map((scholarship) => (
                                  <CommandItem
                                    value={scholarship.label}
                                    key={scholarship.value}
                                    onSelect={() => {
                                      form.setValue(
                                        "scholarships",
                                        scholarship.value
                                      );
                                    }}
                                  >
                                    {scholarship.label}
                                    <CheckIcon
                                      className={cn(
                                        "ml-auto h-4 w-4",
                                        scholarship.value === field.value
                                          ? "opacity-100"
                                          : "opacity-0"
                                      )}
                                    />
                                  </CommandItem>
                                ))}
                              </CommandList>
                            </Command>
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* <FormField
                    control={form.control}
                    name="profileImage"
                    render={({ field }) => (
                      <FormItem>
                        {/* <FormLabel>Profile Image</FormLabel> 
                        <FormControl>
                          <Button className="rounded-full w-32 h-32 px-5">
                            <input
                              type="file"
                              id="image_uploads"
                              name="image_uploads"
                              accept=".jpg, .jpeg, .png"
                              multiple
                              onChange={handleImageChange}
                            />
                          </Button>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  /> */}
                  <div className="flex justify-between">
                    <Button type="submit" onClick={handlePrevious}>
                      Prev
                    </Button>
                    <Button type="submit">Signup</Button>
                  </div>
                </form>
              </Form>
            </Card>
            <p className="text-center">
              Already have an account? <Link href="/auth/signin">Signin</Link>
            </p>
          </>
        )}
      </Card>
    </section>
  );
}
