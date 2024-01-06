import Image from 'next/image'

export default function Header() {
  return (
    <div className="h-52 flex justify-center items-center bg-custom-gray-700">
      <Image
        src="/Logo.svg"
        width={0}
        height={0}
        style={{ width: 150, height: 'auto' }}
        alt=""
      />
    </div>
  )
}
