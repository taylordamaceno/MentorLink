import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SessionsList } from "@/components/sessions/sessions-list"

export default function SessionsPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Sessions</h2>
      </div>

      <Tabs defaultValue="upcoming" className="space-y-4">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="past">Past</TabsTrigger>
          <TabsTrigger value="canceled">Canceled</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Sessions</CardTitle>
              <CardDescription>View and manage your upcoming mentorship sessions</CardDescription>
            </CardHeader>
            <CardContent>
              <SessionsList type="upcoming" />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="past" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Past Sessions</CardTitle>
              <CardDescription>Review your completed mentorship sessions</CardDescription>
            </CardHeader>
            <CardContent>
              <SessionsList type="past" />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="canceled" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Canceled Sessions</CardTitle>
              <CardDescription>View your canceled mentorship sessions</CardDescription>
            </CardHeader>
            <CardContent>
              <SessionsList type="canceled" />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

