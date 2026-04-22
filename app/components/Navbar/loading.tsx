import Image from "next/image"
import logo from "../../assets/9.png"

const loading = () => {
  return (
    <div className="w-full h-20 flex items-center justify-center">
      <Image src={logo} alt="Logo" width={150} height={150} />
    </div>
  )
}

export default loading