import React from "react";
import { Button } from "../button";
import { ArrowUpRightIcon, FolderIcon } from "lucide-react";

import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

function MyProject() {
  return (
    <div className="mx-32 mt-20">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-2xl">My Projects</h2>
        <Button> + Create a new project </Button>
      </div>
      <div>
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <FolderIcon />
            </EmptyMedia>
            <EmptyTitle>No Projects Yet</EmptyTitle>
            <EmptyDescription>
              You haven&apos;t created any projects yet. Get started by creating
              your first project.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <div className="flex gap-2">
              <Button>Create Project</Button>
              {/* <Button variant="outline">Import Project</Button> */}
            </div>
          </EmptyContent>
          <Button
            variant="link"
            asChild
            className="text-muted-foreground"
            size="sm"
          >
            <a href="#">
              Learn More <ArrowUpRightIcon />
            </a>
          </Button>
        </Empty>
      </div>
    </div>
  );
}

export default MyProject;
