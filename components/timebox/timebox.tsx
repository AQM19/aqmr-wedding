import { fleurDeLeah } from '@/lib'
import React from 'react'

interface Props {
    label: string
    value: number
}

const TimeBox = ({ label, value }: Props) => (
    <div className={`flex flex-col items-center ${fleurDeLeah.className}`}>
        <span className="text-3xl font-bold">{value}</span>
        <span className="text-sm">{label}</span>
    </div>
)

export default TimeBox
