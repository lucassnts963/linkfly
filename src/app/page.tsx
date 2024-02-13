import Image from 'next/image'
import Link from 'next/link'

import profile from '@/assets/avatar.jpg'

import yberaLogo from '@/assets/YberaParis.png'
import acquafitLogo from '@/assets/Acquafit.png'
import fashionGoldLogo from '@/assets/FashionGold.png'
import terraCocoLogo from '@/assets/TerraCoco.png'
import tbtImage from '@/assets/tbt.jpg'
//import spapetLogo from '@/assets/Spapet.png'2020525

export default function Home() {
  return (
    <main className="mx-auto max-w-md p-8 bg-[#ff007f] shadow-lg rounded-md text-zinc-100">
        <Image src={profile} alt='' width={100} height={100} className='rounded-full mx-auto'/>
        <h1 className="text-2xl text-zinc-100 mb-1 text-center">Jaqueline Machado</h1>
        <p className="italic text-pink-300 mb-4 text-center">@jak.emachado</p>

        <p className='text-center text-xl font-bold mb-8'>Bem vindas, Maravilhosas!</p>

        <p className="text-center mb-8 font-thin text-zinc-100">Estou aqui para transformar a sua jornada capilar em uma experiência extraordinária!</p>

        <p className='text-center mb-8 font-bold text-md'>Aqui está o que oferecemos:</p>

        <ul className='mb-8'>
          <li className='font-extralight italic'>✨ Produtos Direto da Fábrica 🏭</li>
          <li className='font-extralight italic'>✨ Assinatura Prime por Apenas R$19,90 Mensais 🎁</li>
          <li className='font-extralight italic'>✨ Parcelamento em até 10x Sem Juros 💳</li>
          <li className='font-extralight italic'>✨ Desconto de 5% no PIX 💸</li>
          <li className='font-extralight italic'>✨ Descontos Exclusivos nos meus links 🛍️</li>
        </ul>

        <p className='font-medium text-xl mb-8 text-justify'>Não perca mais tempo! Clique agora nos meus links abaixo e descubra uma nova era de cuidados capilares que vão deixar você deslumbrante! ✨💇‍♀️💖</p>

        <div className="flex gap-4 mb-8">
          <Link href="/produtos/Ybera-Paris">
            <Image src={yberaLogo} alt='' className='rounded-full border hover:border-4'/>
          </Link>
          <Link href="/produtos/Acquafit">
            <Image src={acquafitLogo} alt='' className='rounded-full border hover:border-4'/>
          </Link>
          <Link href="/produtos/Fashion-Gold">
            <Image src={fashionGoldLogo} alt='' className='rounded-full border hover:border-4'/>
          </Link>
          <Link href="/produtos/Terra-Coco">
            <Image src={terraCocoLogo} alt='' className='rounded-full border hover:border-4'/>
          </Link>
        </div>

        <div className="flex flex-col justify-around w-full gap-2">
            <a href="https://www.b2cstore.com.br/tbt-black-friday?parceiro=20449" target="_blank" rel="noopener noreferrer">
              <Image src={tbtImage} alt='' className='rounded'/>
            </a>
            <a href="https://www.b2cstore.com.br/tbt-black-friday?parceiro=20449" className="brand-buttons bg-zinc-100 text-[#ff007f] rounded p-2 text-center font-bold" target='__blank'>#tbt Black Friday</a>
            <a href="https://www.b2cstore.com.br/tbt-black-friday?parceiro=20449" className="brand-buttons bg-zinc-100 text-[#ff007f] rounded p-2 text-center font-bold" target='__blank'>Todos os Produtos</a>
            <a href="https://www.facebook.com/jaqueline.msenaccb.1?mibextid=ZbWKwL" className="brand-buttons bg-purple-600 rounded p-2 text-center text-purple-100" target='__blank'>Facebook</a>
            <a href="https://api.whatsapp.com/send/?phone=5591988896127&text=%22Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%22&type=phone_number&app_absent=0" className="brand-buttons bg-purple-600 rounded p-2 text-center text-purple-100" target='__blank'>WhatsApp</a>
            <a href="https://www.instagram.com/jak.emachado/" className="brand-buttons bg-purple-600 rounded p-2 text-center text-purple-100" target='__blank'>Instagram</a>
        </div>

        <div className="flex justify-around mt-4">
            
        </div>
    </main>
  )
}
