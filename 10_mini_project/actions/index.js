"use server";
import dbConnect from "@/lib/db";
import Contact from "@/models/Contact";

export async function createContact(formData) {
  try {
    await dbConnect();
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");
    if (!name || !email || !subject || !message) {
      return {
        success: false,
        error: "All fields are required",
      };
    }

    const contact = await Contact.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject.trim(),
      message: message.trim(),
    });

    return {
      success: true,
      message: "Message sent",
      contactId: contact._id.toString(),
    };
  } catch (error) {
    console.error(error);
  }
}
