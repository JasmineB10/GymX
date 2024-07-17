
type Props = {
    image: string,
    title:string,
    description?:string
}

const Class = ({image, title, description}: Props) => {
  return (
    <div className="relative group w-96 flex-shrink-0">
      <img src={image} alt="Class Image" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-red-200 bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
        <h3 className="text-stone-100 text-2xl font-bold">{title}</h3>
        <p className="text-stone-100 text-lg mt-2">{description}</p>
      </div>
    </div>


  )
}

export default Class;