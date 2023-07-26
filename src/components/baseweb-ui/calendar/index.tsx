"use client";
import React, { useState } from 'react';
import { StatefulCalendar } from 'baseui/datepicker';

export const BCalendar = () => {
    const [value, onChange] = useState(new Date());

    return (
        <StatefulCalendar />
    );
}