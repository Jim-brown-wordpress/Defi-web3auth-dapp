export declare class CreateNewCollection {
    collectionName: string;
    collectionSymbol: string;
    collectionID: number;
    pinataURL: string;
}
export declare class addNewCollectionID {
    newCollectionID: number;
}
export declare class PayPlan1 {
    collectionID: number;
    rewardBoxIndex: number;
    boxPrice: number;
    rewardTokenTotalAmount: number;
    contractAddr: string;
    sourceAddr: string;
    destinationAddr: string;
}
export declare class PayPlan2 {
    collectionID: number;
    rewardBoxIndex: number;
    payRate: number;
    performancePoolRate: number;
    infinity1Rate: number;
    infinity2Rate: number;
    influencerRate: number;
    treasureRate: number;
}
export declare class AddPerson {
    owner: string;
    inviter: string;
}
export declare class SetAddresses {
    newBusdContractAddress: string;
    newPerformancePoolAddress: string;
    newTreasureAddress: string;
    newInfluenceAddress: string;
}
export declare class setRewardPeriodWeeks {
    newRewardPeriod: number;
}
export declare class setFriendChainRewardRate {
    newFriendChainRewardRate: number;
    index: number;
}
export declare class setPoolValue {
    newPoolQ_price: number;
}
