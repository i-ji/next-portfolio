import Contact from "../features/contact/Contact";

export async function generateMetadata() {
  return {
    title: "J-Ito's Portfolio - Contact",
  };
}

const page = () => {
  return <Contact />;
};

export default page;
