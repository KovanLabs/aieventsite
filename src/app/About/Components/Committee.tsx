import type { CommitteeData } from "../types/Conference"

interface CommitteeProps {
  data: CommitteeData
}

export default function Committee({ data }: CommitteeProps) {
  return (
    <div className="mb-24">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold mb-2">{data.title}</h2>
        <p className="text-gray-600">{data.subtitle}</p>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        {data.members.map((member, index) => (
          <div key={index} className="p-6 border border-gray-200 text-center">
            <h3 className="text-lg font-semibold mb-2">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
