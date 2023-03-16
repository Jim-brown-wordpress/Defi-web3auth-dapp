import { addNewCollectionID, CreateNewCollection } from 'src/dto/nftCollection.dto';
export declare class InteractionController {
    constructor();
    createDeployNewCollection(newCollection: CreateNewCollection): Promise<void>;
    addNewCollection(newCollectionID: addNewCollectionID): Promise<void>;
    setPayPlan1(newCollectionID: addNewCollectionID): Promise<void>;
}
