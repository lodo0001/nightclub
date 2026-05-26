"use server";

import { revalidatePath } from "next/cache";

export async function createComment(prevState, formData) {
  const eventId = formData.get("eventId");
  const name = formData.get("name");
  const content = formData.get("comment");
  const date = new Date().toISOString();

  if (!name || !content) {
    return {
      success: false,
      message: "Please fill in both name and comment.",
    };
  }

  try {
    const res = await fetch(`${process.env.DATA_API}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        eventId: Number(eventId),
        name,
        content,
        date,
      }),
    });

    if (!res.ok) {
      return {
        success: false,
        message:
          "An error occurred. We could not save the comment to the server.",
      };
    }

    // Fortæller Next.js, at den skal genindlæse event-siden, så den nye kommentar dukker op med det samme
    revalidatePath(`/events/${eventId}`);

    return { success: true, message: "Your comment has been added!" };
  } catch (error) {
    return {
      success: false,
      message: "Network error. Please try again later.",
    };
  }
}
