"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import { X } from "lucide-react"

// Initial expertise areas
const initialExpertise = [
  { id: 1, name: "Web Development", level: 90 },
  { id: 2, name: "Cloud Architecture", level: 85 },
  { id: 3, name: "DevOps", level: 75 },
  { id: 4, name: "UI/UX Design", level: 60 },
]

// Initial skills
const initialSkills = ["JavaScript", "React", "Node.js", "AWS", "Docker", "TypeScript", "GraphQL"]

export function ExpertiseForm() {
  const [expertise, setExpertise] = useState(initialExpertise)
  const [skills, setSkills] = useState(initialSkills)
  const [newExpertise, setNewExpertise] = useState("")
  const [newExpertiseLevel, setNewExpertiseLevel] = useState([50])
  const [newSkill, setNewSkill] = useState("")

  const handleAddExpertise = () => {
    if (newExpertise.trim() === "") return

    const newItem = {
      id: expertise.length + 1,
      name: newExpertise,
      level: newExpertiseLevel[0],
    }

    setExpertise([...expertise, newItem])
    setNewExpertise("")
    setNewExpertiseLevel([50])
  }

  const handleRemoveExpertise = (id: number) => {
    setExpertise(expertise.filter((item) => item.id !== id))
  }

  const handleAddSkill = () => {
    if (newSkill.trim() === "") return
    if (skills.includes(newSkill)) return

    setSkills([...skills, newSkill])
    setNewSkill("")
  }

  const handleRemoveSkill = (skill: string) => {
    setSkills(skills.filter((item) => item !== skill))
  }

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Areas of Expertise</h3>
        <p className="text-sm text-muted-foreground">Add your areas of expertise and rate your proficiency level</p>

        <div className="space-y-4">
          {expertise.map((item) => (
            <div key={item.id} className="space-y-2">
              <div className="flex items-center justify-between">
                <Label>{item.name}</Label>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">{item.level}%</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6"
                    onClick={() => handleRemoveExpertise(item.id)}
                  >
                    <X className="h-4 w-4" />
                    <span className="sr-only">Remove</span>
                  </Button>
                </div>
              </div>
              <Slider defaultValue={[item.level]} max={100} step={1} disabled />
            </div>
          ))}
        </div>

        <div className="space-y-2">
          <Label htmlFor="new-expertise">Add Expertise</Label>
          <div className="flex items-center gap-2">
            <Input
              id="new-expertise"
              value={newExpertise}
              onChange={(e) => setNewExpertise(e.target.value)}
              placeholder="e.g., Machine Learning"
            />
            <Button onClick={handleAddExpertise}>Add</Button>
          </div>
          <div className="pt-2">
            <Label htmlFor="expertise-level">Proficiency Level: {newExpertiseLevel[0]}%</Label>
            <Slider
              id="expertise-level"
              value={newExpertiseLevel}
              onValueChange={setNewExpertiseLevel}
              max={100}
              step={1}
              className="py-2"
            />
          </div>
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Skills</h3>
        <p className="text-sm text-muted-foreground">Add specific skills that you have expertise in</p>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary" className="flex items-center gap-1">
              {skill}
              <Button variant="ghost" size="icon" className="h-4 w-4 p-0 ml-1" onClick={() => handleRemoveSkill(skill)}>
                <X className="h-3 w-3" />
                <span className="sr-only">Remove</span>
              </Button>
            </Badge>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Input value={newSkill} onChange={(e) => setNewSkill(e.target.value)} placeholder="e.g., Python" />
          <Button onClick={handleAddSkill}>Add</Button>
        </div>
      </div>

      <Button className="w-full">Save Expertise</Button>
    </div>
  )
}

