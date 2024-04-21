import heroImg from "/public/reliability.jpg";
import Hero from "@/components/hero";

export default function Reliability() {
  return (
    <Hero
      imgData={heroImg}
      imgAlt='Welding'
      title='Super high reliability hosting'
    />
  );
}
