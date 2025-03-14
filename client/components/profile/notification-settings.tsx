"use client"

import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export function NotificationSettings() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Email Notifications</h3>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="session-confirmation">Session Confirmations</Label>
              <p className="text-sm text-muted-foreground">Receive emails when a session is confirmed</p>
            </div>
            <Switch id="session-confirmation" defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="session-reminder">Session Reminders</Label>
              <p className="text-sm text-muted-foreground">Receive reminders before scheduled sessions</p>
            </div>
            <Switch id="session-reminder" defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="session-canceled">Session Cancellations</Label>
              <p className="text-sm text-muted-foreground">Receive notifications when a session is canceled</p>
            </div>
            <Switch id="session-canceled" defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="new-messages">New Messages</Label>
              <p className="text-sm text-muted-foreground">Receive notifications for new messages</p>
            </div>
            <Switch id="new-messages" defaultChecked />
          </div>
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Reminder Timing</h3>
        <p className="text-sm text-muted-foreground">When should we send you session reminders?</p>

        <RadioGroup defaultValue="24hours">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="1hour" id="r1" />
            <Label htmlFor="r1">1 hour before</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="3hours" id="r2" />
            <Label htmlFor="r2">3 hours before</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="24hours" id="r3" />
            <Label htmlFor="r3">24 hours before</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="both" id="r4" />
            <Label htmlFor="r4">Both 24 hours and 1 hour before</Label>
          </div>
        </RadioGroup>
      </div>

      <Separator />

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Platform Notifications</h3>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="browser-notifications">Browser Notifications</Label>
              <p className="text-sm text-muted-foreground">Receive notifications in your browser</p>
            </div>
            <Switch id="browser-notifications" defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="sound-notifications">Sound Notifications</Label>
              <p className="text-sm text-muted-foreground">Play a sound when you receive a notification</p>
            </div>
            <Switch id="sound-notifications" defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="desktop-notifications">Desktop Notifications</Label>
              <p className="text-sm text-muted-foreground">Receive notifications on your desktop</p>
            </div>
            <Switch id="desktop-notifications" defaultChecked />
          </div>
        </div>
      </div>

      <Button className="w-full">Save Notification Settings</Button>
    </div>
  )
}

