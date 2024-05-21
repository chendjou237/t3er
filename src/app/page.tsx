
const mockUrls = [
  'https://www.uploadthing.com/f/5831eed5-2ae1-48c8-b05f-2aa0ea142660-h8s555.jpg',
  'https://www.uploadthing.com/f/3c7d3a25-e008-435e-93e2-750e53e47d85-h8rjke.jpg',
  'https://www.uploadthing.com/f/72300398-723e-4cea-b686-ac643882975a-h8qxe3.jpg',
  'https://www.uploadthing.com/f/bee0a607-51ad-4e2f-9fc3-34a840eb11f4-a7uflk.jpg',
  'https://www.uploadthing.com/f/aa96f79e-2d5e-484c-bc19-6b33f2763d53-h8sv0x.jpg',
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
      {[...mockImages,...mockImages,...mockImages].map((image) => (<div key={image.id} className="w-48 ">
        <img src={image.url} alt="image" />
        </div>))}
      </div>
    </main>
  );
}
