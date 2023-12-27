import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, SIZE } from 'baseui/modal';
import { Button } from 'baseui/button';
import { Input } from 'baseui/input';
import { api } from '~/utils/api';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { FormControl } from 'baseui/form-control';

interface CreateServiceInputs {
    name: string;
    cost: number;
    time_required: number;
}
export const CreateServiceModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { data: business } = api.business.getBusiness.useQuery();
    const { handleSubmit, control } = useForm<CreateServiceInputs>({
        defaultValues: {
            name: "", cost: 0, time_required: 0
        },
    })
    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };


    const onSubmit: SubmitHandler<CreateServiceInputs> = (data: CreateServiceInputs) => {
        try {
            createServiceMutation.mutate({
                ...data,
                businessId: business?.id ?? 1
            });

            console.log('Form submitted successfully!');
            closeModal();
        } catch (error) {
            // Handle any error that occurred during the mutation
            console.error('Error creating business:', error);
        }

    }

    const createServiceMutation = api.service.create.useMutation({
    });

    return (
        <>
            <Button onClick={openModal}>Create Service</Button>
            <Modal isOpen={isOpen} onClose={closeModal} size={SIZE.default}>
                <ModalHeader>Create Business Form</ModalHeader>
                <ModalBody>
                    <form className="flex flex-col gap-8" onSubmit={handleSubmit(onSubmit)}>
                        <Controller
                            name="name"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => (
                                <FormControl
                                    label={() => "Name"}>
                                    <Input {...field} />
                                </FormControl>
                            )}
                        />
                         <Controller
                            name="cost"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => (
                                <FormControl
                                    label={() => "Cost"}>
                                    <Input {...field} />
                                </FormControl>
                            )}
                        />
                         <Controller
                            name="time_required"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => (
                                <FormControl
                                    label={() => "Time Required"}>
                                    <Input {...field} />
                                </FormControl>
                            )}
                        />
                        <Button type='submit'>Submit</Button>
                    </form>
                </ModalBody>
            </Modal>
        </>
    );
};