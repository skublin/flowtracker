import { redirect } from "next/navigation";

import { getCurrent } from "@/features/auth/queries";

interface ProjectIdPageProps {
    params: Promise<{ projectId: string }>;
};

const ProjectIdPage = async (props: ProjectIdPageProps) => {
    const params = await props.params;
    const user = await getCurrent();

    if (!user) redirect("/sign-in");

    return (
        <div>
            ProjectId: {params.projectId}
        </div>
    );
};

export default ProjectIdPage;
