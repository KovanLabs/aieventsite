export interface AboutConferenceData {
    header: {
      title: string
      subtitle: string
      description: string
      additionalDescription: string
    }
    visionMission: VisionMissionData
    goals: GoalsData
    benefits: BenefitsData
    committee: CommitteeData
    faqs: FaqsData
  }
  
  export interface VisionMissionData {
    vision: {
      title: string
      content: string
      additionalContent: string
    }
    mission: {
      title: string
      content: string
      additionalContent: string
    }
  }
  
  export interface GoalsData {
    title: string
    subtitle: string
    items: {
      title: string
      description: string
    }[]
  }
  
  export interface BenefitsData {
    title: string
    subtitle: string
    items: {
      id: string
      title: string
      description: string
    }[]
  }
  
  export interface CommitteeData {
    title: string
    subtitle: string
    members: {
      name: string
      role: string
    }[]
  }
  
  export interface FaqsData {
    title: string
    subtitle: string
    items: {
      question: string
      answer: string
    }[]
  }
  