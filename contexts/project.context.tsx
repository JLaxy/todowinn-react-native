import { Project } from "@/types/project";
import { Status } from "@/types/status";
import { createContext, useContext, useState } from "react";

interface ProjectContextType {
  projects: Project[];
  setProjects: (p: Project[]) => void;
  selectedProject: Project | undefined;
  setSelectedProject: (p: Project) => void;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const ProjectProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [projects, setProjects] = useState<Project[]>([
    {
      project_id: 1,
      name: "Website Redesign",
      description: "redesign",
      status: Status.IN_PROGRESS,
    },
    {
      project_id: 2,
      name: "Mobile App",
      description: "react native",
      status: Status.IN_PROGRESS,
    },
    {
      project_id: 3,
      name: "Inventory System",
      description: "system",
      status: Status.IN_PROGRESS,
    },
  ]);
  const [selectedProject, setSelectedProject] = useState<Project>();

  return (
    <ProjectContext.Provider
      value={{ projects, setProjects, selectedProject, setSelectedProject }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjectContext = () => {
  const context = useContext(ProjectContext);

  if (!context)
    throw new Error(
      "ProjectContext must be used within a ProjectContextProvider!"
    );

  return context;
};
