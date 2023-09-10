import Card from "@/components/card/card";
import Image from "next/image";

export default function Page() {


    return     <main className="flex flex-col items-center gap-4 md:p-24 mx-auto max-w-6xl">

        <h1 className="text-6xl font-bold">
           유니온 배치기
        </h1>
        <div className={"grid grid-cols-3 gap-4 w-full"} >
            <Card className={"bg-gradient-red  justify-center items-center font-bold"}>
                유니온 배치기
            </Card>
            <Card className={"bg-gradient-blue  justify-center items-center font-bold "}>
                스타 포스 시뮬레이터
            </Card>
            <Card className={"bg-gradient-green"}>
                <Image src={"/images/hero.png"} width={100} height={100} alt={"hero"}/>
            </Card>
            <Card className={"bg-gradient-pink"}>
                <Image src={"/images/hero.png"} width={100} height={100} alt={"hero"}/>
            </Card>
            <Card className={"bg-gradient-purple"}>
                <Image src={"/images/hero.png"} width={100} height={100} alt={"hero"}/>
            </Card>
        </div>
    </main>
}