"use server";
export async function createUSer(formData) {
  const name = formData.get("name");
  console.log("Creating User : ", name);
}
