// "use client";

// import {UpdateServiceModal } from "@/components/modals/UpdateServiceModal";
// // import { DeleteserviceModal } from "@/components/modals/DeleteserviceModal";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { TService } from "@/types/servces";
// import { Unplug } from "lucide-react";

// import Link from "next/link";
// import { useEffect, useState } from "react";

// export default function AllservicesPage() {
//   const [services, setServices] = useState<TService[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedUpdateserviceId, setSelectedUpdateserviceId] = useState<
//     string | null
//   >(null);
//   const [modalOpen, setModalOpen] = useState(false);
//   const [deleteOpen, setDeleteOpen] = useState(false);
//   const [selectedDeleteserviceId, setSelectedDeleteserviceId] = useState<
//     string | null
//   >(null);

//   const fetchservices = async () => {
//     try {
//       const res = await fetch("/api/services");
//       const data = await res.json();
//       setServices(data);
//     } catch (error) {
//       console.error("Failed to fetch services", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchservices();
//   }, []);

//   return (
//     <main className="min-h-screen bg-gray-50 p-6 mt-10">
//       <Card>
//         <CardHeader className="flex flex-row items-center justify-between">
//           <div>
//             <CardTitle>All services</CardTitle>
//             <CardDescription>
//               Manage and view all created services
//             </CardDescription>
//           </div>

//           <Link href="/dashboard/createService">
//             <Button>Create service</Button>
//           </Link>
//         </CardHeader>

//         <CardContent>
//           {loading ? (
//             <p className="text-sm text-muted-foreground">Loading services...</p>
//           ) : services.length === 0 ? (
//             <p className="text-sm text-muted-foreground">No services found.</p>
//           ) : (
//             <Table>
//               <TableHeader>
//                 <TableRow>
//                   <TableHead>#</TableHead>
//                   <TableHead>Image</TableHead>
//                   <TableHead>Title</TableHead>
//                   <TableHead>Category</TableHead>
//                   <TableHead>price(BDT)</TableHead>
//                   <TableHead className="text-right">Actions</TableHead>
//                 </TableRow>
//               </TableHeader>

//               <TableBody>
//                 {services.map((service,index) => (
//                   <TableRow key={service.id}>
//                     <TableCell className="font-medium">{index+1}</TableCell>
//                     <TableCell className="truncate max-w-50">
//                       <img className="w-16 h-16 rounded-lg" src={service.image} alt="" />
//                     </TableCell>
//                     <TableCell className="font-medium">{service.title}</TableCell>
//                     <TableCell>{service.category}</TableCell>
//                     <TableCell>{service.price}</TableCell>
                    
//                     <TableCell className="text-right space-x-2">
//                       <Button
//                         size="sm"
//                         variant="outline"
//                         onClick={() => {
//                           setSelectedUpdateserviceId(service.id!);
//                           setModalOpen(true);
//                         }}
//                       >
//                         Edit
//                       </Button>

//                       {/* <Button
//                         size="sm"
//                         variant="destructive"
//                         onClick={() => {
//                           setSelectedDeleteserviceId(service.id!);
//                           setDeleteOpen(true);
//                         }}
//                       >
//                         Delete
//                       </Button> */}
//                       <Button
//   size="sm"
//   variant="outline"
//   onClick={() => {
//     if (!service.id) return;
//     setSelectedUpdateserviceId(service.id);
//     setModalOpen(true);
//   }}
// >
//   Edit
// </Button>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           )}
//         </CardContent>
//       </Card>

//       <UpdateServiceModal
//         serviceId={selectedUpdateserviceId || ""}
//         open={modalOpen}
//         onClose={setModalOpen}
//         onUpdated={fetchservices}
//       />

//       {/* <DeleteserviceModal
//         serviceId={selectedDeleteserviceId || ""}
//         open={deleteOpen}
//         onClose={setDeleteOpen}
//         onDeleted={fetchservices}
//       /> */}
//     </main>
//   );
// }

"use client";

import { DeleteServiceModal } from "@/components/modals/DeleteServiceModal";
import { UpdateServiceModal } from "@/components/modals/UpdateServiceModal";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TService } from "@/types/servces";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AllservicesPage() {
  const [services, setServices] = useState<TService[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
   const [selectedDeleteserviceId, setSelectedDeleteServiceId] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const fetchServices = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/services");
      const data = await res.json();
      setServices(data);
    } catch (err) {
      console.error("Failed to fetch services:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 p-6 mt-10">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>All Services</CardTitle>
            <CardDescription>Manage all created services</CardDescription>
          </div>

          <Link href="/dashboard/createService">
            <Button>Create Service</Button>
          </Link>
        </CardHeader>

        <CardContent>
          {loading ? (
            <p className="text-sm text-muted-foreground">Loading services...</p>
          ) : services.length === 0 ? (
            <p className="text-sm text-muted-foreground">No services found.</p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>#</TableHead>
                  <TableHead>Image</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Price (BDT)</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {services.map((service, index) => (
                  <TableRow key={service.id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>
                      <img className="w-16 h-16 rounded-lg" src={service.image} alt={service.title} />
                    </TableCell>
                    <TableCell>{service.title}</TableCell>
                    <TableCell>{service.category}</TableCell>
                    <TableCell>{service.price}</TableCell>
                    <TableCell className="text-right space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => {
                          // if (!service.id) return; 
                          setSelectedServiceId(service.id);
                          setModalOpen(true);
                        }}
                      >
                        Edit
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => {
                        setSelectedDeleteServiceId(service.id!);
                          setDeleteOpen(true);
                        }}
                      >
                        Delete
                       </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>

      {selectedServiceId && (
        <UpdateServiceModal
          serviceId={selectedServiceId}
          open={modalOpen}
          onClose={setModalOpen}
          onUpdated={fetchServices}
        />
        
      )}
      {selectedDeleteserviceId && (
        <DeleteServiceModal
        serviceId={selectedDeleteserviceId || ""}
        open={deleteOpen}
        onClose={setDeleteOpen}
        onDeleted={fetchServices}
      />
      )
      
      }
    </main>
  );
}
