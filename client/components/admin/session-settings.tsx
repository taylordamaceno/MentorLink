"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const sessionSettingsSchema = z.object({
  defaultDuration: z.string(),
  minAdvanceNotice: z.string(),
  maxSessionsPerDay: z.string(),
  allowRescheduling: z.boolean(),
  rescheduleTimeLimit: z.string(),
  allowCancellation: z.boolean(),
  cancellationTimeLimit: z.string(),
  sendReminders: z.boolean(),
  reminderTiming: z.string(),
})

type SessionSettingsValues = z.infer<typeof sessionSettingsSchema>

// This can come from your database or API
const defaultValues: Partial<SessionSettingsValues> = {
  defaultDuration: "45",
  minAdvanceNotice: "24",
  maxSessionsPerDay: "5",
  allowRescheduling: true,
  rescheduleTimeLimit: "12",
  allowCancellation: true,
  cancellationTimeLimit: "24",
  sendReminders: true,
  reminderTiming: "both",
}

export function SessionSettings() {
  const form = useForm<SessionSettingsValues>({
    resolver: zodResolver(sessionSettingsSchema),
    defaultValues,
    mode: "onChange",
  })

  function onSubmit(data: SessionSettingsValues) {
    // In a real app, you would update the settings here
    console.log(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Session Defaults</h3>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="defaultDuration"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Default Session Duration (minutes)</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="15">15 minutes</SelectItem>
                      <SelectItem value="30">30 minutes</SelectItem>
                      <SelectItem value="45">45 minutes</SelectItem>
                      <SelectItem value="60">60 minutes</SelectItem>
                      <SelectItem value="90">90 minutes</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>Default duration for new sessions.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="minAdvanceNotice"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Minimum Advance Notice (hours)</FormLabel>
                  <FormControl>
                    <Input {...field} type="number" min="1" />
                  </FormControl>
                  <FormDescription>Minimum hours before a session can be scheduled.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="maxSessionsPerDay"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Maximum Sessions Per Day</FormLabel>
                  <FormControl>
                    <Input {...field} type="number" min="1" />
                  </FormControl>
                  <FormDescription>Maximum number of sessions a mentor can have per day.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <Separator />

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Rescheduling & Cancellation</h3>

          <FormField
            control={form.control}
            name="allowRescheduling"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <FormLabel className="text-base">Allow Rescheduling</FormLabel>
                  <FormDescription>Allow users to reschedule sessions.</FormDescription>
                </div>
                <FormControl>
                  <Switch checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="rescheduleTimeLimit"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Reschedule Time Limit (hours)</FormLabel>
                <FormControl>
                  <Input {...field} type="number" min="1" />
                </FormControl>
                <FormDescription>Minimum hours before a session that rescheduling is allowed.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="allowCancellation"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <FormLabel className="text-base">Allow Cancellation</FormLabel>
                  <FormDescription>Allow users to cancel sessions.</FormDescription>
                </div>
                <FormControl>
                  <Switch checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="cancellationTimeLimit"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cancellation Time Limit (hours)</FormLabel>
                <FormControl>
                  <Input {...field} type="number" min="1" />
                </FormControl>
                <FormDescription>Minimum hours before a session that cancellation is allowed.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Separator />

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Reminders</h3>

          <FormField
            control={form.control}
            name="sendReminders"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <FormLabel className="text-base">Send Session Reminders</FormLabel>
                  <FormDescription>Send email reminders for upcoming sessions.</FormDescription>
                </div>
                <FormControl>
                  <Switch checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="reminderTiming"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Reminder Timing</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select timing" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="1hour">1 hour before</SelectItem>
                    <SelectItem value="3hours">3 hours before</SelectItem>
                    <SelectItem value="24hours">24 hours before</SelectItem>
                    <SelectItem value="both">Both 24 hours and 1 hour before</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>When to send session reminders.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit">Save Settings</Button>
      </form>
    </Form>
  )
}

