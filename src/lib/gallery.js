export async function getGallery() {
  const res = await fetch(`${process.env.DATA_API}/gallery`, {
    cache: "no-store",
  });

  return res.json();
}
