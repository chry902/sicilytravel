import { useRouter } from "next/router";

const Country = () => {
  const router = useRouter();
  const { city } = router.query;
  console.log(city);
  return <h1>{city}</h1>;
};
export default Country;
