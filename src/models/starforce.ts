import {it} from "node:test";


export interface StarForceChane {
    success: number;
    destroy: number;
    fail: number;
    downgradeOnFail: boolean;
}

export class StarForce {


    static getStarForceCost(currentStar: number, itemLevel: number, discount?: number | undefined): number {

        if (currentStar < 0 || currentStar >= 25)
            throw new Error("Invalid star count");

        if (itemLevel < 0 || itemLevel > 250)
            throw new Error("Invalid item level");

        let cost = 0;
        if (currentStar < 10)
            cost = 1000 + Math.pow(itemLevel, 3) * (currentStar + 1) / 25;
        else if (currentStar < 15)
            cost = 1000 + Math.pow(currentStar + 1, 2.7) / 400 * Math.pow(itemLevel, 3);
        else if (currentStar < 25)
            cost = 1000 + Math.pow(currentStar + 1, 2.7) / 200 * Math.pow(itemLevel, 3);
        if (discount)
            cost = cost * (1 - discount);

        cost = Math.round(cost / 100) * 100;

        return cost;
    }

    static getStarForceChance(currentStar: number,): number {


        return 0;
    }

    static generateStarForceChances(
        args?:{
            event1516?: boolean,
            starCatch?: boolean,
            preventDestroy?: boolean,
        }

    ) {
        const chances: StarForceChane[] = [];

        for (let i = 0; i <= 24; i++) {
            let chance: StarForceChane = {
                success: 0,
                destroy: 0,
                fail: 100,
                downgradeOnFail: true
            };

            if (i < 3) {
                chance.success = 95 - (i * 5);
            } else if (i < 10) {
                chance.success = 100 - (i * 5);
            } else if (i < 15) {
                chance.success = 55 - ((i - 10) * 5);
            } else if (i < 20) {
                chance.success = 30;
            } else if (i < 22) {
                chance.success = 30;
            } else if (i === 22) {
                chance.success = 3;
            } else if (i === 23) {
                chance.success = 2;
            } else if (i === 24) {
                chance.success = 1;
            }


            if(i <= 15 || i===20) chance.downgradeOnFail = false;

            //15성 16성 이벤트
            if(args?.event1516 && (i===5 || i===10 || i===15)) {
                chance.success = 100;
                chance.destroy = 0;
            }

            if(args?.starCatch) {
                chance.success = Math.min(chance.success * 1.05, 100);
            }

            if(i<15 || (args?.event1516 && i===15) || (args?.preventDestroy && (i=== 15 || i===16)) ) {
                chance.destroy = 0;
            } else if(i<18) {
                chance.destroy = 3 * ((100-chance.success) / 100);
            } else if(i<20) {
                chance.destroy = 4 * ((100-chance.success) / 100);
            } else if(i<22) {
                chance.destroy = 10 * ((100-chance.success) / 100);
            } else if(i<23) {
                chance.destroy = 20 * ((100-chance.success) / 100);
            } else if(i<24) {
                chance.destroy = 30 * ((100-chance.success) / 100);
            } else if(i===24) {
                chance.destroy = 40 * ((100-chance.success) / 100);
            }



            chance.fail = 100 - chance.success - chance.destroy;
            chance.destroy = Math.round(chance.destroy * 100) / 100;
            chances.push(chance);
        }

        return chances;
    };


}