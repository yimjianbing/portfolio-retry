import Image from "next/image"

interface CardProps {
  number: string
  author: string
  backgroundImage?: string
  customStyles?: string
}

export default function Card({
  number = "02",
  author = "Omar Faruq Tawsif",
  backgroundImage = "/Yim Jian Bing.png",
  customStyles = "",
}: CardProps) {
  return (
    <div className={`relative overflow-hidden rounded-3xl max-w-sm mx-auto ${customStyles}`}>
      {/* Card Background */}
      <div className="relative w-full aspect-[9/16] bg-gradient-to-br from-rose-300 via-rose-200 to-teal-100">
        {backgroundImage && (
          <Image
            src={backgroundImage || "/placeholder.svg"}
            alt="Tea card background"
            fill
            className="object-cover"
            priority
          />
        )}

        {/* Content Container */}
        <div className="absolute inset-0 flex flex-col p-8">
          {/* Title */}
          <div className="flex-1">
            <h1 className="text-white text-7xl sm:text-8xl font-light tracking-tighter">tea</h1>
          </div>

          {/* Footer */}
          <div className="flex justify-between items-end">
            <span className="text-white/90 font-medium">{author}</span>
            <span className="text-white/90 text-3xl font-light">/{number}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

