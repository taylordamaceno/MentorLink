import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Video } from "lucide-react"

// Mock data for upcoming sessions
const upcomingSessions = [
  {
    id: 1,
    title: "Career Development",
    date: "2025-03-15",
    time: "10:00 AM",
    duration: "45 min",
    participant: {
      name: "Alex Johnson",
      role: "Mentee",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    type: "video",
  },
  {
    id: 2,
    title: "Technical Interview Prep",
    date: "2025-03-16",
    time: "2:30 PM",
    duration: "60 min",
    participant: {
      name: "Maria Garcia",
      role: "Mentee",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    type: "video",
  },
  {
    id: 3,
    title: "Project Review",
    date: "2025-03-18",
    time: "11:00 AM",
    duration: "30 min",
    participant: {
      name: "Carlos Rodriguez",
      role: "Mentee",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    type: "video",
  },
]

export function UpcomingSessions() {
  return (
    <div className="space-y-4">
      {upcomingSessions.map((session) => (
        <div key={session.id} className="flex items-start space-x-4 rounded-md border p-4">
          <Avatar className="h-10 w-10">
            <AvatarImage src={session.participant.avatar} alt={session.participant.name} />
            <AvatarFallback>{session.participant.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">{session.title}</p>
              <div className="flex items-center space-x-1">
                <Video className="h-4 w-4 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">{session.type}</span>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-xs text-muted-foreground">
              <div className="flex items-center">
                <Calendar className="mr-1 h-3 w-3" />
                {session.date}
              </div>
              <div className="flex items-center">
                <Clock className="mr-1 h-3 w-3" />
                {session.time} ({session.duration})
              </div>
            </div>
            <div className="flex items-center justify-between pt-2">
              <p className="text-xs">
                {session.participant.name} ({session.participant.role})
              </p>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  Reschedule
                </Button>
                <Button size="sm">Join</Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

