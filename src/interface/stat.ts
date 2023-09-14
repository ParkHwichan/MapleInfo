


export interface Stat {
    bossDamage?: Array<number>;
    minionDamage?: Array<number>;
    critChance?: Array<number>;
    critDamage?: Array<number>;
    buffDuration?: Array<number>;
    resist?: Array<number>;
    ignoreDef?: Array<number>;
    damage?: Array<number>;
    allStat?: Array<number>;
    str?: Array<number>;
    dex?: Array<number>;
    int?: Array<number>;
    luk?: Array<number>;
    pad?: Array<number>;
    mad?: Array<number>;
    expGain?: Array<number>;
    hp?: Array<number>;
    mp?: Array<number>;
}

export type StatName =
    "bossDamage" | "minionDamage" | "critChance" | "critDamage" | "buffDuration" |
    "resist" | "ignoreDef" | "damage" | "allStat" |
    "str" | "dex" | "int" | "luk" | "pad" | "mad" | "expGain" | "hp" | "mp"

export interface UnionCharacter {
    name: string;
    class: Class;
    level: number;
}

export type classType = "warrior" | "magician" | "bowman" | "thief" | "pirate" | "xenon";

export interface MainClass {
    type: classType;
    puzzles: Array<Array<Array<number>>>;
    color: string;
}

export interface Class {
    type: MainClass;
    name: string;
    stat: Stat;
}

export const mainClasses: Array<MainClass> = [
    {
        type: "warrior",
        color: "rgb(255,0,0)",
        puzzles: [
            [
                [1],
            ],
            [
                [1, 1]
            ],
            [
                [1, 1],
                [1, 0],
            ],
            [
                [1, 1],
                [1, 1],
            ],
            [
                [1, 1, 1],
                [1, 1, 0],
            ],
        ],
    },
    {
        type: "magician",
        color: "rgb(0,0,255)",
        puzzles: [
            [
                [1],
            ],
            [
                [1, 1]
            ],
            [
                [1, 1, 1],
            ],
            [
                [1, 1, 1],
                [0, 1, 0],
            ],
            [
                [0, 1, 0],
                [1, 1, 1],
                [0, 1, 0],
            ],
        ],
    },
    {
        type: "bowman",
        color: "rgb(0,255,0)",
        puzzles: [
            [
                [1],
            ],
            [
                [1, 1]
            ],
            [
                [1, 1, 1],
            ],
            [
                [1, 1, 1, 1],
            ],
            [
                [1, 1, 1, 1, 1],
            ],
        ],
    },
    {
        type: "thief",
        color: "rgb(224,0,255)",
        puzzles: [
            [
                [1],
            ],
            [
                [1, 1]
            ],
            [
                [1, 1, 1],
            ],
            [
                [1, 1, 1],
                [0, 0, 1],
            ],
            [
                [1, 0, 0],
                [1, 1, 1],
                [1, 0, 0],
            ],
        ],
    },
    {
        type: "pirate",
        color: "rgba(144,144,144,0.18)",
        puzzles: [
            [
                [1],
            ],
            [
                [1, 1]
            ],
            [
                [1, 1],
                [1, 0]
            ],
            [
                [1, 0],
                [1, 1],
                [0, 1]
            ],
            [
                [1 ,0],
                [1, 0],
                [1, 1],
                [0, 1]
            ],
        ],
    }
]


export const mapleClasses: Array<Class> = [
    {
        type: mainClasses[0],
        name: "팔라딘",
        stat: {
            str: [10, 20, 40, 80, 100]
        },
    },
    {
        type: mainClasses[0],
        name: "다크나이트",
        stat: {
            hp: [10, 20, 40, 80, 100]
        }
    },
    {
        type: mainClasses[0],
        name: "히어로",
        stat: {
            str: [10, 20, 40, 80, 100]
        }
    },
    {
        type: mainClasses[1],
        name: "아크메이지(썬,콜)",
        stat: {
            int: [10, 20, 40, 80, 100]
        }
    },
    {
        type: mainClasses[1],
        name: "아크메이지(불,독)",
        stat: {
            int: [10, 20, 40, 80, 100]
        }
    },
    {
        type: mainClasses[1],
        name: "비숍",
        stat: {
            int: [10, 20, 40, 80, 100]
        }
    },
    {
        type: mainClasses[2],
        name: "패스파인더",
        stat: {
            dex: [10, 20, 40, 80, 100]
        }
    },
    {
        type: mainClasses[2],
        name: "신궁",
        stat: {
            dex: [10, 20, 40, 80, 100]
        }
    },
    {
        type: mainClasses[2],
        name: "보우마스터",
        stat: {
            dex: [10, 20, 40, 80, 100]
        }
    },
    {
        type: mainClasses[3],
        name: "나이트로드",
        stat: {
            critChance: [1,2,3,4,5]
        }
    },
    {
        type: mainClasses[3],
        name: "섀도어",
        stat: {
            luk: [10, 20, 40, 80, 100]
        }
    },
    {
        type: mainClasses[3],
        name: "듀얼블레이더",
        stat: {
            luk: [10, 20, 40, 80, 100]
        }
    },
    {
        type: mainClasses[4],
        name: "캡틴",
        stat: {
            str: [10, 20, 40, 80, 100]
        }
    },
    {
        type: mainClasses[4],
        name: "캐논슈터",
        stat: {
            str: [10, 20, 40, 80, 100]
        }
    },
    {
        type: mainClasses[4],
        name: "바이퍼",
        stat: {
            str: [10, 20, 40, 80, 100]
        }
    }
]

