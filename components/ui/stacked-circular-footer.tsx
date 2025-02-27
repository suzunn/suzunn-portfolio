import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

function StackedCircularFooter() {
  return (
    <footer id="footer" className="relative z-[30] bg-transparent py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <div className="mb-8 flex space-x-4">
            <Button variant="outline" size="icon" className="rounded-full border-primary/20 bg-black/30 backdrop-blur-md hover:bg-primary/20" asChild>
              <a href="https://github.com/suzunn" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full border-primary/20 bg-black/30 backdrop-blur-md hover:bg-primary/20" asChild>
              <a href="https://linkedin.com/in/suzunn" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full border-primary/20 bg-black/30 backdrop-blur-md hover:bg-primary/20" asChild>
              <a href="mailto:suzunn3@gmail.com">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
          </div>
          <div className="text-center">
            <p className="text-sm text-primary/60">
              © 2025 suzunn. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { StackedCircularFooter }
