"use server";

import { redirect } from "next/navigation";
import supabaseClient from "../supabase";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export async function actionSignup(formData: FormData) {
  console.log("actionSignup");
  // Zod validation
  const zodSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
  });

  const validatedFields = zodSchema.safeParse({
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  });

  if (!validatedFields.success) {
    return { errors: validatedFields.error.flatten().fieldErrors };
  }

  // Create user
  const supabase = await supabaseClient();

  const { data, error } = await supabase.auth.signUp({
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  });

  // if there is an error, return the error
  if (error) return { error: error.message };

  // Check if user is created and if there is a session
  // if confirm email is mandatory, session will be empty
  if (data.user && data.session) {
    revalidatePath("/", "layout");
    redirect("/");
  }

  // if user is created and there is no session, return the user
  // means that confirm email is mandatory, and the user needs to confirm their email
  if (data.user && !data.session) {
    return { data };
  }

  // if we land here, there is an error
  return { error: "Something went wrong" };
}
