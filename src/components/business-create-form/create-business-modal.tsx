import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, SIZE } from 'baseui/modal';
import { Button } from 'baseui/button';
import { Input } from 'baseui/input';

export const CreateBusinessModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);

    const openModal = () => {
        setIsOpen(true);
        setCurrentStep(1);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const submitForm = () => {
        // Add your logic to submit the form data
        // You can gather data from all steps and perform the submission
        console.log('Form submitted successfully!');
        closeModal();
    };

    return (
        <>
            <Button onClick={openModal}>Create Business</Button>
            <Modal isOpen={isOpen} onClose={closeModal} size={SIZE.default}>
                <ModalHeader>Create Business Form</ModalHeader>
                <ModalBody>
                    <form className="flex flex-col">
                        <Input placeholder="Business Name" />
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={submitForm}>Submit</Button>
                </ModalFooter>
            </Modal>
        </>
    );
};