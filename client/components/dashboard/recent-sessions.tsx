import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock } from "lucide-react"

// Mock data for recent sessions
const recentSessions = [
  {
    id: 1,
    title: "Career Path Discussion",
    date: "2025-03-10",
    time: "11:00 AM",
    duration: "45 min",
    participant: {
      name: "Emma Wilson",
      role: "Mentee",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    status: "completed",
  },
  {
    id: 2,
    title: "Resume Review",
    date: "2025-03-08",
    time: "3:30 PM",
    duration: "30 min",
    participant: {
      name: "David Kim",
      role: "Mentee",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    status: "completed",
  },
  {
    id: 3,
    title: "Leadership Skills",
    date: "2025-03-05",
    time: "10:00 AM",
    duration: "60 min",
    participant: {
      name: "Sophia Chen",
      role: "Mentee",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    status: "canceled",
  },
  {
    id: 4,
    title: "Technical Interview Prep",
    date: "2025-03-01",
    time: "2:00 PM",
    duration: "45 min",
    participant: {
      name: "James Taylor",
      role: "Mentee",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    status: "completed",
  },
]

export function RecentSessions() {
  return (
    <div className="space-y-8">
      <div className="rounded-md border">
        <div className="relative w-full overflow-auto">
          <table className="w-full caption-bottom text-sm">
            <thead>
              <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Session</th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Date & Time</th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Participant</th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Status</th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {recentSessions.map((session) => (
                <tr
                  key={session.id}
                  className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                >
                  <td className="p-4 align-middle">
                    <div className="font-medium">{session.title}</div>
                    <div className="text-xs text-muted-foreground">{session.duration}</div>
                  </td>
                  <td className="p-4 align-middle">
                    <div className="flex flex-col">
                      <div className="flex items-center text-xs">
                        <Calendar className="mr-1 h-3 w-3" />
                        {session.date}
                      </div>
                      <div className="flex items-center text-xs">
                        <Clock className="mr-1 h-3 w-3" />
                        {session.time}
                      </div>
                    </div>
                  </td>
                  <td className="p-4 align-middle">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={session.participant.avatar} alt={session.participant.name} />
                        <AvatarFallback>{session.participant.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{session.participant.name}</div>
                        <div className="text-xs text-muted-foreground">{session.participant.role}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 align-middle">
                    <Badge variant={session.status === "completed" ? "default" : "destructive"}>
                      {session.status === "completed" ? "Completed" : "Canceled"}
                    </Badge>
                  </td>
                  <td className="p-4 align-middle">
                    <Button variant="outline" size="sm">
                      Notes
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

