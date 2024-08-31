import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { confirmedOrder } from '../../../../dataset/confirm'


const negotiable = confirmedOrder
const page = () => {
    return (
        <div className='flex w-full flex-col max-w-7xl mx-auto py-2 lg:py-5'>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Order Id</TableHead>
                        <TableHead>Crop</TableHead>
                        <TableHead>Buyer</TableHead>
                        <TableHead>Quantity</TableHead>
                        <TableHead>Special Requirements</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead className="text-right"></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {negotiable.map((invoice) => (
                        <TableRow key={invoice.orderId}>
                            <TableCell className="font-medium">{invoice.orderId}</TableCell>
                            <TableCell>{invoice.item}</TableCell>
                            <TableCell>{invoice.buyerName}</TableCell>
                            <TableCell>{invoice.quantity}</TableCell>
                            <TableCell>{invoice.specialRequirements}</TableCell>
                            <TableCell>&#8377; {invoice.amount}</TableCell>
                            <TableCell className="text-right">
                                {/* <form action={
                async () => {
                  'use server'
                  const fun: { status: string } | undefined = await handleConfirm(invoice) as { status: string } | undefined;
                  if(fun && fun.status === 'success') {
                    stat = true
                  }
                  stat = false
                }
              }>
                <Button type="submit" variant={stat ? 'ghost': 'default'}>Confirm</Button>
              </form> */}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    {/* <TableRow>
          <TableCell className="font-extrabold" colSpan={5}>Total</TableCell>
          <TableCell className="font-extrabold">&#8377;&nbsp;
            {
              invoices.reduce((acc, invoice) => acc + parseFloat(invoice.totalAmount), 0)
            }
          </TableCell>
        </TableRow> */}
                </TableFooter>
            </Table>
        </div>
    )
}

export default page