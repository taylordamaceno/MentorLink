import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Video } from "lucide-react"

// Mock data for sessions
const sessions = {
  upcoming: [
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
  ],
  past: [
    {
      id: 4,
      title: "Career Path Discussion",
      date: "2025-03-10",
      time: "11:00 AM",
      duration: "45 min",
      participant: {
        name: "Emma Wilson",
        role: "Mentee",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      type: "video",
      feedback: "Excellent session, very helpful!",
    },
    {
      id: 5,
      title: "Resume Review",
      date: "2025-03-08",
      time: "3:30 PM",
      duration: "30 min",
      participant: {
        name: "David Kim",
        role: "Mentee",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      type: "video",
      feedback: "Great feedback on my resume.",
    },
    {
      id: 6,
      title: "Leadership Skills",
      date: "2025-03-05",
      time: "10:00 AM",
      duration: "60 min",
      participant: {
        name: "Sophia Chen",
        role: "Mentee",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      type: "video",
      feedback: "Very insightful discussion.",
    },
  ],
  canceled: [
    {
      id: 7,
      title: "Technical Interview Prep",
      date: "2025-03-01",
      time: "2:00 PM",
      duration: "45 min",
      participant: {
        name: "James Taylor",
        role: "Mentee",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      type: "video",
      cancelReason: "Scheduling conflict",
    },
    {
      id: 8,
      title: "Project Planning",
      date: "2025-02-28",
      time: "1:00 PM",
      duration: "30 min",
      participant: {
        name: "Olivia Brown",
        role: "Mentee",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      type: "video",
      cancelReason: "Illness",
    },
  ],
}

interface SessionsListProps {
  type: "upcoming" | "past" | "canceled"
}

export function SessionsList({ type }: SessionsListProps) {
  const sessionsList = sessions[type]

  if (sessionsList.length === 0) {
    return <div className="text-center p-8 text-muted-foreground">No {type} sessions found</div>
  }

  return (
    <div className="space-y-4">
      {sessionsList.map((session) => (
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

            {type === "past" && "feedback" in session && (
              <div className="mt-2 text-xs italic">"{session.feedback}"</div>
            )}

            {type === "canceled" && "cancelReason" in session && (
              <div className="mt-2 text-xs">
                <Badge variant="outline" className="text-destructive border-destructive">
                  Canceled: {session.cancelReason}
                </Badge>
              </div>
            )}

            <div className="flex items-center justify-between pt-2">
              <p className="text-xs">
                {session.participant.name} ({session.participant.role})
              </p>
              <div className="flex space-x-2">
                {type === "upcoming" && (
                  <>
                    <Button variant="outline" size="sm">
                      Reschedule
                    </Button>
                    <Button size="sm">Join</Button>
                  </>
                )}
                {type === "past" && (
                  <Button variant="outline" size="sm">
                    View Notes
                  </Button>
                )}
                {type === "canceled" && (
                  <Button variant="outline" size="sm">
                    Reschedule
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

