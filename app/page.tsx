import { Button } from "@/components/ui/button";
import supabaseClient from "@/lib/supabase/supabase";

const Home = async () => {
  const supabase = await supabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    return (
      <div>
        <h1>Welcome {user.email}</h1>
        <form action="/auth/signout" method="post">
          <Button className="button block cursor-pointer" type="submit">
            Sign out
          </Button>
        </form>
      </div>
    );
  }

  return (
    <div>
      <h1>Welcome</h1>
    </div>
  );
};

export default Home;
