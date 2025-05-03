"use server";

import { redirect } from "next/navigation";
import supabaseClient from "../supabase";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export async function actionSignin(formData: FormData) {
  console.log("actionSignin");
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

  // Log in user
  const supabase = await supabaseClient();

  const { data, error } = await supabase.auth.signInWithPassword({
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  });

  // if there is an error, return the error
  if (error) return { error: error.message };

  // Check if user is logged in and if there is a session
  if (data.user && data.session) {
    revalidatePath("/", "layout");
    redirect("/");
  }

  // if user is logged in and there is no session there is an error
  if (data.user && !data.session) {
    return { error: "Something went wrong" };
  }

  // if we land here, there is an error
  return { error: "Something went wrong" };
}
