import Places from "./components/Places";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Forms from "./components/Forms";
import Gallary from "./components/Gallary";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PlaceVideo from "./components/PlaceVideo";
import Stats from "./components/Stats";
import Services from "./Services";

export default function App() {
  const id = "form";

  return (
    <main>
      {/* <Header /> */}
      <section>
        <Hero id={id}/>
      </section>
      <section className="bg-violet-50">
        <Stats />
      </section>
      <section>
       <Gallary />
      </section>
      <section>
        <Cards />
      </section>
      <section className="py-10 bg-violet-100" id={id}>
        <Forms />
      </section>
      <section>
        <Places />
      </section>
      <section className="bg-violet-50">
        <PlaceVideo />
      </section>
      <section>
        <Services />
      </section>
      <section className="bg-stone-900">
        <Footer />
      </section>
    </main>
  )
}