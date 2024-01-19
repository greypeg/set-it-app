import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, SIZE as MODALSIZE } from 'baseui/modal';
import { Button, SIZE, SHAPE } from 'baseui/button';
import { Input } from 'baseui/input';
import { api } from '~/utils/api';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { FormControl } from 'baseui/form-control';
import { service } from '../services-list/services-list';

interface UpdateServiceInputs {
    name: string;
    cost: string;
    time_required: string
    id: number;
}
interface ModalInterface {
    service: service;
    isOpen: boolean;
    onClose: () => void
}

export const UpdateServiceModal: React.FC<ModalInterface> = ({ service, isOpen, onClose }) => {
    const { id, cost, time_required, name } = service
    const { handleSubmit, control } = useForm<UpdateServiceInputs>({
        defaultValues: {
            name: name, cost: cost.toString(), time_required: time_required.toString()
        },
    })

    const trpc = api.useContext();

    const updateServiceMutation = api.service.update.useMutation({
        onSettled: async () => {
            await trpc.business.getBusiness.invalidate();
        }
    });

    const onSubmit: SubmitHandler<UpdateServiceInputs> = (data: UpdateServiceInputs) => {
        try {
            updateServiceMutation.mutate({
                name: data.name,
                time_required: parseInt(data.time_required),
                cost: parseInt(data.cost),
                id: id
            });

            console.log('Form submitted successfully!');
            onClose();
        } catch (error) {
            // Handle any error that occurred during the mutation
            console.error('Error creating business:', error);
        }

    };

    return (
        <div className='flex items-center justify-center'>
            <Modal isOpen={isOpen} onClose={onClose} size={MODALSIZE.default}>
                <ModalHeader>Edit Service Form</ModalHeader>
                <ModalBody>
                    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
                        <Controller
                            name="name"
                            control={control}
                            rules={{ required: true, }}
                            render={({ field }) => (
                                <FormControl
                                    label={() => "Service Name"}>
                                    <Input {...field} />
                                </FormControl>

                            )}
                        />
                        <Controller
                            name="cost"
                            control={control}
                            rules={{ required: true, }}
                            render={({ field, }) => (
                                <FormControl
                                    label={() => "Cost"}>
                                    <Input type="number" {...field} />
                                </FormControl>
                            )}
                        />
                        <Controller
                            name="time_required"
                            control={control}
                            rules={{ required: true }}
                            render={({ field, }) => (
                                <FormControl
                                    label={() => "Time Required"}>
                                    <Input type="number" {...field} />
                                </FormControl>
                            )}
                        />
                        <Button type="submit">Submit</Button>
                    </form>
                </ModalBody>
            </Modal >
        </div>
    );
};