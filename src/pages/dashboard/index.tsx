import { Spinner } from "baseui/spinner";
import { NextPage } from "next";
import { CreateBusinessModal } from "~/components/business-create-form";
import { ServiceList } from "~/components/services-list";
import { api } from "~/utils/api";
const Dashboard: NextPage = () => {
    const { data: user } = api.user.getUser.useQuery();
    const { data: business, isLoading: isBusinessLoading } = api.business.getBusiness.useQuery();

    const trpc = api.useContext();

    const deleteMutation = api.service.delete.useMutation({
        onSettled: async () => {
            await trpc.business.getBusiness.invalidate();
        }
    })

    const onDelete = (id: number) => {
        deleteMutation.mutate({ id })
    }

    if (isBusinessLoading)
        return <div className="h-screen flex items-center justify-center"><Spinner /></div>;


    return (
        <div className="pt-8">
            <div className="flex flex-col items-center justify-center gap-4">
                {!user?.hasBusiness ? <CreateBusinessModal /> : <h1 className="text-5xl font-extrabold tracking-tight">
                    <span className="text-[#5856B9]">{user.business?.name}</span>
                </h1>
                }
                <br></br>
                <ServiceList services={business?.services} onDelete={onDelete} />
                <br></br>
            </div>
        </div>
    );
};

export default Dashboard;