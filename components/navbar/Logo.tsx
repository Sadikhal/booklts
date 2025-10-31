'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return ( 
    <Image
      onClick={() => router.push('/')}
      className="hidden md:block cursor-pointer" 
      src="/next.svg" 
      height={55}
      width={100} 
      alt="Logo" 
    />
   );
}
 
export default Logo;
