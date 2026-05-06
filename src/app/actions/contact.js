"use server";

export async function ContactUsAction(prevState, formData) {
  const email = formData.get("email");
  const name = formData.get("name");
  const comment = formData.get("comment");

  if (!email || !email.includes("@")) {
    return { error: "Please enter a valid email address." };
  }

  if (!comment || comment.trim() === "") {
    return { error: "Please write a comment." };
  }

  if (!name || name.trim() === "") {
    return { error: "Please enter your name." };
  }

  try {
    const res = await fetch(`${process.env.DATA_API}/contact_messages`, {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        content: comment,
        date: new Date().toISOString(),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      return { error: "An error occurred. Please try again later." };
    }

    return {
      success: "Thanks for your message — we’ll get back to you shortly.!",
    };
  } catch (err) {
    return { error: "Could not connect to the server." };
  }
}
