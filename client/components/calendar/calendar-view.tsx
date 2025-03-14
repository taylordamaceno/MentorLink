"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, User } from "lucide-react"

// Mock data for calendar events
const events = [
  {
    id: 1,
    title: "Career Development",
    date: new Date(2025, 2, 15),
    time: "10:00 AM",
    duration: "45 min",
    participant: "Alex Johnson",
    type: "mentee",
  },
  {
    id: 2,
    title: "Technical Interview Prep",
    date: new Date(2025, 2, 16),
    time: "2:30 PM",
    duration: "60 min",
    participant: "Maria Garcia",
    type: "mentee",
  },
  {
    id: 3,
    title: "Project Review",
    date: new Date(2025, 2, 18),
    time: "11:00 AM",
    duration: "30 min",
    participant: "Carlos Rodriguez",
    type: "mentee",
  },
  {
    id: 4,
    title: "Career Path Discussion",
    date: new Date(2025, 2, 10),
    time: "11:00 AM",
    duration: "45 min",
    participant: "Emma Wilson",
    type: "mentee",
  },
  {
    id: 5,
    title: "Resume Review",
    date: new Date(2025, 2, 8),
    time: "3:30 PM",
    duration: "30 min",
    participant: "David Kim",
    type: "mentee",
  },
]

export function CalendarView() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())

  // Filter events for the selected date
  const selectedDateEvents = events.filter(
    (event) =>
      selectedDate &&
      event.date.getDate() === selectedDate.getDate() &&
      event.date.getMonth() === selectedDate.getMonth() &&
      event.date.getFullYear() === selectedDate.getFullYear(),
  )

  // Function to highlight dates with events
  const isDayWithEvent = (day: Date) => {
    return events.some(
      (event) =>
        event.date.getDate() === day.getDate() &&
        event.date.getMonth() === day.getMonth() &&
        event.date.getFullYear() === day.getFullYear(),
    )
  }

  return (
    <div className="flex flex-col md:flex-row gap-6">
      <div className="md:w-1/2">
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
          className="rounded-md border"
          modifiers={{
            event: (date) => isDayWithEvent(date),
          }}
          modifiersClassNames={{
            event: "bg-primary/10 font-bold text-primary",
          }}
        />
      </div>
      <div className="md:w-1/2">
        <h3 className="text-lg font-medium mb-4">
          {selectedDate ? <>Sessions for {selectedDate.toLocaleDateString()}</> : <>Select a date</>}
        </h3>
        {selectedDateEvents.length > 0 ? (
          <div className="space-y-4">
            {selectedDateEvents.map((event) => (
              <Card key={event.id}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium">{event.title}</h4>
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <Clock className="h-4 w-4 mr-1" />
                        {event.time} ({event.duration})
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <User className="h-4 w-4 mr-1" />
                        {event.participant}
                      </div>
                    </div>
                    <Badge>{event.type}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center p-8 text-muted-foreground">No sessions scheduled for this date</div>
        )}
      </div>
    </div>
  )
}

