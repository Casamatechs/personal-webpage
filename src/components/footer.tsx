import Image from "next/image";
import linkedin from "../../public/linkedin.svg";
import github from "../../public/github-mark.svg";
import email from "../../public/email.svg";

export default function Footer() {
  return (
    <footer className="flex flex-row justify-center gap-x-5">
      <a className="flex-initial w-8 h-8" href="mailto:carlos@sanchez.kr">
        <Image
          alt="Email me!"
          className="dark:invert"
          width={32}
          height={32}
          src={email}
        />
      </a>
      <a className="flex-initial w-8 h-8" href="https://github.com/Casamatechs">
        <Image
          alt="Check out my Github!"
          className="dark:invert"
          width={32}
          height={32}
          src={github}
        />
      </a>
      <a
        className="flex-initial w-8 h-8"
        href="https://www.linkedin.com/in/csanchezmarin/"
      >
        <Image
          alt="Check out my LinkedIn!"
          className="dark:invert"
          width={32}
          height={32}
          src={linkedin}
        />
      </a>
    </footer>
  );
}
