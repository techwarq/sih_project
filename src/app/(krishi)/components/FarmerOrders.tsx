'use client'
import { Button } from "@/components/ui/button"
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

import { marketOrder } from "../../../../dataset/farmertable"
import { handleConfirm } from "@/actions/backend"
import { useEffect, useState } from "react"
import { marketOrders } from "@/actions/backend"

const invoices = marketOrder


const FarmerOrders = () => {
  const [order, setOrder] = useState<object[]>([])
  const [confirmedOrders, setConfirmedOrders] = useState<number[]>([])

  useEffect(() => {
    async function orders () {
      const response = await marketOrders()
      setOrder(response)
    }
    orders()
  },[])

  const handleConfirmation = async (invoice: any) => {
    const response: { status: string } | undefined = await handleConfirm(invoice) as { status: string } | undefined
    if (response && response.status === 'success') {
      setConfirmedOrders([...confirmedOrders, invoice.orderId])
    }
  }

  return (
    <>
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
        {order.map((invoice: any) => (
          <TableRow key={invoice.orderId}>
            <TableCell className="font-medium">ORD{invoice.orderId}</TableCell>
            <TableCell>{invoice.item}</TableCell>
            <TableCell>{invoice.buyerName}</TableCell>
            <TableCell>{invoice.quantity}</TableCell>
            <TableCell>{invoice.specialRequirements}</TableCell>
            <TableCell>&#8377; {invoice.amount}</TableCell>
            <TableCell className="text-right">
              <Button 
                type="button" 
                variant='default'
                onClick={() => handleConfirmation(invoice)}
                disabled={confirmedOrders.includes(invoice.orderId)}
                >
                {confirmedOrders.includes(invoice.id) ? 'Confirmed' : 'Confirm'}
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </>
  )
}

export default FarmerOrders
