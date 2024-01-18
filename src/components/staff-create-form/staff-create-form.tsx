import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, SIZE } from 'baseui/modal';
import { Button } from 'baseui/button';
import { Input } from 'baseui/input';
import { api } from '~/utils/api';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { FormControl } from 'baseui/form-control';

interface CreateStaffInputs {
    name: string;
    email: string;
}
export const CreateStaffModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { handleSubmit, control } = useForm<CreateStaffInputs>({
        defaultValues: {
            name: '', email: ''
        },
    })
    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const trpc = api.useContext();

    const createServiceMutation = api.staff.create.useMutation({
        onSettled: async () => {
            await trpc.business.getBusiness.invalidate();
        }
    });

    const onSubmit: SubmitHandler<CreateStaffInputs> = (data: CreateStaffInputs) => {
        try {
            createServiceMutation.mutate({
                name: data.name,
                email: data.email,
            });

            console.log('Form submitted successfully!');
            closeModal();
        } catch (error) {
            // Handle any error that occurred during the mutation
            console.error('Error staff business:', error);
        }

    };


    return (
        <div className='grid items-center justify-center'>
            <div className='flex'>
                <Button onClick={openModal}>Add Staff</Button>
            </div>
            <Modal isOpen={isOpen} onClose={closeModal} size={SIZE.default}>
                <ModalHeader>Add Staff Form</ModalHeader>
                <ModalBody>
                    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
                        <Controller
                            name="name"
                            control={control}
                            rules={{ required: true, }}
                            render={({ field }) => (
                                <FormControl
                                    label={() => "Staff Name"}>
                                    <Input {...field} />
                                </FormControl>

                            )}
                        />
                        <Controller
                            name="email"
                            control={control}
                            rules={{ required: true, }}
                            render={({ field }) => (
                                <FormControl
                                    label={() => "Staff Email"}>
                                    <Input {...field} />
                                </FormControl>

                            )}
                        />
                        <Button type="submit">Submit</Button>
                    </form>
                </ModalBody>
            </Modal>
        </div>
    );
};