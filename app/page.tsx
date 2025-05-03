import SignOutBtn from "@/components/auth/components/sign-out-btn";
import { auth } from "@/lib/auth/auth";
import { headers } from "next/headers";

const Home = async () => {
  const data = await auth.api.getSession({
    headers: await headers(), //some endpoint might require headers
  });

  console.log(data);

  return (
    <div>
      <h1>Welcome {data?.user.name}</h1>
      <SignOutBtn />
    </div>
  );
};

export default Home;
