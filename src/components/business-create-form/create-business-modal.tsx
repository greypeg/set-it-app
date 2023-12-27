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

    const { handleSubmit, control } = useForm<CreateBusinessInputs>({
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
          // Trigger the mutation without awaiting
          const mutationPromise = createBusinessMutation.mutateAsync(data.name);
    
          // Close the modal immediately
          closeModal();
    
          // Wait for the mutation to complete
          await mutationPromise;
        } catch (error) {
          // Handle any error that occurred during the mutation
          console.error('Error creating business:', error);
        }
      };

    return (
        <>
            <Button onClick={openModal}>Create Business</Button>
            <Modal isOpen={isOpen} onClose={closeModal} size={SIZE.default}>
                <ModalHeader>Create Business Form</ModalHeader>
                <ModalBody>
                    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
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
                        <button type="submit">Submit</button>
                    </form>
                </ModalBody>
                <ModalFooter>

                </ModalFooter>
            </Modal>
        </>
    );
};