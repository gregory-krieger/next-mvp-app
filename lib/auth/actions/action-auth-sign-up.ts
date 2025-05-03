"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { authClient } from "../auth-client";

export async function actionAuthSignUp(formData: FormData) {
  console.log("actionSignup");
  // Zod validation
  const zodSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
    name: z.string().min(1),
  });

  const validatedFields = zodSchema.safeParse({
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    name: formData.get("name") as string,
  });

  if (!validatedFields.success) {
    return { errors: validatedFields.error.flatten().fieldErrors };
  }

  // Create user

  const { data, error } = await authClient.signUp.email({
    email: validatedFields.data.email,
    password: validatedFields.data.password,
    name: validatedFields.data.name,
  });

  // if there is an error, return the error
  if (error) return { error: error.message };

  // Check if user is created and if there is a session
  if (data.user && data.token) {
    revalidatePath("/", "layout");
    redirect("/");
  }

  // if we land here, there is an error
  return { error: "Something went wrong" };
}
