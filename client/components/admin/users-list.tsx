"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MoreHorizontal, Search } from "lucide-react"

// Mock data for users
const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "Mentor",
    status: "active",
    sessions: 24,
    avatar: "/placeholder.svg?height=40&width=40",
    expertise: ["Web Development", "Cloud Architecture"],
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "Mentor",
    status: "active",
    sessions: 18,
    avatar: "/placeholder.svg?height=40&width=40",
    expertise: ["UI/UX Design", "Product Management"],
  },
  {
    id: 3,
    name: "Alex Johnson",
    email: "alex@example.com",
    role: "Mentee",
    status: "active",
    sessions: 5,
    avatar: "/placeholder.svg?height=40&width=40",
    expertise: [],
  },
  {
    id: 4,
    name: "Maria Garcia",
    email: "maria@example.com",
    role: "Mentee",
    status: "active",
    sessions: 3,
    avatar: "/placeholder.svg?height=40&width=40",
    expertise: [],
  },
  {
    id: 5,
    name: "Carlos Rodriguez",
    email: "carlos@example.com",
    role: "Mentee",
    status: "inactive",
    sessions: 0,
    avatar: "/placeholder.svg?height=40&width=40",
    expertise: [],
  },
  {
    id: 6,
    name: "Emma Wilson",
    email: "emma@example.com",
    role: "Mentee",
    status: "active",
    sessions: 7,
    avatar: "/placeholder.svg?height=40&width=40",
    expertise: [],
  },
  {
    id: 7,
    name: "David Kim",
    email: "david@example.com",
    role: "Mentor",
    status: "inactive",
    sessions: 12,
    avatar: "/placeholder.svg?height=40&width=40",
    expertise: ["Data Science", "Machine Learning"],
  },
]

export function UsersList() {
  const [searchTerm, setSearchTerm] = useState("")
  const [roleFilter, setRoleFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")

  // Filter users based on search term and filters
  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesRole = roleFilter === "all" || user.role.toLowerCase() === roleFilter.toLowerCase()
    const matchesStatus = statusFilter === "all" || user.status === statusFilter

    return matchesSearch && matchesRole && matchesStatus
  })

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="flex items-center relative flex-1">
          <Search className="absolute left-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search users..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <Select value={roleFilter} onValueChange={setRoleFilter}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Filter by role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Roles</SelectItem>
              <SelectItem value="mentor">Mentors</SelectItem>
              <SelectItem value="mentee">Mentees</SelectItem>
            </SelectContent>
          </Select>

          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="rounded-md border">
        <div className="relative w-full overflow-auto">
          <table className="w-full caption-bottom text-sm">
            <thead>
              <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">User</th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Role</th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Status</th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Sessions</th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Expertise</th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr
                  key={user.id}
                  className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                >
                  <td className="p-4 align-middle">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{user.name}</div>
                        <div className="text-xs text-muted-foreground">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 align-middle">
                    <Badge variant={user.role === "Mentor" ? "default" : "secondary"}>{user.role}</Badge>
                  </td>
                  <td className="p-4 align-middle">
                    <Badge variant={user.status === "active" ? "outline" : "destructive"}>
                      {user.status === "active" ? "Active" : "Inactive"}
                    </Badge>
                  </td>
                  <td className="p-4 align-middle">{user.sessions}</td>
                  <td className="p-4 align-middle">
                    <div className="flex flex-wrap gap-1">
                      {user.expertise.length > 0 ? (
                        user.expertise.map((exp) => (
                          <Badge key={exp} variant="outline" className="text-xs">
                            {exp}
                          </Badge>
                        ))
                      ) : (
                        <span className="text-xs text-muted-foreground">N/A</span>
                      )}
                    </div>
                  </td>
                  <td className="p-4 align-middle">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Actions</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View Profile</DropdownMenuItem>
                        <DropdownMenuItem>Edit User</DropdownMenuItem>
                        <DropdownMenuItem>View Sessions</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">
                          {user.status === "active" ? "Deactivate User" : "Activate User"}
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
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

