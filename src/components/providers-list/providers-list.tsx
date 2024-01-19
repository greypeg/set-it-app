import React, { useState } from 'react';
import { Avatar } from 'baseui/avatar';
import { ListItem, ListItemLabel } from 'baseui/list';
import { Button, SHAPE, SIZE } from 'baseui/button';
import { StatefulPopover } from "baseui/popover";
import { CreateStaffModal } from '../staff-forms';
import Overflow from 'baseui/icon/overflow';
import { isMobile } from '~/hooks';
import { UpdateStaffModal } from '../staff-forms/staff-update-form';
import { ViewDetailsModal } from '../view-details-modal';

interface ProvidersList {
    providers: Provider[] | undefined
    onDelete: (id: number) => void
}

export interface Provider {
    id: number;
    name: string;
    email: string;
    businessId: number;
}


export const ProviderList: React.FC<ProvidersList> = ({ providers, onDelete }) => {
    return (
        <div className='grid items-center gap-2'>
            <h3 className="text-2xl font-bold mb-4 text-center">Providers</h3>
            <ul className='grid gap-4'>
                {providers?.map((provider: Provider) => (
                    <ListItem key={provider.id} overrides={{
                        Root: {
                            style: ({ $theme }) => ({
                                outline: `#d3d3d3 solid`,
                                borderRadius: '18px'
                            })
                        }
                    }} endEnhancer={() => (
                        <StatefulPopover
                            content={() => (
                                <div className='flex flex-col gap-2 p-4'>
                                    <ViewDetailsModal entity={provider} />
                                    <UpdateStaffModal provider={provider} />
                                    <Button size={SIZE.compact} shape={SHAPE.pill} overrides={{
                                        BaseButton: {
                                            style: () => ({
                                                background: "red"
                                            })
                                        }
                                    }} onClick={() => onDelete(provider.id)} >
                                        Delete
                                    </Button>
                                </div>
                            )}
                            placement='bottomRight'
                            returnFocus
                            autoFocus
                        >
                            <Overflow size={24} overrides={{
                                Svg: {
                                    style: ({ $theme }) => ({
                                        cursor: 'pointer'
                                    })
                                }
                            }} />
                        </StatefulPopover>
                    )
                    }>
                        <Avatar name={provider.name} size="scale950" src={`https://api.dicebear.com/7.x/initials/svg?seed=${provider.name}`} />
                        <ListItemLabel>
                            {provider.name}
                        </ListItemLabel>
                        {!isMobile() ? <ListItemLabel>
                            {provider.email}
                        </ListItemLabel> : null}
                    </ListItem >
                ))}
            </ul >
            <br></br>
            <CreateStaffModal />
        </div >
    );
};