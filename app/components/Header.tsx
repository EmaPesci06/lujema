import Image from "next/image";
import Link from "next/link";
import lujema from '../../public/images/Lujema__1_-removebg-preview.webp'

export default function Header() {
    return (
        <header className="bg-darkBrown text-silver p-4">
            <ul className="flex gap-4 mx-auto justify-around items-center">
                <Link href="/" className="text-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">Algo</Link>
                <Link href="/contacto" className="text-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">Contacto</Link>
                <Link href='/' className="text-xl 2"><Image src={lujema} alt='Lujema' height={125} width={125} /></Link>
                <Link href="/" className="text-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">Algo</Link>
                <Link href="/" className="text-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">Algo</Link>
            </ul>
        </header>
    );
}