import LandingPageContent from "../components/LandingPageContent";

export default function Home({ data }) {
  return <LandingPageContent products={data} />;
}

export const getServerSideProps = async () => {
  const response = await fetch(
    `${process.env.API_PROTOCOL}${process.env.API_URL}/products`
  );
  const data = await response.json();
  return {
    props: { data: data.data.products },
  };
};
