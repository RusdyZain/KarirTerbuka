
import Link from 'next/link';
import Image from 'next/image';
const Beranda = () => {
return (
  <div>
   <header className='transparent absolute top-0 left-0 w-full flex items-center z-10 '>
<div className="container">
  <div className="flex items-center justify-between relative pl-[102px]">
    <div className="px-4 flex ">
    <Image src="/logo_rafflesia.svg" alt="Logo Rafflesia" width={54} height={44} />
    <h1 className='text-2xl font-bold text-blue-600 pt-2 '>Karir Terbuka</h1>
    </div>
  </div>
</div>
   </header>
  </div>
)
}

export default Beranda;