import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarView } from "@/components/calendar/calendar-view"
import { AvailabilitySettings } from "@/components/calendar/availability-settings"

export default function CalendarPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Calendar</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-7">
        <Card className="col-span-5">
          <CardHeader>
            <CardTitle>Schedule</CardTitle>
            <CardDescription>View and manage your mentorship sessions</CardDescription>
          </CardHeader>
          <CardContent>
            <CalendarView />
          </CardContent>
        </Card>
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Availability</CardTitle>
            <CardDescription>Set your available time slots</CardDescription>
          </CardHeader>
          <CardContent>
            <AvailabilitySettings />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

