import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, SIZE as MODALSIZE } from 'baseui/modal';
import { Button, SHAPE, SIZE } from 'baseui/button';
import { Input } from 'baseui/input';
import { api } from '~/utils/api';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { FormControl } from 'baseui/form-control';
import { Provider } from '../providers-list/providers-list';

interface UpdateStaffInputs {
    name: string;
    email: string
    id: number;
}

interface ModalProps {
    provider: Provider;
}

export const UpdateStaffModal: React.FC<ModalProps> = ({ provider }) => {
    const { id, name, email } = provider;
    const [isOpen, setIsOpen] = useState(false);
    const { handleSubmit, control } = useForm<UpdateStaffInputs>({
        defaultValues: {
            name: name, email: email, id: id
        },
    })
    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const trpc = api.useContext();

    const updateStaffMutation = api.staff.update.useMutation({
        onSettled: async () => {
            await trpc.business.getBusiness.invalidate();
        }
    });

    const onSubmit: SubmitHandler<UpdateStaffInputs> = (data: UpdateStaffInputs) => {
        try {
            updateStaffMutation.mutate({
                id: id,
                name: data.name,
                email: data.email,
            });
            closeModal();
        } catch (error) {
            // Handle any error that occurred during the mutation
            console.error('Error staff business:', error);
        }
    };


    return (
        <div className='flex items-center justify-center'>
            <Button size={SIZE.compact} shape={SHAPE.pill} onClick={openModal}>Edit</Button>
            <Modal isOpen={isOpen} onClose={closeModal} size={MODALSIZE.default}>
                <ModalHeader>Edit Provider Form</ModalHeader>
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