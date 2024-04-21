import heroImg from "/public/home.jpg";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <Hero
      imgData={heroImg}
      imgAlt='Car Factory'
      title='Professional Cloud Hosting'
    />
  );
}
