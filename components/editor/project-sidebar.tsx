"use client"

import { Plus, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

interface ProjectSidebarProps {
  isOpen: boolean
  onClose: () => void
  className?: string
}

export function ProjectSidebar({
  isOpen,
  onClose,
  className,
}: ProjectSidebarProps) {
  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background/80 backdrop-blur-sm transition-opacity duration-300",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 bottom-0 z-50 w-72 flex flex-col border-r border-border bg-background transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full",
          className
        )}
      >
        {/* Header */}
        <div className="flex h-14 items-center justify-between border-b border-border px-4">
          <h2 className="text-lg font-semibold">Projects</h2>
          <Button variant="ghost" size="icon" onClick={onClose} aria-label="Close projects">
            <X className="size-4" />
          </Button>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="my-projects" className="flex-1 flex flex-col">
          <TabsList className="mx-4 mt-2">
            <TabsTrigger value="my-projects">My Projects</TabsTrigger>
            <TabsTrigger value="shared">Shared</TabsTrigger>
          </TabsList>

          <TabsContent value="my-projects" className="flex-1 p-4">
            <div className="flex h-full items-center justify-center text-muted-foreground text-sm">
              No projects yet
            </div>
          </TabsContent>

          <TabsContent value="shared" className="flex-1 p-4">
            <div className="flex h-full items-center justify-center text-muted-foreground text-sm">
              No shared projects
            </div>
          </TabsContent>
        </Tabs>

        {/* New Project Button */}
        <div className="border-t border-border p-4">
          <Button className="w-full" variant="default">
            <Plus className="size-4 mr-2" />
            New Project
          </Button>
        </div>
      </aside>
    </>
  )
}