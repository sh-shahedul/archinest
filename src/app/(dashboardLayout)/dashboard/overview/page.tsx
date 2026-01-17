import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, DollarSign, ShoppingCart } from "lucide-react"

type StatItem = {
  title: string
  value: string
  icon: React.ElementType
}

const stats: StatItem[] = [
  {
    title: "Total Users",
    value: "1,245",
    icon: Users,
  },
  {
    title: "Revenue",
    value: "$12,450",
    icon: DollarSign,
  },
  {
    title: "Orders",
    value: "320",
    icon: ShoppingCart,
  },
]

const OverView: React.FC = () => {
  return (
    <div className="mt-20 space-y-6">
      {/* Top Stats */}
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <Icon className="h-5 w-5 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  Updated just now
                </p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Main Content */}
      <Card className="min-h-[100vh] md:min-h-min">
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between border-b pb-3">
            <span>User John registered</span>
            <span className="text-sm text-muted-foreground">2 min ago</span>
          </div>
          <div className="flex items-center justify-between border-b pb-3">
            <span>New order placed</span>
            <span className="text-sm text-muted-foreground">10 min ago</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Service updated</span>
            <span className="text-sm text-muted-foreground">1 hour ago</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default OverView
