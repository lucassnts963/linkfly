import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  code: string
  url: string
  img: string
  description: string
  brand: string
}

export function ProductCard({ code, url, img, description, brand }: ProductCardProps) {
  return (
    <div className="bg-white p-6 rounded-md shadow-md flex gap-4">
          <Image src={img} alt='' height={100} width={100} className='mx-auto'/>
          <Link href={url} className="flex flex-col gap-4 flex-1">
            <h2 className="text-xl font-semibold mb-2">
              {description}
            </h2>
            <span className="text-zinc-600">{brand}</span>
          </Link>
        </div>
  )
}