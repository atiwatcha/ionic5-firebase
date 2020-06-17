export class WatherDispenser {
    id: string;
    userUID: string;
    location: string;
    installDate:string;
    CountingMoney: CountingMoney[];
    ChangFilter: ChangFilter[];
}

export class CountingMoney {
    date: string;
    amount: number;
    remark: string;
}

export class ChangFilter {
    date: string;
    filter: boolean;
    filterRO: boolean;
    remark: string;
}
