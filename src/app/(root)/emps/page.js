import EmployeeCard from '@/components/EmployeeCard'
import { DUMMY_EMPLOYEES } from '@/util/db'
import React from 'react'

export default function EmployeeHome() {
    return (
        <main className="md:mx-50">
            <div className="text-center my-8">
                <h1 className="text-3xl font-bold">Employee Directory</h1>
                <p className="text-base-content/70 mt-2">
                    A simple employee directory using DaisyUI components.
                </p>
            </div>
            {
                DUMMY_EMPLOYEES.map((emp) => (
                    <EmployeeCard key={emp.id} data={emp} />
                ))
            }
        </main>
    )
}
