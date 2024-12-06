"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { CheckIcon, TruckIcon } from "lucide-react"
import Link from "next/link"

const vehicle = [
  { label: "CG 04 AB 1234", value: "en" },
  { label: "CG 02 CD 1204", value: "fr" },
  { label: "CG 05 EF 3234", value: "de" },
  { label: "CG 06 GH 1234", value: "es" },
  { label: "CG 04 IJ 1284", value: "pt" },
  { label: "CG 08 KL 7234", value: "ru" },
  { label: "CG 04 MN 1234", value: "ja" },
  { label: "CG 09 OP 9234", value: "ko" },
  { label: "CG 04 QR 0234", value: "zh" },
] as const

const FormSchema = z.object({
  vehicle: z.string({
    required_error: "Please select a vehicle.",
  }),
})

export function Newdefectentry() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    ;({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <div className="bg-[url('/16.jpg')] bg-cover bg-center h-screen w-full flex items-center justify-center">
      <div className="mb-60 ">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="vehicle"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="mt-6 text-3xl text-gray-950 font-extrabold">
                    New Defect Entry
                  </FormLabel>
                  <FormLabel>
                    Select vehicle on which work is to be done
                  </FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          role="combobox"
                          className={cn(
                            "w-[200px] justify-between",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value
                            ? vehicle.find(
                                (vehicle) => vehicle.value === field.value
                              )?.label
                            : "Select Vehicle number"}
                          <TruckIcon className="ml-2 h-6 w-6 shrink-0 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
                      <Command>
                        <CommandInput
                          placeholder="Search framework..."
                          className="h-9"
                        />
                        <CommandList>
                          <CommandEmpty>No framework found.</CommandEmpty>
                          <CommandGroup>
                            {vehicle.map((vehicle) => (
                              <CommandItem
                                value={vehicle.label}
                                key={vehicle.value}
                                onSelect={() => {
                                  form.setValue("vehicle", vehicle.value)
                                }}
                              >
                                {vehicle.label}
                                <CheckIcon
                                  className={cn(
                                    "ml-auto h-4 w-4",
                                    vehicle.value === field.value
                                      ? "opacity-100"
                                      : "opacity-0"
                                  )}
                                />
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              <Link href="/adds">SUBMIT</Link>
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}
