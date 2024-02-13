import Image from 'next/image'

import products from '@/data/data.json'
import { ProductCard } from '@/components/ProductCard'

import yberaLogo from '@/assets/YberaParis.png'
import acquafitLogo from '@/assets/Acquafit.png'
import fashionGoldLogo from '@/assets/FashionGold.png'
import terraCocoLogo from '@/assets/TerraCoco.png'

export default function Brand({ params }: { params: { brand: string } }) {
  const brand = params.brand.replace('-', ' ')

  const img = require(`@/assets/${brand.replace(' ', '')}.png`)

  return (
    <main className="container mx-auto mt-8 p-4 md:p-0 ">
      <Image src={img} alt="" height={200} width={200} className='mx-auto rounded-full mb-8'/>
      <h1 className="text-3xl font-bold mb-6 text-center">Catálogo de Produtos</h1>

      <div className="flex flex-col gap-8 mb-8">
        {
          products.filter((value) => value.marca === brand).map((item, index) => {
            return (
              <ProductCard 
                key={index} 
                code={`${item.cod}`} 
                brand={item.marca} 
                description={item.description} 
                img={item.imagem} 
                url={item.url} 
              />
            )
          })
        }
      </div>
    </main>
  )
}