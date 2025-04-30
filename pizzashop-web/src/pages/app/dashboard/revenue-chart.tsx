import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import colors, { coolGray } from 'tailwindcss/colors'

import { 
    ResponsiveContainer, 
    LineChart, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Line, 
    Tooltip
} from 'recharts'

const data = [
    { data: '30/04', revenue: 950 },
    { data: '01/05', revenue: 1120 },
    { data: '02/05', revenue: 870 },
    { data: '03/05', revenue: 1320 },
    { data: '04/05', revenue: 1450 },
    { data: '05/05', revenue: 1600 },
    { data: '06/05', revenue: 980 }
];  

export function RevenueChart() {
    return (
       <Card className="col-span-6">
            <CardHeader className="flex-row items-center justify-between pb-8">
                <div className="space-y-1">
                    <CardTitle className="text-base font-medium">Receita no Período</CardTitle>
                    <CardDescription>Receita dirária no período</CardDescription>
                </div>
            </CardHeader>

            <CardContent>
                <ResponsiveContainer width="100%" height={240}>
                    <LineChart data={data} style={{fontSize: 12}}>
                        <XAxis 
                            dataKey="date" 
                            axisLine={false}  
                            tickLine={false} 
                            dy={16} />
                        <YAxis
                            stroke="#888"
                            axisLine={false}
                            tickLine={false}
                            width={80}
                            tickFormatter={(value: number) =>
                                value.toLocaleString('pt-BR', {
                                style: 'currency',
                                currency: 'BRL',
                                })
                            }
                        />

                        <CartesianGrid vertical={false} className="stroke-muted"/>

                        <Line type="linear" strokeWidth={3} dataKey="revenue" stroke={colors.violet[500]}/>
                    </LineChart>

                    
                </ResponsiveContainer>
            </CardContent>
       </Card> 
    )
}