"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Mail, Video } from "lucide-react"

// Mock integration data
const integrations = [
  {
    id: "google-calendar",
    name: "Google Calendar",
    description: "Sync sessions with Google Calendar",
    icon: Calendar,
    connected: true,
    apiKey: "••••••••••••••••",
  },
  {
    id: "zoom",
    name: "Zoom",
    description: "Create video meetings for sessions",
    icon: Video,
    connected: true,
    apiKey: "••••••••••••••••",
  },
  {
    id: "mailchimp",
    name: "Mailchimp",
    description: "Send automated emails and newsletters",
    icon: Mail,
    connected: false,
    apiKey: "",
  },
]

export function IntegrationSettings() {
  const [integrationState, setIntegrationState] = useState(integrations)

  const handleToggleConnection = (id: string) => {
    setIntegrationState(
      integrationState.map((integration) =>
        integration.id === id ? { ...integration, connected: !integration.connected } : integration,
      ),
    )
  }

  const handleUpdateApiKey = (id: string, apiKey: string) => {
    setIntegrationState(
      integrationState.map((integration) => (integration.id === id ? { ...integration, apiKey } : integration)),
    )
  }

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">External Integrations</h3>
        <p className="text-sm text-muted-foreground">Connect your mentorship platform with external services</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {integrationState.map((integration) => (
          <Card key={integration.id}>
            <CardHeader className="space-y-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <integration.icon className="h-5 w-5" />
                  <CardTitle className="text-lg">{integration.name}</CardTitle>
                </div>
                <Switch
                  checked={integration.connected}
                  onCheckedChange={() => handleToggleConnection(integration.id)}
                />
              </div>
              <CardDescription>{integration.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Label htmlFor={`${integration.id}-api-key`}>API Key</Label>
                <Input
                  id={`${integration.id}-api-key`}
                  value={integration.apiKey}
                  onChange={(e) => handleUpdateApiKey(integration.id, e.target.value)}
                  type="password"
                  disabled={!integration.connected}
                  placeholder="Enter API key"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="w-full" disabled={!integration.connected}>
                Configure
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Separator />

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Webhook Settings</h3>
        <p className="text-sm text-muted-foreground">Configure webhooks to receive events from the platform</p>

        <div className="space-y-2">
          <Label htmlFor="webhook-url">Webhook URL</Label>
          <Input id="webhook-url" placeholder="https://your-service.com/webhook" />
          <p className="text-xs text-muted-foreground">The URL that will receive webhook events from the platform.</p>
        </div>

        <div className="space-y-2">
          <Label>Events to Send</Label>
          <div className="grid gap-2">
            <div className="flex items-center space-x-2">
              <Switch id="session-created" />
              <Label htmlFor="session-created">Session Created</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="session-updated" />
              <Label htmlFor="session-updated">Session Updated</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="session-canceled" />
              <Label htmlFor="session-canceled">Session Canceled</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="user-registered" />
              <Label htmlFor="user-registered">User Registered</Label>
            </div>
          </div>
        </div>

        <Button>Save Webhook Settings</Button>
      </div>
    </div>
  )
}

