import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

const revenue: number = 100000
const sales: number = 5000


const Dashboard = () => {
    return (
        <>
            <main className='flex w-full flex-col max-w-7xl mx-auto py-2 lg:py-5'>
                <div className="w-full grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-2">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="flex items-center gap-6">
                                Total Revenue
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">&#8377; {revenue}</div>
                            <div className="text-xs text-muted-foreground">Based on 100 charges</div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="flex items-center gap-6">
                                Total Sales
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{sales}</div>
                            <div className="text-xs text-muted-foreground">Total sales</div>
                        </CardContent>
                    </Card>

                </div>
            </main>
        </>
    )
}

export default Dashboard