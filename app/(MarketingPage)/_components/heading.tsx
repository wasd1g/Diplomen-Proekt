"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Heading = () => {
    return (
        <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
                Ideite, dokumentite i proektite Vi v edno. <span className='underline'>
                    Kaloyan's Notes
                </span>
            </h1>
            <h3 className="text-base sm:text-xl md:text-2xl font-medium">
                Tuk mojete da si zapisvate belejki i da sledite ejednevieto si, <br />
                po unikalen nachin.
            </h3>
            <Button>
                Vlez<ArrowRight className="h-4 w-4 ml-2"/>
                Kaloyan's Notes <br/>
                <ArrowRight className="h-4 w-4 ml-2"/>
            </Button>
        </div>
    )
}