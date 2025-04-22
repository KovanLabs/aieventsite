interface Option {
    name: string
    description: string
    price: string
}

interface CustomOpportunitiesProps {
    title: string
    subtitle: string
    description: string
    options: Option[]
    cta: string
}

export default function CustomOpportunities({ title, subtitle, description, options, cta }: CustomOpportunitiesProps) {
    return (
        <div>
            <h2 className="text-3xl font-bold text-white">{title}</h2>
            <div className="mt-4 border-b border-[#40ffaa] w-24"></div>
            <p className="mt-4 text-xl font-medium text-[#40ffaa]">{subtitle}</p>
            <p className="mt-2 text-base text-neutral-300">{description}</p>

            <div className="mt-8 space-y-6">
                {options.map((option) => (
                    <div key={option.name} className="flex items-start group">
                        <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[#40ffaa]/20 text-[#40ffaa] mr-4 transition-all duration-300 group-hover:bg-[#40ffaa]/30 group-hover:shadow-[0_0_15px_rgba(64,255,170,0.3)]">
                            {option.name.charAt(0)}
                        </div>
                        <div>
                            <h3 className="text-lg font-medium text-white">{option.name}</h3>
                            <p className="mt-1 text-sm text-neutral-300">{option.description}</p>
                            <p className="mt-2 text-sm font-medium text-[#40ffaa]">{option.price}</p>
                        </div>
                    </div>
                ))}
            </div>

            <p className="mt-8 text-sm text-neutral-300">{cta}</p>
            
            <button className="mt-6 text-white text-sm relative bg-gradient-to-r from-[#40ffaa] to-[#00ffff] p-[1.5px] rounded-full group hover:scale-105 transition-transform duration-300">
                <span className="relative bg-black block rounded-full px-6 py-2 transition-all duration-300 group-hover:text-[#40ffaa] group-hover:shadow-[0_0_15px_rgba(64,255,170,0.3)] font-medium">
                    Learn More
                </span>
            </button>
        </div>
    )
}