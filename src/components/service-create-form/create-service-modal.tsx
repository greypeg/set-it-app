import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, SIZE } from 'baseui/modal';
import { Button } from 'baseui/button';
import { Input } from 'baseui/input';
import { api } from '~/utils/api';

export const CreateServiceModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { data: business } = api.business.getBusiness.useQuery();
    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const submitForm = async () => {
        // Add your logic to submit the form data
        // You can gather data from all steps and perform the submission
        try {
            await createServiceMutation.mutate({
                name: 'service',
                cost: 5,
                time_required: 5,
                businessId: business?.id ?? 1
            });

            console.log('Form submitted successfully!');
            closeModal();
        } catch (error) {
            // Handle any error that occurred during the mutation
            console.error('Error creating business:', error);
        }
    };


    const createServiceMutation = api.service.create.useMutation({
    });

    return (
        <>
            <Button onClick={openModal}>Create Service</Button>
            <Modal isOpen={isOpen} onClose={closeModal} size={SIZE.default}>
                <ModalHeader>Create Business Form</ModalHeader>
                <ModalBody>
                    <form className="flex flex-col gap-8">
                        <Input placeholder="Service Name" />
                        <Input placeholder="Service Cost" />
                        <Input placeholder="Time required" />
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={submitForm}>Submit</Button>
                </ModalFooter>
            </Modal>
        </>
    );
};