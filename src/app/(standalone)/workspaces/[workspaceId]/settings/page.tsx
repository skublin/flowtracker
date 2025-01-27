import { redirect } from "next/navigation";

import { getCurrent } from "@/features/auth/queries";
import { getWorkspace } from "@/features/workspaces/actions";
import { EditWorkspaceForm } from "@/features/workspaces/components/edit-workspace-form";

interface WorksapceIdSettingsPageProps {
    params: Promise<{
        workspaceId: string;
    }>;
};

const WorkspaceIdSettingsPage = async (props: WorksapceIdSettingsPageProps) => {
    const params = await props.params;
    const user = await getCurrent();

    if (!user) redirect("/sign-in");

    const initialValues = await getWorkspace({ workspaceId: params.workspaceId });

    if (!initialValues) {
        redirect(`/workspaces/${params.workspaceId}`)
    }

    return (
        <div className="w-full lg:max-w-xl">
            <EditWorkspaceForm initialValues={initialValues} />
        </div>
    );
};

export default WorkspaceIdSettingsPage;
