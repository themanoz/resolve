import Hero from "@/components/Hero";
import Services from "@/pages/services";
import { CardContainer } from "@/components/ui/3d-card";
import Image from "next/image";
import About from "@/pages/about";
// import Contact from "@/pages/contact";
import { Button } from "@/components/ui/button";

export default async function Home() {
  return (
    <main className="flex flex-col items-center justify-center pt-36 px-8">
      <div className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-50 pointer-events-none pt-56 pl-96">
        <div className="blur-[106px] h-56 bg-gradient-to-br from-violet-800 ..."></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-violet-800 ..."></div>
      </div>
      <Hero />
      <div className="pt-20">
        <CardContainer className="pt-18 border rounded-lg border-slate-600">
          <Image
            src="/image.png"
            width={1000}
            height={500}
            alt="Picture of the author"
            className="rounded-lg"
          />
        </CardContainer>
      </div>
      <section className=" pt-36 text-center space-y-3">
        <h1 className="text-6xl font-semibold  bg-gradient-to-r from-violet-500 to-fuchsia-500 inline-block text-transparent bg-clip-text">
          Our Services
        </h1>
        <p className="text-slate-400 text-xl">
          <span>
            Experience a new standard in complaint resolution with our
            cutting-edge system,
          </span>{" "}
          <br />
          ushering in an era of precision and ease in customer service.
        </p>
      </section>
      <section className="pt-20">
        <Services />
      </section>
      <section>
        <About />
      </section>
      {/* <section>
        <Contact />
      </section> */}
      <section className="pt-12">
        <div className=" border w-[1200px] h-[300px] rounded-3xl bg-black text-white px-28 py-28 flex justify-between items-center">
          <div className="space-y-2">
            <h1 className="text-6xl w-96 font-bold">Ready to use <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 inline-block text-transparent bg-clip-text">Resolve</span>?</h1>
            <p>
              Experience a new standard in complaint resolution with our
              cutting-edge system.
            </p>
          </div>
          <div className="flex gap-2">
            <Button type="submit" className="px-12 text-md">
              Signin
            </Button>
            <Button type="submit" className="px-12 text-md">
              Signup
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}