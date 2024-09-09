import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/73ace47e-183d-4c59-8b1c-f34132c46321-nvu2p0.jpg",
  "https://utfs.io/f/01899074-e841-456d-a951-70793e6807a4-b9b0jk.jpg",
  "https://utfs.io/f/5609c14c-848f-4940-b6c4-976ec7c16209-4a5lxs.jpg",
  "https://utfs.io/f/fc4f2321-0186-4c56-90e0-063981d0718f-5onyam.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
      Hello (gallery in progress)
    </main>
  );
}
