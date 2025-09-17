import { PrismaClient } from "@prisma/client";
interface Art {
  id: number;
  description: string;
  url: string;
  name_pic: string;
}

export default async function Page() {
  const prisma = new PrismaClient()
  const data = await prisma.image.findMany()

  return (
    <div className="min-h-screen bg-blue-50 text-blue-900">
      {/* Header */}
      <header className="bg-blue-900 text-white py-6 text-center">
        <h1 className="text-3xl font-bold">Art App On the cloud</h1>
      </header>

      {/* Gallery */}
      <section className="max-w-6xl mx-auto p-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {/* <div className="bg-white rounded-xl shadow-md overflow-hidden hover:-translate-y-1 transition">
            <img
              src=""
              alt="Photo 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">ชื่อภาพที่ 1</h3>
              <p className="text-sm text-gray-700 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel ligula eget massa aliquet.
              </p>
            </div>
          </div> */}
        {data.map((art: Art, index: number) => (
          <div key={art.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:-translate-y-1 transition">
            <img
              src={art.url}
              alt={art.name_pic}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{art.name_pic}</h3>
              <p className="text-sm text-gray-700 mt-2">
                {art.description}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
