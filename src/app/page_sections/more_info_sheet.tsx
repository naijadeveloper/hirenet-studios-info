import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function InfoSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="inline-flex justify-center items-center py-3 px-5 sm:ms-4 text-base font-medium text-center rounded-md border text-white border-gray-700 hover:bg-gray-800">
          Learn more
        </button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-2xl">
        {/* <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader> */}
        <Tabs defaultValue="attention" className="w-full mt-6 border">
          <TabsList className="border border-pink-300">
            <TabsTrigger value="attention">Attention</TabsTrigger>
            <TabsTrigger value="mission">Our mission</TabsTrigger>
            <TabsTrigger value="vision">Our vision</TabsTrigger>
            <TabsTrigger value="crew">The crew</TabsTrigger>
          </TabsList>
          {/*attention*/}
          <TabsContent value="attention" className="w-full">
            Important informations here.
          </TabsContent>
          {/*mission*/}
          <TabsContent value="mission" className="w-full">
            Our mission here
          </TabsContent>
          {/*vision*/}
          <TabsContent value="vision" className="w-full">
            Our vision here
          </TabsContent>
          {/*crew*/}
          <TabsContent value="crew" className="w-full">
            Meet the crew
          </TabsContent>
        </Tabs>
      </SheetContent>
    </Sheet>
  );
}
