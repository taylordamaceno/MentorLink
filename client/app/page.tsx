import { redirect } from "next/navigation"

export default function Home() {
  // In a real application, you would check authentication here
  // For demo purposes, we'll redirect to the dashboard
  redirect("/dashboard")
}

