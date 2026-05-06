"use server";

export async function NewsletterAction(prevState, formData) {
  const email = formData.get("email");

  if (!email || !email.includes("@")) {
    return { error: "Please enter a valid email address." };
  }

  try {
    const res = await fetch(`${process.env.DATA_API}/newsletters`, {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.status === 409) {
      return { error: "This email is already subscribed to our newsletter." };
    }

    if (!res.ok) {
      return { error: "An error occurred. Please try again later." };
    }

    return { success: "Thank You for subscribing to our newsletter." };
  } catch (err) {
    return { error: "Could not connect to the server." };
  }
}
