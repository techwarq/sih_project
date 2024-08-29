import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenuLabel } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function ProductCreateRoute() {
    return (
       <form>
        <div className="flex items-center gap-4">
            <Button variant="outline" size="icon">
                <Link href="/dashboard/products">
                <ChevronLeft className="w-4 h-4" />
                </Link>
            </Button>
            <h1 className="text-xl font-semibold tracking-tight">New Product</h1>
        </div>
        <Card>
            <CardHeader>
                <CardTitle>Product Details</CardTitle>
                <CardDescription>
                    In this form you can create your product
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-3">
                        <Label>
                           Name
                        </Label>
                        <Input type="text"
                        className="w-full"
                        placeholder="Product Name"
                         />

                    </div>
                    <div className="flex flex-col gap-3">
                        <Label>Description</Label>
                        <Textarea placeholder="Write your description right here...."></Textarea>
                    </div>

                    <div className="flex flex-col gap-3">
                        <Label>Price</Label>
                        <Input type="number" placeholder="$500" />
                    </div>

                </div>
            </CardContent>
        </Card>
       </form>
    )
}