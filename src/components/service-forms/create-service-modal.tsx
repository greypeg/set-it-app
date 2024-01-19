import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, SIZE } from 'baseui/modal';
import { Button } from 'baseui/button';
import { Input } from 'baseui/input';
import { api } from '~/utils/api';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { FormControl } from 'baseui/form-control';

interface CreateServiceInputs {
    name: string;
    cost: string;
    time_required: string
}
export const CreateServiceModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { handleSubmit, control } = useForm<CreateServiceInputs>({
        defaultValues: {
            name: "", cost: '', time_required: ''
        },
    })
    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const trpc = api.useContext();

    const createServiceMutation = api.service.create.useMutation({
        onSettled: async () => {
            await trpc.business.getBusiness.invalidate();
        }
    });

    const onSubmit: SubmitHandler<CreateServiceInputs> = (data: CreateServiceInputs) => {
        try {
            createServiceMutation.mutate({
                name: data.name,
                time_required: parseInt(data.time_required),
                cost: parseInt(data.cost),
            });

            console.log('Form submitted successfully!');
            closeModal();
        } catch (error) {
            // Handle any error that occurred during the mutation
            console.error('Error creating business:', error);
        }

    };


    return (
        <>
            <Button onClick={openModal}>Create Service</Button>
            <Modal isOpen={isOpen} onClose={closeModal} size={SIZE.default}>
                <ModalHeader>Create Service Form</ModalHeader>
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
        </>
    );
};