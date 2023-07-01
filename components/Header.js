'use client'
 
import { useRouter } from 'next/navigation'

export default function Header() {
  const router = useRouter()
  return (

    <><button type="button" onClick={() => router.push('/')}>
      Accueil
    </button>
      <button type="button" onClick={() => router.push('/Calculette')}>
      Calculette
    </button>
    {/* <button type="button" onClick={() => router.push('/what')}>
        what
      </button> */}
      <button type="button" onClick={() => router.push('/chrono')}>
        Chrono
      </button></>
  );
}

