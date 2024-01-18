import React from 'react';
import { CreateServiceModal } from '../service-create-form';
import { Button } from 'baseui/button';
import { Accordion, Panel } from "baseui/accordion";

interface services {
    id: number;
    name: string;
    cost: number;
    time_required: number;
    businessId: number;
}

interface ServiceList {
    services: services[] | undefined;
    onDelete: (id: number) => void
}

const currency = '$'

export const ServiceList: React.FC<ServiceList> = ({ services, onDelete }) => {
    return (
        <div className='flex flex-col items-center gap-2 md:px-12'>
            <h3 className="text-2xl font-bold mb-4">Services</h3>
            <Accordion accordion>
                {services?.map((service: services, index) => (
                    <Panel title={service.name} key={index}>
                        <div className='flex flex-col gap-4'>
                            <div className='flex flex-col gap-4 items-center'>
                                <p>{'Duration - ' + service.time_required + 'mins '}</p>
                                <p>{'Cost - ' + service.cost + currency}</p>
                            </div>
                            <div className='px-10 flex sm:flex-row gap-2 flex-col justify-center'>
                                <Button shape='pill' size='compact'>Details</Button>
                                <Button shape='pill' size='compact'>Edit</Button>
                                <Button shape='pill' size='compact' onClick={() => onDelete(service.id)} overrides={{
                                    BaseButton: {
                                        style: () => ({
                                            background: "red"
                                        })
                                    }
                                }}>Delete</Button>
                            </div>
                        </div>

                    </Panel>
                ))}

            </Accordion>
            <br></br>
            <CreateServiceModal />
        </div >
    );
};