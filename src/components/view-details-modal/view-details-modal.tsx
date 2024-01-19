import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, SIZE as ModalSize } from 'baseui/modal';
import { Button, SIZE, SHAPE } from 'baseui/button';
import { Provider } from '../providers-list/providers-list';

interface ModalProps {
    entity: Provider
}

export const ViewDetailsModal: React.FC<ModalProps> = ({ entity }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const closeModal = () => setIsModalOpen(false);
    return (
        <div className='flex items-center justify-center'>
            <Button size={SIZE.compact} shape={SHAPE.pill} onClick={() => setIsModalOpen(true)}>
                Details
            </Button>
            <Modal isOpen={isModalOpen} onClose={closeModal} size={SIZE.default}>
                <ModalHeader>
                    <h2 className="font-bold">{'Provider Details'}</h2>
                </ModalHeader>
                <ModalBody>
                    <div className='flex flex-col gap-4 text-lg'>
                        <p className='strong'>Name: {entity?.name}</p>
                        <p>Email: {entity?.email}</p>
                    </div>
                    {/* Add more details as needed */}
                </ModalBody>
            </Modal>
        </div>
    );
};

export default ViewDetailsModal;