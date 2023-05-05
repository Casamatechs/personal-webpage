import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";

const hyperLinkStyle = "hover:underline text-blue-600 hover:text-blue-800";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 min-h-screen p-12 sm:p-24">
      <section id="header" className="flex flex-col w-full items-center">
        <Header />
      </section>
      <section id="about-me" className="flex flex-col gap-4">
        <h1 className="font-sans text-4xl font-bold">About me</h1>
        <p className="font-serif text-lg">
          I am a computer engineer currently working on fullstack applications
          builts with the Next.js framework. I am specially interested in the
          the latest advances made with React Server Components and how they can
          be used to build better web applications both from a user experience
          and a performance point of view.
        </p>
        <p className="font-serif text-lg">
          I am always looking to get involved in new projects and learn new
          things. I you want to get in touch with me, you can reach me at{" "}
          <a
            className={hyperLinkStyle}
            href="https://cal.com/carlos-sanchez-marin-4a4jrn"
          >
            Cal.com
          </a>
        </p>
      </section>
      <section id="background" className="flex flex-col gap-4">
        <h1 className="font-sans text-4xl font-bold">Background</h1>
        <p className="font-serif text-lg">
          I did a double master&apos;s in Data Science at Eindhoven University
          of Technology (TU/e) and Madrid Technical University (UPM). During my
          bachelor I worked as an intern at the{" "}
          <a className={hyperLinkStyle} href="http://lsd.ls.fi.upm.es/">
            Distributed Systems Laboratory{" "}
          </a>
          and after graduating, I kept working as a full-time researcher. You
          can find more about my background{" "}
          <a className={hyperLinkStyle} href="/CV_Carlos.pdf">
            here
          </a>
          .
        </p>
      </section>
      <section id="footer">
        <Footer />
      </section>
    </main>
  );
}
