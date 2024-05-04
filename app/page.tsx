import Hero from "@/components/Hero";
import { Services } from "@/components/Services";
import { CardContainer } from "@/components/ui/3d-card";
import Image from "next/image";

export default async function Home() {
  return (
    <main className="flex flex-col items-center justify-center pt-36 px-8">
     
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
      <div className=" pt-72 text-center space-y-3">
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
        <section className="pt-20">
          <Services />
        </section>
      </div>
    </main>
  );
}
