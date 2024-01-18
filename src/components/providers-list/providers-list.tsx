import React from 'react';
import { Avatar } from 'baseui/avatar';
import { ListItem, ListItemLabel } from 'baseui/list';
import { Button, SHAPE, SIZE } from 'baseui/button';

import { CreateStaffModal } from '../staff-create-form';

interface ProvidersList {
    providers: Provider[] | undefined
    onDelete: (id: number) => void
}

interface Provider {
    id: number;
    name: string;
    email: string;
    businessId: number;
}

export const ProviderList: React.FC<ProvidersList> = ({ providers, onDelete }) => {
    return (
        <div className='grid items-center gap-2'>
            <h3 className="text-2xl font-bold mb-4 text-center">Providers</h3>
            <ul>
                {providers?.map((provider: Provider) => (
                    <ListItem key={provider.id} endEnhancer={() => (
                        <Button size={SIZE.compact} shape={SHAPE.pill} overrides={{
                            BaseButton: {
                                style: () => ({
                                    background: "red"
                                })
                            }
                        }} onClick={() => onDelete(provider.id)}>
                            Delete
                        </Button>
                    )}>
                        <Avatar name={provider.name} size="scale800" src={`https://api.dicebear.com/7.x/initials/svg?seed=${provider.name}`} />
                        <ListItemLabel>
                            {provider.name}
                        </ListItemLabel>
                        <ListItemLabel>
                            {provider.email}
                        </ListItemLabel>
                    </ListItem>
                ))}
            </ul>
            <br></br>
            <CreateStaffModal />
        </div>
    );
};