import heroImg from "/public/scale.jpg";
import Hero from "@/components/hero";

export default function Scale() {
  return (
    <Hero
      imgData={heroImg}
      imgAlt='Steel Factory'
      title='Scale your app to infinity'
    />
  );
}
