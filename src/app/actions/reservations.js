"use server";

export async function reservationsAction(prevState, formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const table = formData.get("table");
  const guests = formData.get("numberOfGuests");
  const eventId = formData.get("eventId");
  const rawDate = formData.get("date");
  const eventTime = formData.get("eventTime") || "20:00";

  if (!email || !email.includes("@")) {
    return { success: false, error: "Please enter a valid email address." };
  }

  if (!name || !phone || !table || !eventId || !rawDate) {
    return {
      success: false,
      error: "All boxes must be filled in and a table must be selected.",
    };
  }

  const formattedDate = `${rawDate}T${eventTime}:00+02:00`;

  const payload = {
    name: name,
    email: email,
    table: table.toString(),
    guests: guests.toString(),
    date: formattedDate,
    phone: phone.toString(),
    eventId: parseInt(eventId),
  };

  try {
    const res = await fetch(`${process.env.DATA_API}/reservations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      return {
        success: true,
        message:
          "Thank You for booking a table at NightClub! You will soon get a confirmation",
      };
    }

    const errorData = await res.json().catch(() => ({}));

    if (res.status === 409 || errorData.message?.includes("taken")) {
      return {
        success: false,
        error: "Unfortunately, this table is already taken on this date :(",
      };
    }

    const apiErrorMessage =
      errorData.error?.details?.[0]?.message || errorData.error?.message;

    return {
      success: false,
      error: apiErrorMessage || "An error occurred. Please try again later.",
    };
  } catch (err) {
    return { success: false, error: "Could not connect to the server." };
  }
}
