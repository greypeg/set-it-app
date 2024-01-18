import { Spinner } from "baseui/spinner";
import { GetServerSidePropsContext, NextPage } from "next";
import { getSession } from "next-auth/react";
import { CreateBusinessModal } from "~/components/business-create-form";
import { ServiceList } from "~/components/services-list";
import { Tabs, Tab, FILL } from "baseui/tabs-motion";
import { api } from "~/utils/api";
import { useState } from "react";
import { ProviderList } from "~/components/providers-list";

const Dashboard: NextPage = () => {
    const { data: user } = api.user.getUser.useQuery();
    const { data: business, isLoading: isBusinessLoading, isError: isErrorBussiness, error } = api.business.getBusiness.useQuery();
    const [activeKey, setActiveKey] = useState<React.Key>(0);
    const trpc = api.useContext();

    const deleteServiceMutation = api.service.delete.useMutation({
        onSettled: async () => {
            await trpc.business.getBusiness.invalidate();
        }
    })

    const deleteStaffMutation = api.staff.delete.useMutation({
        onSettled: async () => {
            await trpc.business.getBusiness.invalidate();
        }
    })

    const onDeleteService = (id: number) => {
        deleteServiceMutation.mutate({ id })
    }
    const onDeleteStaff = (id: number) => {
        deleteStaffMutation.mutate({ id })
    }

    if (isBusinessLoading)
        return <div className="h-screen flex items-center justify-center"><Spinner /></div>;

    if (isErrorBussiness)
        return <div className="h-screen flex items-center justify-center">Unable to fetch your data {error.message}</div>;

    return (
        <div className="pt-8 z-0">
            <div className="flex flex-col items-center justify-center gap-4">
                {!user?.hasBusiness ? <CreateBusinessModal /> : <h1 className="text-4xl font-extrabold tracking-tight">
                    <span className="text-[#5856B9]">{user.business?.name}</span>
                </h1>
                }
                {/* <ServiceList services={business?.services} onDelete={onDelete} /> */}
                <div className="md:w-3/5 w-full md:px-3 z-0">
                    <Tabs
                        activeKey={activeKey}
                        onChange={({ activeKey }) => setActiveKey(activeKey)}
                        fill={FILL.fixed}
                    >
                        <Tab title="Bookings" key="0">
                            Bookings
                        </Tab>

                        <Tab title="Services" key="1" >
                            <ServiceList services={business?.services} onDelete={onDeleteService} />
                        </Tab>

                        <Tab title="Providers" key="2">
                            <ProviderList providers={business?.staff} onDelete={onDeleteStaff} />
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};


export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    // Fetch the user's session on the server side
    const session = await getSession(context);

    // If the user is not authenticated, redirect to the login page
    if (!session || !session.user) {
        return {
            redirect: {
                destination: '/unathenticated',
                permanent: false,
            },
        };
    }

    // If the user is authenticated, continue with the original page rendering
    return {
        props: {},
    };
};

export default Dashboard;