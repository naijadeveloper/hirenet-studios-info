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
      <SheetContent className="w-full px-2 sm:max-w-2xl">
        <Tabs
          defaultValue="attention"
          className="w-full sm:flex sm:flex-col sm:items-center mt-6"
        >
          <TabsList className="max-sm:w-full max-sm:justify-between">
            <TabsTrigger value="attention" className="px-2 max-[380px]:text-xs">
              Attention
            </TabsTrigger>
            <TabsTrigger value="mission" className="px-2 max-[380px]:text-xs">
              Our mission
            </TabsTrigger>
            <TabsTrigger value="vision" className="px-2 max-[380px]:text-xs">
              Our vision
            </TabsTrigger>
            <TabsTrigger value="crew" className="px-2 max-[380px]:text-xs">
              The crew
            </TabsTrigger>
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
