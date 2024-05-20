import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { WeightTableProps } from "./types";
  

const WeightTable = ({data}: WeightTableProps) => {
    return (
        <Table className="bg-white rounded overflow-y-auto">
        <TableCaption>Histórico de peso</TableCaption>
        <TableHeader>
            <TableRow>
            <TableHead>Data</TableHead>
            <TableHead>Peso</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {data.map((record, index) => {
                return (
                <TableRow key={index}>
                    <TableCell className="font-medium">{record.date.toDateString()}</TableCell>
                    <TableCell>{record.weight} Kg</TableCell>
                </TableRow>
                )
            })}
        </TableBody>
        </Table>
    )
}

export default WeightTable;