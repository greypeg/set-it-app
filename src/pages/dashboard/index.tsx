import { NextPage } from "next";
import { CreateBusinessModal } from "~/components/business-create-form";
import { CreateServiceModal } from "~/components/service-create-form";
import { api } from "~/utils/api";
const Dashboard: NextPage = () => {
    const { data: user } = api.user.getUser.useQuery();
    const { data: business } = api.business.getBusiness.useQuery();
    return (
        <div className="pt-12">
            <div className="flex flex-col items-center justify-center gap-8">
                {!user?.hasBusiness ? <CreateBusinessModal /> : "Business Name: " + user.business?.name}
                <br></br>
                <h1 className="text-5xl font-extrabold tracking-tight">Services</h1>
                <br></br>
                {business?.services.length === 0 ? <CreateServiceModal /> : "Name: " + business?.services[0]?.name}
                <br></br>
                {business?.services.length === 0 ? null : "Cost: " + business?.services[0]?.cost + "$"}
                <br></br>
                {business?.services.length === 0 ? null : "required: " + business?.services[0]?.time_required + 'min'}
                <br></br>
                <CreateServiceModal />
            </div>
        </div>
    );
};

export default Dashboard;