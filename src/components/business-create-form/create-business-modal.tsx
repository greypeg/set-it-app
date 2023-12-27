import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, SIZE } from 'baseui/modal';
import { Button } from 'baseui/button';
import { Input } from 'baseui/input';
import { api } from '~/utils/api';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { FormControl } from 'baseui/form-control';

interface CreateBusinessInputs {
    name: string;
}
export const CreateBusinessModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const { handleSubmit, control, formState } = useForm<CreateBusinessInputs>({
        defaultValues: {
            name: "",
        },
    })

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const createBusinessMutation = api.business.create.useMutation({
    });

    const onSubmit: SubmitHandler<CreateBusinessInputs> = async (data: CreateBusinessInputs) => {
        try {
            // Wait for the mutation to complete
            await createBusinessMutation.mutateAsync(data.name);

            // After the mutation is successful, close the modal
            closeModal();
        } catch (error) {
            // Handle any error that occurred during the mutation
            console.error('Error creating business:', error);
        }

    }

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formState.isSubmitting) {
            handleSubmit(onSubmit)(e);
        }
    };

    return (
        <>
            <Button onClick={openModal}>Create Business</Button>
            <Modal isOpen={isOpen} onClose={closeModal} size={SIZE.default}>
                <ModalHeader>Create Business Form</ModalHeader>
                <ModalBody>
                    <form className="flex flex-col" onSubmit={handleFormSubmit}>
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
                        <Button type="submit" overrides={{
                            BaseButton: {
                                style: () => ({
                                    background: "linear-gradient(55deg, rgba(88,86,185,1) 0%, rgba(148,203,196,1) 100%);"
                                })
                            }
                        }}>
                            Submit
                        </Button>
                    </form>
                </ModalBody>
                <ModalFooter>

                </ModalFooter>
            </Modal>
        </>
    );
};