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

export const ServiceList = ({ services, onDelete }: ServiceList) => {
    return (
        <div className='flex flex-col items-center md:w-1/4 w-3/4 gap-2'>
            <h3 className="text-2xl font-bold mb-4">Services</h3>

            <Accordion accordion>
                {services?.map((service: services, index) => (
                    <Panel title={service.name} key={index}>
                        <div className='flex flex-col gap-4'>
                            <div className='flex flex-col gap-4 items-center'>
                                <p>{'Duration - ' + service.time_required + 'mins '}</p>
                                <p>{'Cost - ' + service.cost + currency}</p>
                            </div>
                            <div className='px-16 flex flex-col gap-2'>
                                <Button shape='pill' size='compact'>Details</Button>
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
            <CreateServiceModal />
        </div >
    );
};